// backend/src/api/newsletter.ts

import { Router } from 'express';
import { connection } from '../lib/mysqlConnection';
import Joi from 'joi';

const newsletterRouter = Router();

// Esquema de validación de Joi para el email
const schema = Joi.object({
  email: Joi.string().email().required(),
});

// Ruta para manejar la solicitud POST a newsletter
newsletterRouter.post('/', async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: 'Correo electrónico no válido o faltante' });
  }

  const { email } = req.body;

  try {
    // Inserta los datos en la tabla Newsletter
    const sqlQuery = 'INSERT INTO Newsletter (email) VALUES (?)';
    const values = [email];

    // Ejecutar la consulta
    const [result] = await connection.execute(sqlQuery, values);
    console.log('Resultado de la inserción en Newsletter:', result);

    return res.status(200).json({ message: 'Te has suscrito correctamente' });
  } catch (err: any) {
    console.error('Error en la base de datos:', err.message || err);
    if (err.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'El correo ya está registrado' });
    }
    return res.status(500).json({ error: 'Error en la base de datos' });
  }
});

export default newsletterRouter;
