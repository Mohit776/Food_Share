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
        const user = database.collection("user");

        const query = {};
        const users = await user.find(query).toArray();

        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        console.error("Error fetching users", error);
        return NextResponse.json({ error: "Failed to fetch donations" }, { status: 500 });
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
        const user = database.collection("user");
        const result = await user.insertOne(body);
        return NextResponse.json({ user: result.ops[0], ok: true }, { status: 201 });
    } catch (error) {
        console.error("Error inserting user:", error);
        return NextResponse.json({ error: "Failed to insert data" }, { status: 500 });
    } finally {
        await client.close();
    }
}

