import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";
const uri = process.env.MONGO_URI;

if (!uri) {
    throw new Error("Please define the MONGO_URI environment variable inside .env.local");
}

export async function GET(request) {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("Foodrelief2");
        const Volunteer = database.collection("Volunteer");

        const query = {};
        const Volunteers = await Volunteer.find(query).toArray();

        return NextResponse.json(Volunteers, { status: 200 });
    } catch (error) {
        console.error("Error fetching volunteers:", error);
        return NextResponse.json({ error: "Failed to fetch volunteers" }, { status: 500 });
    } finally {
        await client.close();
    }
}

export async function POST(request) {
    let body;
    try {
        body = await request.json();
    } catch (error) {
        console.error("Error parsing request body:", error);
        return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("Foodrelief2");
        const Volunteers = database.collection("Volunteer");
        const Volunteer = await Volunteers.insertOne(body);
        return NextResponse.json({ Volunteer, ok: true }, { status: 201 });
    } catch (error) {
        console.error("Error inserting volunteer:", error);
        return NextResponse.json({ error: "Failed to insert volunteer" }, { status: 500 });
    } finally {
        await client.close();
    }
}

