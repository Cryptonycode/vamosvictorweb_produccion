// src/lib/mysqlConnection.ts

import mysql from 'mysql2/promise';

export const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Función de prueba para verificar la conexión
(async function testConnection() {
  try {
    const [rows] = await connection.query('SELECT 1');
    console.log('Conexión a la base de datos exitosa:', rows);
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();

