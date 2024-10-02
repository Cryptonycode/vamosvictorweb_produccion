import type { NextApiRequest, NextApiResponse } from 'next';
import { connection } from '../../lib/mysqlConnection'; // Asegúrate de que esta ruta sea correcta

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: 'El campo email es obligatorio' });
    }

    try {
      // Inserta el email en la tabla Newsletter
      const query = 'INSERT INTO Newsletter (email) VALUES (?)';
      const values = [email];
      const [result] = await connection.query(query, values);

      res.status(200).json({ message: 'Suscripción exitosa' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al suscribirse' });
    }
  } else {
    res.status(405).json({ message: 'Método no permitido' });
  }
}
