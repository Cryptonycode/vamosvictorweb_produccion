// src/pages/api/embajadores.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from '../../lib/mysqlConnection';
import Joi from 'joi';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Validación de los datos recibidos
        const schema = Joi.object({
            nombre: Joi.string().min(2).max(100).required(),
            email: Joi.string().email().required(),
            codigo_postal: Joi.string().min(5).max(10).required(),
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { nombre, email, codigo_postal } = req.body;

        try {
            // Consulta para insertar datos en la base de datos
            const sqlQuery = 'INSERT INTO Embajadores (nombre, email, codigo_postal) VALUES (?, ?, ?)';
            const values = [nombre, email, codigo_postal];

            console.log('Datos recibidos del formulario:', { nombre, email, codigo_postal });
            console.log('Intentando insertar en la base de datos con la consulta:', sqlQuery);
            console.log('Valores que se van a insertar:', values);

            // Ejecutar la consulta de inserción
            const [result] = await connection.execute(sqlQuery, values);
            console.log('Resultado de la inserción:', result);

            return res.status(200).json({ message: 'Te has suscrito correctamente' });
        } catch (err: any) {
            // Verificar el tipo de error
            console.error('Error al insertar en la base de datos:', err.message || err);
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ error: 'El usuario ya está registrado' });
            }
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
    } else {
        return res.status(405).json({ error: 'Método no permitido' });
    }
}
