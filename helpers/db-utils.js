import { MongoClient } from 'mongodb';

export async function connectToDb() {
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.jlgq3.mongodb.net/${mongodb_database}?retryWrites=true&w=majority`
    const client = await MongoClient.connect(connectionString);

    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();

    const result = await db.collection(collection).insertOne(document);

    return result;
}