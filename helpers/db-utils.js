import { MongoClient } from 'mongodb';

export async function connectToDb() {
    const connectionString = `mongodb+srv://${process.env.NEXT_PUBLIC_mongodb_username}:${process.env.NEXT_PUBLIC_mongodb_password}@${process.env.NEXT_PUBLIC_mongodb_clustername}.jlgq3.mongodb.net/${process.env.NEXT_PUBLIC_mongodb_database}?retryWrites=true&w=majority`
    const client = await MongoClient.connect(connectionString);

    return client;
}

export async function insertDocument(client, collection, document) {
    const db = client.db();

    const result = await db.collection(collection).insertOne(document);

    return result;
}

export async function updateDocument(client, collection, document, likes) {
    const db = client.db();

    const updateDocument = {
        $set: {
            likes: likes + 1,
        },
    };
    const result = await db.collection(collection).updateOne(document, updateDocument);

    return result;
}

export async function getPostsData(client, collection, document) {
    const db = client.db();

    const query = document;

    const options = {

        projection: { likes: 1 },
    };

    const postData = await db.collection(collection).findOne(query, options);

    return postData;
}