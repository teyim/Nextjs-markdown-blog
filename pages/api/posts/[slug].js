import { connectToDb, getPostsData } from "../../../helpers/db-utils";


async function handler(req, res) {
    let data;
    if (req.method === 'GET') {
        const { slug } = req.query;
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
            data = postData;
        } catch (error) {
            res.status(500).json({ message: 'Failed to get data' });
            return;
        }

        client.close();
        res.status(200).json(data);
    }

}
export default handler;
