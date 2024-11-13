// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
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
      <div className="text-center text-xs mt-4">
        © 2024 - Victor González Comunicación
      </div>
    </footer>
  );
};

export default Footer;
