import Head from 'next/head';
import Navbar from '../components/Navbar'; // Importa el componente Navbar
import { useState } from 'react';
import Footer from '../components/Footer';


export default function Logros() {
  const [expanded, setExpanded] = useState(null);

  // Función para manejar el despliegue de logros
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Logros</title>
        <meta name="description" content="Logros de Victor González Comunicación" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white">
        <Navbar />
      </header>


{/* Sección para bajar el hero */}
<section className="bg-white h-[80px]"></section>
        {/* Sección de Contacto por WhatsApp */}
        <section className="bg-[#1c2a33] text-white py-12 px-4 text-center">
  <h2 className="text-2xl font-bold">Contactar por WhatsApp</h2>
  <p className="mt-4 text-sm">
    Envíame tus propuestas, ideas o dificultades y hablemos directamente para tratar de resolverlo.
  </p>
  <a
    href="https://w.app/vamosvictor" 
    target="_blank" 
    rel="noopener noreferrer"
    className="inline-block mt-6 bg-[#05B036] text-white font-bold py-2 px-4 rounded hover:bg-green-600"
  >
    WhatsApp
  </a>
</section>

      {/* Footer */}
<Footer /> {/* Llama al componente Footer aquí */}

    </div>
  );
}


