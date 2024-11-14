// src/components/Navbar.tsx

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Hook para acceder a la ruta actual

  // Función para manejar clic en los enlaces
  const handleLinkClick = (path: string) => {
    if (router.pathname === path) {
      // Si la ruta actual es igual al path del enlace, cerrar el menú
      setIsOpen(false);
    } else {
      // Navegar a una nueva ruta y cerrar el menú
      setIsOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/logo_blanco_p.png" alt="Logo" />
      </div>

      {/* Menú hamburguesa para pantallas pequeñas */}
      <div className="menu-icon lg:hidden" onClick={() => setIsOpen(!isOpen)}>
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
      </div>

      {/* Menú de navegación para pantallas grandes */}
      <div className="navbar-links hidden lg:flex">
        <Link href="/" className="hover:underline">
          Inicio
        </Link>
        <Link href="/conoce" className="hover:underline">
          Conoce
        </Link>
        <Link href="/logros" className="hover:underline">
          Logros
        </Link>
        <Link href="/contacto" className="hover:underline">
          Contacto
        </Link>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <div className="navbar-dropdown lg:hidden">
          <Link href="/" className="hover:underline" onClick={() => handleLinkClick("/")}>
            Inicio
          </Link>
          <Link href="/conoce" className="hover:underline" onClick={() => handleLinkClick("/conoce")}>
            Conoce
          </Link>
          <Link href="/logros" className="hover:underline" onClick={() => handleLinkClick("/logros")}>
            Logros
          </Link>
          <Link href="/contacto" className="hover:underline" onClick={() => handleLinkClick("/contacto")}>
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
