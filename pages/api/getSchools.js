import db from '../../lib/db';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
  try {
    const [rows] = await db.execute(
      'SELECT id, name, address, city, state, image FROM schools ORDER BY id DESC'
    );
    res.status(200).json({ schools: rows });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Server error' });
  }
}
