import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1c2a33] bg-opacity-70 backdrop-blur-md text-white px-4 py-1 fixed w-full top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo actualizado */}
        <div className="flex-shrink-0">
          <img src="/logo_blanco_p.png" alt="Logo" className="w-[80px] h-auto" />
        </div>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menú de navegación (visible en pantallas grandes) */}
        <div className={`hidden lg:flex space-x-6`}>
          <Link href="/" className="hover:underline transition duration-300">
            Inicio
          </Link>
          <Link href="/conoce" className="hover:underline transition duration-300">
            Conoce
          </Link>
          <Link href="/logros" className="hover:underline transition duration-300">
            Logros
          </Link>
          <Link href="/contacto" className="hover:underline transition duration-300">
            Contacto
          </Link>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <div className="lg:hidden">
          <div className="flex flex-col items-center space-y-4 mt-4">
            <Link href="/" className="hover:underline transition duration-300">Inicio</Link>
            <Link href="/conoce" className="hover:underline transition duration-300">Conoce</Link>
            <Link href="/logros" className="hover:underline transition duration-300">Logros</Link>
            <Link href="/contacto" className="hover:underline transition duration-300">Contacto</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;











