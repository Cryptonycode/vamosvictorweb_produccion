import Head from 'next/head';
import Navbar from '../components/Navbar'; // Importa el componente Navbar
import { useState } from 'react';

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
      <footer className="bg-[#5b2121] text-white py-4 px-4">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          {/* Logo principal */}
          <img src="/logo_blanco.png" alt="Logo Victor" className="w-[140px] h-auto mb-4 lg:mb-0" />

          {/* Sección de redes sociales */}
          <div className="flex space-x-6 mb-4 lg:mb-0">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/facebook.svg" alt="Facebook Logo" className="w-[30px] h-auto filter invert" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/instagram.svg" alt="Instagram Logo" className="w-[30px] h-auto filter invert" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/x.svg" alt="X Logo" className="w-[30px] h-auto filter invert" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/youtube.svg" alt="YouTube Logo" className="w-[30px] h-auto filter invert" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src="/tiktok.svg" alt="TikTok Logo" className="w-[30px] h-auto filter invert" />
            </a>
          </div>

          {/* Contacto de prensa */}
          <div className="text-center lg:text-left">
            <p className="text-sm">Contacto de prensa:</p>
            <p className="text-sm font-bold">victorgonzalezcomunicacion@gmail.com</p>
          </div>
        </div>
        <div className="text-center text-xs mt-4">© 2024 - Victor González Comunicación</div>
      </footer>
    </div>
  );
}


