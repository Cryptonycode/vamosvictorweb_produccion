import { useState } from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Contacto() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  // Función para manejar el despliegue de logros
  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  // Función para manejar el envío del formulario
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
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
        setEmail(''); // Limpiar el formulario
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      setError('Error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Head>
        <title>Contacto</title>
        <meta name="description" content="Contacto de Victor González" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-gray-800 text-white">
        <Navbar />
      </header>

      {/* Hero Section */}
      <section className="bg-white h-[80px]"></section>

      {/* Contact Section */}
      <section className="bg-[#1c2a33] text-white py-12 px-4 text-center">
        <h2 className="text-2xl font-bold">Contáctame</h2>
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

      {/* Formulario de suscripción */}
      <section className="bg-[#1B1D33] py-12 px-4 text-center">
        <h3 className="text-2xl font-bold text-white mb-6">
          Recibe todas las noticias sobre el trabajo de Víctor
        </h3>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <input
            type="email"
            placeholder="Correo electrónico*"
            className="w-full p-3 border border-gray-300 rounded mb-4 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
