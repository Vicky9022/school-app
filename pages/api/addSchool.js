import nextConnect from 'next-connect';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import db from '../../lib/db';

export const config = {
  api: { bodyParser: false }
};

// Ensure folder exists
const publicDir = path.join(process.cwd(), 'public', 'schoolImages');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, publicDir);
  },
  filename: function (req, file, cb) {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname || '.jpg');
    cb(null, unique + ext);
  }
});

const upload = multer({ storage });

const apiRoute = nextConnect({
  onError(error, req, res) {
    console.error('Upload error', error);
    res.status(500).json({ message: error.message || 'Unexpected error' });
  },
  onNoMatch(req, res) {
    res.status(405).json({ message: 'Method not allowed' });
  },
});

apiRoute.use(upload.single('image'));

apiRoute.post(async (req, res) => {
  try {
    const { name, address, city, state, contact, email_id } = req.body || {};
    if (!name || !address || !city || !state || !contact || !email_id || !req.file) {
      return res.status(400).json({ message: 'All fields including image are required' });
    }

    // Basic server-side validation
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email_id);
    const contactOk = /^[0-9]{10,15}$/.test(contact);
    if (!emailOk) return res.status(400).json({ message: 'Invalid email' });
    if (!contactOk) return res.status(400).json({ message: 'Invalid contact number' });

    const imagePath = '/schoolImages/' + req.file.filename; // public path

    const [result] = await db.execute(
      `INSERT INTO schools (name, address, city, state, contact, image, email_id)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [name, address, city, state, contact, imagePath, email_id]
    );

    return res.status(200).json({ id: result.insertId, image: imagePath });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default apiRoute;