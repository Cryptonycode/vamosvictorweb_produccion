import { useState } from 'react';
import Head from 'next/head';
import Slider from 'react-slick';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';


export default function Conoce() {
  const [newsEmail, setNewsEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Función para manejar el envío del formulario de suscripción
  const handleSubmitNewsForm = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`http://localhost:5000/api/newsletter`, {
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
      alert('Error al procesar la solicitud. Inténtalo nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Conoce Victor González</title>
        <meta name="description" content="Conoce más sobre Victor González Comunicación" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Navbar />
      </header>

      {/* Hero Section */}
      <section
        className="relative h-[400px] bg-cover bg-center flex justify-center items-center text-center"
        style={{
          backgroundImage: "url('/selfie_ejecutiva.jpeg')",
          backgroundPosition: "center calc(100% + 100px)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-[#1B1D33] bg-opacity-80"></div>
        <h1 className="absolute bottom-0 mb-8 text-white text-6xl font-bold leading-tight">
          Conoce a <br /> Víctor
        </h1>
      </section>

      {/* Descripción inicial */}
      <section className="bg-white py-12 px-4 text-center">
        <h3 className="text-[#1B1D33] text-2xl font-bold">
          Una persona apasionada por su tierra y comprometida con el futuro de Vélez-Málaga.
          Como secretario general de su partido y representante de una nueva generación, Víctor ha crecido con un objetivo claro:
          devolver a Vélez-Málaga el brillo que merece, con políticas que realmente mejoren la vida de las personas.
        </h3>
      </section>

      {/* Sección Los Inicios */}
      <section className="bg-[#efeef1] py-12 px-4 text-center">
        <h1 className="text-[#1B1D33] text-4xl font-bold mb-6">Los inicios</h1>
        <h4 className="text-[#1B1D33] text-lg font-normal text-justify max-w-4xl mx-auto mb-8">
          Víctor González Fernández nace en Vélez-Málaga, una ciudad que lo vio crecer y que hoy lo inspira en su lucha diaria.
          Desde pequeño, disfruta del cariño de su familia, rodeado del amor de sus padres, su hermano y sus abuelos, quienes le
          inculcaron valores como el respeto, la humildad y la importancia de estar siempre al lado de los demás. Cursó sus estudios
          en un colegio local, donde comienza a forjarse su pasión por la justicia social y un fuerte interés por mejorar la vida de quienes
          lo rodean. Cada rincón de Vélez-Málaga guarda recuerdos de una infancia feliz y llena de aprendizajes que hoy forman la
          base de su compromiso con su tierra.
        </h4>

        {/* Slider Section */}
        <div className="w-full h-64 mb-12">
          <Slider {...sliderSettings}>
            <div className="flex justify-center items-center">
              <img
                src="/Victor_primaria.jpg"
                alt="Victor primaria"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/Victor_mama.jpg"
                alt="Victor y su mamá"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/Victor_abuela.jpg"
                alt="Victor y su abuela"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="flex justify-center items-center">
              <img
                src="/Victor_familia.jpg"
                alt="Victor con su familia"
                className="object-cover h-full w-full"
              />
            </div>
          </Slider>
        </div>
      </section>

      {/* Sección Seguimos Creciendo */}
      <section className="bg-white py-12 px-4 text-center">
        <h1 className="text-[#1B1D33] text-4xl font-bold mt-8 mb-6">Seguimos creciendo</h1>
        <h4 className="text-[#1B1D33] text-lg font-normal text-justify max-w-4xl mx-auto mb-8">
          Con el paso del tiempo, Víctor fue ganándose un lugar en la política local, impulsado por su compromiso con los vecinos de
          Vélez-Málaga y su firme vocación de servicio. Su trabajo como concejal de Servicios Sociales fue un hito que marcó un antes
          y un después, demostrando su capacidad para gestionar y mejorar la vida de las personas más vulnerables de su ciudad. Este
          esfuerzo y dedicación lo llevaron a convertirse en el primer senador de la historia de Vélez-Málaga, un logro que lo llenó
          de orgullo, al poder representar a nivel nacional los mismos valores que siempre defendió en su tierra natal. Recientemente,
          Víctor ha logrado otro hito al convertirse en el secretario general más joven de la historia de su partido, desde donde ha
          comenzado una profunda renovación generacional. Está construyendo equipos con personas de todos los sectores de la población,
          con un objetivo claro: alcanzar la alcaldía de Vélez-Málaga y hacer realidad el cambio que su gente merece.
        </h4>

        {/* Imagen con cita */}
        <div className="relative w-full h-[500px] bg-cover bg-center mb-0"
          style={{ backgroundImage: "url('/victor_gonzalez.jpg')" }}>
          <div className="absolute bottom-8 inset-x-0 px-2 py-1 bg-white bg-opacity-70 max-w-lg mx-auto">
            <h2 className="text-[#1B1D33] text-sm font-bold leading-tight">
              “El sueño de mi vida es ser alcalde de nuestro pueblo<br />
              y no te voy a defraudar"
            </h2>
          </div>
        </div>
      </section>

      {/* Formulario de suscripción */}
      <section className="bg-[#1B1D33] py-12 px-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">
          Recibe todas las noticias sobre el trabajo de Víctor
        </h3>
        <form onSubmit={handleSubmitNewsForm} className="max-w-md mx-auto">
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
            className="w-full bg-[#B08B05] text-white font-bold py-2 rounded hover:bg-opacity-90 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </section>

      {/* Footer */}
      <Footer /> {/* Llama al componente Footer aquí */}
    </div>
  );
}


