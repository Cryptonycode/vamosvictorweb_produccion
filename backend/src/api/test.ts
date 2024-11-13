import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../lib/db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Realizamos una consulta de prueba a la base de datos
    const [rows] = await pool.query('SELECT 1 + 1 AS result');
    res.status(200).json({ result: rows[0].result });  // Esperamos el resultado 2
  } catch (error) {
    console.error('Error en la conexión a la base de datos:', error);
    res.status(500).json({ error: 'Error conectando a la base de datos' });
  }
}
