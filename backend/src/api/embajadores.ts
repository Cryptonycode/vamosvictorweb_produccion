// src/api/embajadores.ts

import { Router } from 'express';
import { connection } from '../lib/mysqlConnection'; // Asegúrate de que esta ruta es correcta
import Joi from 'joi';

const embajadoresRouter = Router();

// Esquema de validación de Joi para los datos recibidos
const schema = Joi.object({
  nombre: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  codigo_postal: Joi.string().min(5).max(10).required(),
});

// Ruta de prueba para verificar que la ruta esté accesible
embajadoresRouter.get('/test', (req, res) => {
  res.status(200).json({ message: 'Ruta /api/embajadores accesible' });
});

// Ruta para manejar la solicitud POST
embajadoresRouter.post('/', async (req, res) => {
  // Validación de los datos recibidos
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { nombre, email, codigo_postal } = req.body;

  try {
    // Consulta para insertar datos en la base de datos
    const sqlQuery = 'INSERT INTO Embajadores (nombre, email, codigo_postal) VALUES (?, ?, ?)';
    const values = [nombre, email, codigo_postal];

    // Ejecutar la consulta de inserción
    const [result] = await connection.execute(sqlQuery, values);
    console.log('Resultado de la inserción:', result);

    return res.status(200).json({ message: 'Te has suscrito correctamente' });
  } catch (err: any) {
    // Manejo de errores
    console.error('Error al insertar en la base de datos:', err.message || err);
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'El usuario ya está registrado' });
    }
    return res.status(500).json({ error: 'Error en la base de datos' });
  }
});

export default embajadoresRouter;
