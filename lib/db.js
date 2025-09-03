// lib/db.js
import mysql from 'mysql2/promise';

const dbUrl = new URL(process.env.DATABASE_URL); // Railway MySQL URL

const db = mysql.createPool({
  host: dbUrl.hostname,        // maglev.proxy.rlwy.net
  user: dbUrl.username,        // root
  password: dbUrl.password,    // your password
  database: dbUrl.pathname.slice(1), // railway (remove leading slash)
  port: dbUrl.port || 3306,    // fallback to 3306
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default db;
