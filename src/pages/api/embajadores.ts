import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from '../../lib/mysqlConnection'; // Importa la conexión a MySQL

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, email, postalCode } = req.body;

    // Validar los campos del formulario
    if (!name || !email || !postalCode) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
      // Insertar los datos en la tabla Embajadores
      const sqlQuery = 'INSERT INTO Embajadores (name, email, postal_code) VALUES (?, ?, ?)';
      const values = [name, email, postalCode]; // Definir los valores correctamente

      await connection.execute(sqlQuery, values); // Usar connection.execute en lugar de query para promesas

      return res.status(200).json({ message: 'Te has registrado correctamente como embajador' });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ error: 'Error en la base de datos' });
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' });
  }
}
