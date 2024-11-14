import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Link from 'next/link';

export default function Home() {
  const [nombre, setNombre] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [codigoPostal, setCodigoPostal] = useState<string>('');
  const [newsEmail, setNewsEmail] = useState<string>('');

  const handleSubmitHeroForm = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/embajadores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          email,
          codigo_postal: codigoPostal,
        }),
      });

      if (response.ok) {
        alert('Datos enviados correctamente');
        setNombre('');
        setEmail('');
        setCodigoPostal('');
      } else {
        alert('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un problema al enviar los datos.');
    }
  };

  const handleSubmitNewsForm = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newsEmail }),
      });

      if (response.ok) {
        alert('Te has suscrito correctamente');
        setNewsEmail('');
      } else {
        alert('Error al suscribirse');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un problema al suscribirse.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Vamos Victor</title>
        <meta name="description" content="Sitio web de Victor González Fernández" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      <section className="bg-white h-[30px]"></section>

      <section
        className="bg-cover bg-center h-[140vh] flex flex-col justify-end items-center text-center px-4"
        style={{
          backgroundImage: "url('/foto_vgf_web.jpg')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          paddingTop: '80px',
        }}
      >
        <div className="p-4 max-w-lg w-full mb-8">
          <p className="text-white mb-4 text-xl font-bold">
            Estamos uniendo fuerzas para devolver <br /> a Vélez-Málaga el brillo que merece
          </p>
          <form className="space-y-4" onSubmit={handleSubmitHeroForm}>
            <input
              type="text"
              placeholder="Nombre*"
              className="w-[80%] p-2 text-sm border border-gray-300 rounded mx-auto text-gray-800"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />

            <input
              type="email"
              placeholder="Correo electrónico*"
              className="w-[80%] p-2 text-sm border border-gray-300 rounded mx-auto text-gray-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="flex space-x-2 justify-center">
              <input
                type="text"
                placeholder="Código postal*"
                className="w-1/4 p-2 text-sm border border-gray-300 rounded text-gray-800"
                value={codigoPostal}
                onChange={(e) => setCodigoPostal(e.target.value)}
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

      <section className="bg-[#b08b08] text-white text-center">
        <img src="/logo_mostaza.jpg" alt="Logo Victor" className="mx-auto w-[240px] h-auto p-0 m-0" />
      </section>

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

      <section className="bg-white py-8 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-[#1B2A33]">Lo que hemos conseguido</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-[#05B036]">Un Compromiso Inquebrantable con los Vecinos de Vélez-Málaga</h3>
            <p className="text-[#1B2A33]">Víctor González demostró su compromiso incansable con los vecinos de Vélez-Málaga desde su rol como concejal de Derechos Sociales durante los momentos más duros de la pandemia</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-[#05B036]">Programa de Acompañamiento: Un Apoyo Esencial para Nuestros Mayores</h3>
            <p className="text-[#1B2A33]">Impulso del "Programa de Acompañamiento a Personas Mayores," una iniciativa clave destinada a mejorar la calidad de vida de la población de la tercera edad, especialmente aquellos en situación de soledad o vulnerabilidad.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-[#05B036]"> Impulso a la Fundación María Zambrano en el Ámbito Cultural Nacional</h3>
            <p className="text-[#1B2A33]">Como representante de Vélez-Málaga, Víctor González lideró las negociaciones con el Ministerio de Cultura para integrar a la Fundación María Zambrano dentro de los programas y recursos culturales nacionales, resaltando así el valioso legado de la filósofa veleña. La fundación, reconocida a nivel internacional, es una de las instituciones más emblemáticas de Vélez-Málaga</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2 text-[#05B036]"> La Gestión de Víctor González Hace Posible la Cátedra para Personas con TEA en Vélez-Málaga</h3>
            <p className="text-[#1B2A33]">Gracias al esfuerzo y a la colaboración con la Universidad de Málaga (UMA), Vélez-Málaga celebra la creación de una Cátedra de Inclusión Educativa para Personas con Trastorno del Espectro Autista (TEA). Este importante logro, impulsado por Víctor, responde a su compromiso con la igualdad de oportunidades y la inclusión social, y representa un avance sin precedentes para el municipio.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/logros" passHref>
            <button className="bg-[#1B2A33] text-white font-bold py-2 px-4 rounded hover:bg-[#33354d]">
              Ver más logros
            </button>
          </Link>
        </div>
      </section>

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

      <Footer />
    </div>
  );
}
