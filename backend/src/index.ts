import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise'; // Importamos mysql2
import embajadoresRouter from './api/embajadores';
import newsletterRouter from './api/newsletter';
import dotenv from 'dotenv';

// Cargar las variables de entorno desde .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:3000', // Ajusta esto según el dominio del frontend
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type, Authorization',
}));

// Middleware para parsear JSON
app.use(express.json());

// Configurar la conexión a la base de datos MySQL
const dbConfig = {
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
};

// Probar la conexión con la base de datos
async function testDatabaseConnection() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    await connection.ping(); // Comprobar la conexión
    console.log('Conexión a la base de datos MySQL exitosa');
    connection.end(); // Cerrar la conexión de prueba
  } catch (error) {
    console.error('Error al conectar con la base de datos MySQL:', error);
  }
}

testDatabaseConnection(); // Llamar a la función de prueba

// Define las rutas
app.use('/api/embajadores', embajadoresRouter);
app.use('/api/newsletter', newsletterRouter);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor backend en funcionamiento');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
