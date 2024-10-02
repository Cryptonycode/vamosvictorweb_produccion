// pages/api/submitForm.ts
import { NextApiRequest, NextApiResponse } from 'next';

// Función para manejar la solicitud POST
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Obtenemos los datos del cuerpo de la solicitud (el form data)
    const { nombre, email, codigoPostal } = req.body;

    // Aquí podrías procesar los datos, por ejemplo, guardarlos en una base de datos o enviarlos por correo
    console.log('Datos recibidos:', { nombre, email, codigoPostal });

    // Enviar una respuesta exitosa
    return res.status(200).json({ message: 'Datos recibidos correctamente' });
  } else {
    // Solo permitimos POST
    return res.status(405).json({ message: 'Método no permitido' });
  }
}
