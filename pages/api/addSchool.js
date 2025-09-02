import nextConnect from 'next-connect';
import formidable from 'formidable';
import { v2 as cloudinary } from 'cloudinary';
import db from '../../lib/db';

export const config = { api: { bodyParser: false } };

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const apiRoute = nextConnect({
  onError(error, req, res) {
    console.error('Upload error', error);
    res.status(500).json({ message: error.message || 'Unexpected error' });
  },
  onNoMatch(req, res) {
    res.status(405).json({ message: 'Method not allowed' });
  },
});

apiRoute.post(async (req, res) => {
  const form = new formidable.IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) return res.status(500).json({ message: 'Form parsing failed' });

    try {
      const { name, address, city, state, contact, email_id } = fields;

      if (!name || !address || !city || !state || !contact || !email_id || !files.image) {
        return res.status(400).json({ message: 'All fields including image are required' });
      }

      // Upload image to Cloudinary
      const uploadResult = await cloudinary.uploader.upload(files.image.filepath, {
        folder: 'schoolImages',
      });
      const imageUrl = uploadResult.secure_url;

      // Insert into MySQL
      const [result] = await db.execute(
        `INSERT INTO schools (name, address, city, state, contact, image, email_id)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [name, address, city, state, contact, imageUrl, email_id]
      );

      return res.status(200).json({ id: result.insertId, image: imageUrl });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error' });
    }
  });
});

export default apiRoute;
