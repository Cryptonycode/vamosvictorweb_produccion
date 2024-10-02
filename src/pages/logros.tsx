import { useState } from 'react'; 
import Head from 'next/head';
import Navbar from '../components/Navbar'; // Importa el componente Navbar

export default function Logros() {
  const [expanded, setExpanded] = useState(null);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false); // Estado para mostrar que se está enviando el formulario
  const [error, setError] = useState(''); // Estado para manejar errores

  // Función para manejar el despliegue de logros
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/save-newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        alert('Formulario enviado correctamente');
        setEmail(''); // Limpiar el formulario
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      setError('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
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

      {/* Sección de logros */}
      <main className="flex-grow bg-white p-8" style={{ paddingTop: '110px' }}>
        {/* Título de la sección */}
        <h1 className="text-3xl font-bold text-[#1B2A33] mb-4">Lo que ya hemos conseguido</h1>

        {/* Subtítulo */}
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
              <span>Logro 1: Reducir los impuestos para familias de clase media</span>
              <span>{expanded === 1 ? '-' : '+'}</span>
            </button>
            {expanded === 1 && (
              <p className="mt-2 text-[#1B2A33]">
                Detalles sobre este logro, cómo ha beneficiado a las familias y su impacto positivo en la economía local.
              </p>
            )}
          </div>

          {/* Logro 2 */}
          <div>
            <button
              className="flex justify-between items-center w-full text-left text-xl font-bold text-[#1B2A33] border-b-2 pb-2"
              onClick={() => toggleExpand(2)}
            >
              <span>Logro 2: Hacer el alquiler más accesible y facilitar la compra de vivienda</span>
              <span>{expanded === 2 ? '-' : '+'}</span>
            </button>
            {expanded === 2 && (
              <p className="mt-2 text-[#1B2A33]">
                Explicación de las políticas implementadas para mejorar el acceso a la vivienda y los beneficios que han aportado a la comunidad.
              </p>
            )}
          </div>

          {/* Logro 3 */}
          <div>
            <button
              className="flex justify-between items-center w-full text-left text-xl font-bold text-[#1B2A33] border-b-2 pb-2"
              onClick={() => toggleExpand(3)}
            >
              <span>Logro 3: Mejorar la calidad de los servicios públicos</span>
              <span>{expanded === 3 ? '-' : '+'}</span>
            </button>
            {expanded === 3 && (
              <p className="mt-2 text-[#1B2A33]">
                Este logro explica cómo Víctor ha trabajado para optimizar la calidad de los servicios públicos, haciendo que sean más accesibles para todos.
              </p>
            )}
          </div>

          {/* Logro 4 */}
          <div>
            <button
              className="flex justify-between items-center w-full text-left text-xl font-bold text-[#1B2A33] border-b-2 pb-2"
              onClick={() => toggleExpand(4)}
            >
              <span>Logro 4: Crear programas de empleo juvenil</span>
              <span>{expanded === 4 ? '-' : '+'}</span>
            </button>
            {expanded === 4 && (
              <p className="mt-2 text-[#1B2A33]">
                Gracias a sus iniciativas, muchos jóvenes han encontrado empleo en su propio municipio, lo que ha reducido el desempleo juvenil.
              </p>
            )}
          </div>

          {/* Logro 5 */}
          <div>
            <button
              className="flex justify-between items-center w-full text-left text-xl font-bold text-[#1B2A33] border-b-2 pb-2"
              onClick={() => toggleExpand(5)}
            >
              <span>Logro 5: Impulsar la sostenibilidad ambiental</span>
              <span>{expanded === 5 ? '-' : '+'}</span>
            </button>
            {expanded === 5 && (
              <p className="mt-2 text-[#1B2A33]">
                Las políticas medioambientales que ha puesto en marcha han mejorado la calidad del aire y del agua en Vélez-Málaga.
              </p>
            )}
          </div>
        </div>
      </main>

      {/* Sección de imagen y llamada a la acción */}
      <section className="relative w-full h-screen bg-white">
        {/* Texto centrado dentro de la máscara */}
        <div className="absolute top-0 w-full h-[30%] flex justify-center items-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white bg-[#B0AE05] py-4 px-4 text-center">
            Únete a nuestro equipo
          </h1>
        </div>

        {/* Imagen que ocupa el 70% de la sección */}
        <div className="absolute bottom-0 w-full h-[70%]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: "url('/vgf.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          {/* Máscara encima de la imagen con 40% de opacidad */}
          <div className="absolute inset-0 bg-[#B0AE05] opacity-40"></div>
        </div>
      </section>

      {/* Segunda sección de logros */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {/* Logro 6 */}
            <details className="bg-white shadow-lg rounded-lg p-4">
              <summary className="text-lg font-semibold cursor-pointer flex justify-between items-center text-[#1B2A33]">
                Logro 6: Impulsar nuevas políticas sociales
                <span className="text-[#1B2A33]">+</span>
              </summary>
              <p className="mt-2 text-[#1B2A33]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </details>

            {/* Logro 7 */}
            <details className="bg-white shadow-lg rounded-lg p-4">
              <summary className="text-lg font-semibold cursor-pointer flex justify-between items-center text-[#1B2A33]">
                Logro 7: Mejorar las infraestructuras locales
                <span className="text-[#1B2A33]">+</span>
              </summary>
              <p className="mt-2 text-[#1B2A33]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </details>

            {/* Logro 8 */}
            <details className="bg-white shadow-lg rounded-lg p-4">
              <summary className="text-lg font-semibold cursor-pointer flex justify-between items-center text-[#1B2A33]">
                Logro 8: Fomentar la participación ciudadana
                <span className="text-[#1B2A33]">+</span>
              </summary>
              <p className="mt-2 text-[#1B2A33]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </details>

            {/* Logro 9 */}
            <details className="bg-white shadow-lg rounded-lg p-4">
              <summary className="text-lg font-semibold cursor-pointer flex justify-between items-center text-[#1B2A33]">
                Logro 9: Establecer un plan de sostenibilidad
                <span className="text-[#1B2A33]">+</span>
              </summary>
              <p className="mt-2 text-[#1B2A33]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </details>

            {/* Logro 10 */}
            <details className="bg-white shadow-lg rounded-lg p-4">
              <summary className="text-lg font-semibold cursor-pointer flex justify-between items-center text-[#1B2A33]">
                Logro 10: Reforzar la educación pública
                <span className="text-[#1B2A33]">+</span>
              </summary>
              <p className="mt-2 text-[#1B2A33]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Sección de formulario */}
      <section className="bg-[#215B31] text-white py-4 px-4 text-justify">
        {/* Título */}
        <h2 className="text-3xl font-bold leading-relaxed text-center">
          Forma parte del cambio que impulsa <span className="font-extrabold">el PROGRESO</span>, 
          y la <span className="font-extrabold">INNOVACIÓN</span> en <span className="font-extrabold">VÉLEZ-MÁLAGA</span>.
        </h2>

        {/* Formulario */}
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
              disabled={loading} // Desactivar el botón cuando se está enviando
            >
              {loading ? 'Enviando...' : 'Saber más'}
            </button>
          </form>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1c2a33] text-white py-4 px-4">
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



    