import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Logros() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Función para manejar el despliegue de logros individualmente
  const toggleExpand = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Formulario enviado correctamente');
        setEmail('');
      } else {
        const result = await response.json();
        setError(result.error || 'Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError('Hubo un problema al enviar los datos.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Logros</title>
        <meta name="description" content="Logros de Victor González" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white">
        <Navbar />
      </header>

      {/* Espacio debajo del navbar */}
      <section className="bg-white h-[40px]"></section>

      {/* Sección de logros */}
      <main className="flex-grow bg-white p-8">
        <h1 className="text-4xl font-bold text-[#1B2A33] mb-4">Lo que ya hemos conseguido</h1>
        <h3 className="text-xl text-[#1B2A33] mb-8">
          Conoce los logros más importantes de Víctor en su trayectoria.
        </h3>

        {/* Lista de logros */}
        <div className="space-y-4">
          {/* Logro 1 */}
          <div>
            <button
              className="flex justify-between items-center w-full text-left text-xl font-bold text-[#1B2A33] border-b-2 pb-2"
              onClick={() => toggleExpand(1)}
            >
              <span>Un Compromiso Inquebrantable con los Vecinos de Vélez-Málaga</span>
              <span>{expanded[1] ? '-' : '+'}</span>
            </button>
            {expanded[1] && (
              <p className="mt-2 text-[#1B2A33]">
                Víctor González demostró su compromiso incansable con los vecinos de Vélez-Málaga desde su rol como concejal de Derechos Sociales durante los momentos más duros de la pandemia.
              </p>
            )}
          </div>

          {/* Logro 2 */}
          <div>
            <button
              className="flex justify-between items-center w-full text-left text-xl font-bold text-[#1B2A33] border-b-2 pb-2"
              onClick={() => toggleExpand(2)}
            >
              <span>Programa de Acompañamiento: Un Apoyo Esencial para Nuestros Mayores</span>
              <span>{expanded[2] ? '-' : '+'}</span>
            </button>
            {expanded[2] && (
              <p className="mt-2 text-[#1B2A33]">
                Impulso del "Programa de Acompañamiento a Personas Mayores," una iniciativa clave destinada a mejorar la calidad de vida de la población de la tercera edad, especialmente aquellos en situación de soledad o vulnerabilidad.
              </p>
            )}
          </div>

          {/* Logro 3 */}
          <div>
            <button
              className="flex justify-between items-center w-full text-left text-xl font-bold text-[#1B2A33] border-b-2 pb-2"
              onClick={() => toggleExpand(3)}
            >
              <span>Impulso a la Fundación María Zambrano en el Ámbito Cultural Nacional</span>
              <span>{expanded[3] ? '-' : '+'}</span>
            </button>
            {expanded[3] && (
              <p className="mt-2 text-[#1B2A33]">
                Como representante de Vélez-Málaga, Víctor González lideró las negociaciones con el Ministerio de Cultura para integrar a la Fundación María Zambrano dentro de los programas y recursos culturales nacionales, resaltando así el valioso legado de la filósofa veleña.
              </p>
            )}
          </div>

          {/* Logro 4 */}
          <div>
            <button
              className="flex justify-between items-center w-full text-left text-xl font-bold text-[#1B2A33] border-b-2 pb-2"
              onClick={() => toggleExpand(4)}
            >
              <span>La Gestión de Víctor González Hace Posible la Cátedra para Personas con TEA en Vélez-Málaga</span>
              <span>{expanded[4] ? '-' : '+'}</span>
            </button>
            {expanded[4] && (
              <p className="mt-2 text-[#1B2A33]">
                Gracias al esfuerzo y a la colaboración con la Universidad de Málaga (UMA), Vélez-Málaga celebra la creación de una Cátedra de Inclusión Educativa para Personas con Trastorno del Espectro Autista (TEA).
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Sección de llamada a la acción con imagen */}
      <section className="relative w-full h-screen bg-white">
        <div className="absolute top-0 w-full h-[30%] flex justify-center items-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white bg-[#B0AE05] py-4 px-4 text-center">
            Únete a nuestro equipo
          </h1>
        </div>
        <div className="absolute bottom-0 w-full h-[70%]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/vgf.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="absolute inset-0 bg-[#B0AE05] opacity-40"></div>
        </div>
      </section>

      {/* Formulario de suscripción */}
      <section className="bg-[#215B31] text-white py-4 px-4 text-justify">
        <h2 className="text-3xl font-bold leading-relaxed text-center">
          Forma parte del cambio que impulsa el <span className="font-extrabold">PROGRESO </span>
          y la <span className="font-extrabold">INNOVACIÓN</span> en
          <span className="font-extrabold"> VÉLEZ-MÁLAGA</span>.
        </h2>
        <div className="mt-6 flex flex-col items-center">
          <form onSubmit={handleSubmit} className="w-full max-w-md">
            <input
              type="email"
              placeholder="Correo electrónico*"
              className="w-full p-2 mb-4 text-sm border border-gray-300 rounded text-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#243328] text-white font-bold py-2 rounded hover:bg-yellow-600 text-sm"
              disabled={loading}
            >
              {loading ? 'Enviando...' : 'Saber más'}
            </button>
          </form>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
