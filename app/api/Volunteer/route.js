import { NextResponse } from "next/server";
import { MongoClient, ObjectId } from "mongodb";
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
        const userExists = await Volunteers.findOne({ phone: body.phone });
        if (userExists) {
            return NextResponse.json({ error: "Volunteer already exists" }, { status: 400 });
        } else {
            const Volunteer = await Volunteers.insertOne(body);
            return NextResponse.json({ Volunteer, ok: true }, { status: 201 });
        }
    } catch (error) {
        console.error("Error inserting volunteer:", error);
        return NextResponse.json({ error: "Failed to insert volunteer" }, { status: 500 });
    } finally {
        await client.close();
    }
}

export async function DELETE(request) {
    const { id } = await request.json();

    console.log("Received ID for deletion:", id); // Log the ID for debugging

    if (!ObjectId.isValid(id)) {
        console.error("Invalid ID:", id); // Log invalid ID
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const client = new MongoClient(uri);

    try {
        await client.connect();
        const database = client.db("Foodrelief2");
        const Volunteers = database.collection("Volunteer");

        const result = await Volunteers.deleteOne({ _id: new ObjectId(id) });

        if (result.deletedCount === 1) {
            console.log("Volunteer deleted successfully:", id); // Log successful deletion
            return NextResponse.json({ message: "Volunteer deleted successfully" }, { status: 200 });
        } else {
            console.error("Volunteer not found:", id); // Log volunteer not found
            return NextResponse.json({ error: "Volunteer not found" }, { status: 404 });
        }
    } catch (error) {
        console.error("Error deleting volunteer:", error); // Log error
        return NextResponse.json({ error: "Failed to delete volunteer" }, { status: 500 });
    } finally {
        await client.close();
    }
}


