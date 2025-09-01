# School App (Next.js + MySQL)

A two-page assignment using Next.js with MySQL.

## Features
- Add a school with server & client validation (react-hook-form)
- Image upload to `public/schoolImages` using Multer
- List schools like an e-commerce grid (name, address, city, image)
- Responsive design (mobile & desktop)

## MySQL Setup

```sql
CREATE TABLE schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  city TEXT NOT NULL,
  state TEXT NOT NULL,
  contact VARCHAR(15) NOT NULL,
  image TEXT NOT NULL,
  email_id VARCHAR(255) NOT NULL
);
```

## Env
Create `.env.local`:

```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=your_database
```

## Run Locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

> Note: Writing to `public/` at runtime **won't persist on Vercel/Netlify**. For production hosting, swap Multer disk storage with a cloud storage (e.g., Cloudinary/Supabase/AWS S3) and save the returned URL in `image` column. The rest of the code will continue to work.

## Pages
- `/addSchool` – form to add
- `/showSchools` – catalog view
- `/api/addSchool` – POST with multipart/form-data
- `/api/getSchools` – GET list