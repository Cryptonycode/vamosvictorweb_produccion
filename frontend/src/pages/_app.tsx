// pages/_app.tsx
import "@/styles/globals.css";
import "@/styles/navbar.css";  // Importa los estilos de navbar aquí
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
