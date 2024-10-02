import { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar'; // Navbar

export default function Home() {
  // Estado para almacenar los datos del primer formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [postalCode, setPostalCode] = useState('');

  // Estado para almacenar el correo electrónico del segundo formulario
  const [newsEmail, setNewsEmail] = useState('');

  const handleSubmitHeroForm = async (e) => {
    e.preventDefault();

    // Enviar los datos del primer formulario al backend
    const response = await fetch('/api/save-contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, postalCode }),
    });

    if (response.ok) {
      alert('Datos enviados correctamente');
      setName(''); // Limpiar el formulario
      setEmail('');
      setPostalCode('');
    } else {
      alert('Error al enviar los datos');
    }
  };

  const handleSubmitNewsForm = async (e) => {
    e.preventDefault();

    // Enviar el correo electrónico del segundo formulario al backend
    const response = await fetch('/api/save-newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: newsEmail }),
    });

    if (response.ok) {
      alert('Te has suscrito correctamente');
      setNewsEmail(''); // Limpiar el formulario
    } else {
      alert('Error al suscribirse');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Vamos Victor</title>
        <meta name="description" content="Sitio web de Victor González Fernández" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header con el Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Sección para bajar el hero */}
      <section className="bg-white h-[30px]"></section>

      {/* Sección Hero con imagen de fondo */}
      <section
        className="bg-cover bg-center h-[140vh] flex flex-col justify-end items-center text-center px-4"
        style={{
          backgroundImage: "url('/foto_vgf_web.jpeg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          paddingTop: '80px', // Espacio debajo del navbar
        }}
      >
        {/* Contenedor del texto */}
        <div className="p-4 max-w-lg w-full mb-8">
          <p className="text-white mb-4 text-xl font-bold">
            Estamos uniendo fuerzas para devolver <br /> a Vélez-Málaga el brillo que merece
          </p>
          <form className="space-y-4" onSubmit={handleSubmitHeroForm}>
            {/* Campo Nombre */}
            <input
              type="text"
              placeholder="Nombre*"
              className="w-[80%] p-2 text-sm border border-gray-300 rounded mx-auto text-gray-800" // Color del texto cambiado a gris oscuro
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            {/* Campo Correo Electrónico */}
            <input
              type="email"
              placeholder="Correo electrónico*"
              className="w-[80%] p-2 text-sm border border-gray-300 rounded mx-auto text-gray-800" // Color del texto cambiado a gris oscuro
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            {/* Campo Código Postal y Botón */}
            <div className="flex space-x-2 justify-center">
              <input
                type="text"
                placeholder="Código postal*"
                className="w-1/4 p-2 text-sm border border-gray-300 rounded text-gray-800" // Color del texto cambiado a gris oscuro
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                required
              />
              <button
                type="submit"
                className="w-1/2 bg-[#9d05b0] text-white font-bold py-2 rounded hover:bg-purple-700 text-sm"
              >
                Únete
              </button>
            </div>
          </form>
        </div>
      </section>

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

      {/* Sección Intermedia */}
      <section className="bg-[#b08b08] text-white text-center">
        {/* Imagen del logo principal, sin margen ni padding */}
        <img src="/logo_mostaza.jpg" alt="Logo Victor" className="mx-auto w-[240px] h-auto p-0 m-0" />
      </section>

      {/* Sección de Video */}
      <section className="py-12 px-4 text-center bg-white">
        <h3 className="text-2xl font-bold" style={{ color: '#B00505' }}>
          Escuchamos, actuamos
        </h3>
        <div className="mt-6 flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="bg-[#B00505] text-white py-4 px-4 text-justify">
        <h2 className="text-3xl font-bold leading-relaxed text-center">
          Comprometidos con el <span className="font-extrabold">BIENESTAR SOCIAL</span>, la{' '}
          <span className="font-extrabold">INNOVACIÓN</span> y la <span className="font-extrabold">PRODUCTIVIDAD</span>.
        </h2>
      </section>

      {/* Sección de logros */}
      <section className="bg-white py-8 px-4 text-center">
        {/* Título de la sección */}
        <h2 className="text-3xl font-bold mb-8 text-[#1B2A33]">Lo que hemos conseguido</h2>

        {/* Contenedor de las tarjetas de logros */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Tarjeta de Logro 1 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="text-[#05B036] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#05B036]">Logro 1</h3>
            <p className="text-[#1B2A33]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Tarjeta de Logro 2 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="text-[#05B036] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#05B036]">Logro 2</h3>
            <p className="text-[#1B2A33]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          {/* Tarjeta de Logro 3 */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <div className="text-[#05B036] mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-[#05B036]">Logro 3</h3>
            <p className="text-[#1B2A33]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>

        {/* Botón "Ver más logros" */}
        <div className="mt-8">
          <button className="bg-[#1B2A33] text-white font-bold py-2 px-4 rounded hover:bg-[#33354d]">
            Ver más logros
          </button>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="bg-[#1B1D33] text-white py-12 px-4 text-center">
        <h3 className="text-2xl font-bold">Recibe todas las noticias</h3>
        <form className="mt-8 max-w-md mx-auto" onSubmit={handleSubmitNewsForm}>
          <input
            type="email"
            placeholder="Correo electrónico*"
            className="w-full p-3 border border-gray-300 rounded mb-4 text-black"
            value={newsEmail}
            onChange={(e) => setNewsEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-1/2 bg-[#B08B05] text-white font-bold py-2 rounded hover:bg-[#A07804]"
          >
            Enviar
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c2a33] text-white py-4 px-4">
        <div className="flex justify-between items-center flex-col lg:flex-row">
          {/* Logo principal actualizado a .svg */}
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




