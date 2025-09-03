import nextConnect from 'next-connect';
import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import db from '../../lib/db';
import fs from 'fs';

export const config = { api: { bodyParser: false } };

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// Use multer to store the uploaded file temporarily in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

const apiRoute = nextConnect({
  onError(error, req, res) {
    console.error(error);
    res.status(500).json({ message: error.message || 'Unexpected error' });
  },
  onNoMatch(req, res) {
    res.status(405).json({ message: 'Method not allowed' });
  },
});

// Accept a single file with fieldname 'image'
apiRoute.use(upload.single('image'));

apiRoute.post(async (req, res) => {
  try {
    const { name, address, city, state, contact, email_id } = req.body;

    if (!name || !address || !city || !state || !contact || !email_id || !req.file) {
      return res.status(400).json({ message: 'All fields including image are required' });
    }

    // Upload buffer to Cloudinary
    const uploadResult = await cloudinary.uploader.upload_stream(
      { folder: 'schoolImages' },
      async (error, result) => {
        if (error) {
          console.error('Cloudinary error:', error);
          return res.status(500).json({ message: error.message });
        }

        const imageUrl = result.secure_url;

        // Save to MySQL
        const [dbResult] = await db.execute(
          `INSERT INTO schools (name,address,city,state,contact,email_id,image)
           VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [name, address, city, state, contact, email_id, imageUrl]
        );

        res.status(200).json({ id: dbResult.insertId, image: imageUrl });
      }
    );

    // Pipe file buffer to Cloudinary
    uploadResult.end(req.file.buffer);

  } catch (err) {
    console.error('UPLOAD ERROR:', err);
    res.status(500).json({ message: err.message });
  }
});

export default apiRoute;
