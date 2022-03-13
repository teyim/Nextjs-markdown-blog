import { connectToDb, insertDocument } from "../../helpers/db-utils";

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, firstName } = req.body;
    if (
      !email ||
      !email.includes('@') ||
      email.trim() === '' ||
      !firstName ||
      firstName.trim() === ''
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
      await insertDocument(client, "newsletter", { firstName: firstName, email: email });
      client.close();
    } catch (error) {
      res.status(500).json({ message: 'Inserting data failed!' });
      return;
    }

    res.status(201).json({ message: 'Signed up!' });
  }

}
export default handler;
