import { NextApiRequest, NextApiResponse } from 'next';
import clientPromise from '../../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { email } = req.body;

      const client = await clientPromise;
      const db = client.db('your-database-name');

      const collection = db.collection('contacts');

      await collection.insertOne({ email, submittedAt: new Date() });

      res.status(200).json({ message: 'Contact email saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to save contact email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
