// src/lib/db.ts

export const dbConfig = {
  host: process.env.MYSQL_HOST || 'localhost',
  user: process.env.MYSQL_USER || 'root',
  password: process.env.MYSQL_PASSWORD || '1234',
  database: process.env.MYSQL_DATABASE || 'vamos_victor',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

