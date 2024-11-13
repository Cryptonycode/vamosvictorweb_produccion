// backend/src/index.ts

import express from 'express';
import cors from 'cors';
import embajadoresRouter from './api/embajadores';
import newsletterRouter from './api/newsletter'; // Importa el router consolidado

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

// Define las rutas
app.use('/api/embajadores', embajadoresRouter);
app.use('/api/newsletter', newsletterRouter); // Usa la ruta consolidada para newsletter

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor backend en funcionamiento');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
