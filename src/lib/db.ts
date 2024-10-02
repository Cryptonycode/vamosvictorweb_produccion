import mysql from 'mysql2/promise';

// Crear la conexión con la base de datos MySQL
const pool = mysql.createPool({
  host: 'localhost',          // Host de tu servidor de base de datos
  user: 'root',               // Usuario de la base de datos
  password: '1234',           // Contraseña del usuario
  database: 'vamos_victor',   // Nombre de la base de datos
  waitForConnections: true,   // Espera por conexiones si están todas en uso
  connectionLimit: 10,        // Número máximo de conexiones
  queueLimit: 0               // Límite de consultas en espera (0 = sin límite)
});

export default pool;
