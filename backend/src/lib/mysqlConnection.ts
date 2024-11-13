// src/lib/mysqlConnection.ts

import mysql from 'mysql2/promise';
import { dbConfig } from './db';

// Crear el pool de conexión utilizando la configuración de `dbConfig`
export const connection = mysql.createPool(dbConfig);

// Función de prueba para verificar la conexión
(async function testConnection() {
  try {
    const [rows] = await connection.query('SELECT 1');
    console.log('Conexión a la base de datos exitosa:', rows);
  } catch (error) {
    console.error('Error al conectar con la base de datos:', error);
  }
})();


