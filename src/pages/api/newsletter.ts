import type { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../lib/mysqlConnection'; // Conexión a MySQL
import Joi from 'joi'; // Importar Joi para validar los datos

// Definir el esquema de validación usando Joi
const schema = Joi.object({
  email: Joi.string().email().required(), // Validación de que sea un email válido
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    // Validación del email usando Joi
    const { error } = schema.validate({ email });

    if (error) {
      return res.status(400).json({ error: 'Correo electrónico no válido o faltante' });
    }

    try {
      // Inserta los datos a la tabla Newsletter
      const sqlQuery = 'INSERT INTO Newsletter (email) VALUES (?)';
      const values = [email]; // Definir los valores correctamente

      await connection.execute(sqlQuery, values); // Usa connection.execute para ejecutar la consulta

      return res.status(200).json({ message: 'Te has suscrito correctamente' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}
