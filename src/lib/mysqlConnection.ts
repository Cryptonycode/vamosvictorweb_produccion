import mysql from 'mysql2/promise';

// Configuración de la conexión a MySQL
const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '1234', // Cambia esto por tu contraseña real
  database: 'vamos_victor',
});

export default connection;
