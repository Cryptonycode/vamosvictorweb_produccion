import { NextApiRequest, NextApiResponse } from 'next';
import { connection } from '../../lib/mysqlConnection'; // Asegúrate de que el archivo de conexión a MySQL esté correctamente configurado
import Joi from 'joi';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Validación de los datos enviados desde el formulario
        const schema = Joi.object({
            name: Joi.string().min(2).max(100).required(),
            email: Joi.string().email().required(),
            postalCode: Joi.string().min(5).max(10).required()
        });

        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { name, email, postalCode } = req.body;

        try {
            // Preparar la consulta SQL para insertar en la base de datos
            const sqlQuery = 'INSERT INTO Embajadores (nombre, email, codigo_postal) VALUES (?, ?, ?)';
            const values = [name, email, postalCode];

            console.log('Datos recibidos del formulario:', { name, email, postalCode });
            console.log('Intentando insertar en la base de datos con la consulta:', sqlQuery);
            console.log('Valores que se van a insertar:', values);

            // Ejecutar la consulta
            await connection.query(sqlQuery, values);

            return res.status(200).json({ message: 'Te has suscrito correctamente' });
        } catch (err) {
            console.error(err);
            return res.status(500).json({ error: 'Error en la base de datos' });
        }
    } else {
        return res.status(405).json({ error: 'Método no permitido' });
    }
}

