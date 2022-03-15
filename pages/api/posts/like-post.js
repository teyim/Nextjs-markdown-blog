import { connectToDb, insertDocument, getPostsData, updateDocument } from "../../../helpers/db-utils";


async function handler(req, res) {
    if (req.method === 'POST') {
        const { slug } = req.body;
        if (
            !slug ||
            slug.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input.' });
            return;
        }

        let client;

        try {
            client = await connectToDb();
        } catch (error) {
            res.status(500).json({ message: 'Connecting to the database failed!' });
            return;
        }

        try {
            const postData = await getPostsData(client, "post-likes", { slug: slug })
            if (postData) {
                await updateDocument(client, "post-likes", { slug: slug }, postData.likes)
            }
            else
                await insertDocument(client, "post-likes", { slug, likes: 1 });

        } catch (error) {
            res.status(500).json({ message: 'Inserting data failed!' });
            return;
        }

        client.close();
        res.status(201).json({ message: 'like added' });
    }

}
export default handler;
