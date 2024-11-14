// frontend/src/pages/_app.tsx
import '@/styles/globals.css';
import '@/styles/navbar.css'; // Importación de navbar.css para aplicar estilos globales al Navbar
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
