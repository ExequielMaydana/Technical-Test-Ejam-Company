import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Clarifion",
  description:
    "Prueba tecnica con Next.js y TailwindCSS, consiste en el desarrollo de una aplicación web responsiva utilizando Next.js y Tailwind CSS. La aplicación estará diseñada para ser accesible tanto en dispositivos móviles como en escritorio. Se enfocará en la creación de una experiencia de usuario intuitiva y atractiva, permitiendo a los usuarios interactuar de manera efectiva con la plataforma en cualquier dispositivo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="twitter:title"
          content="Exequiel Maydana | Desarrollador Web"
        />
        <meta
          name="twitter:description"
          content="Experto en desarrollo web con especialización en Next.js. Ofrezco soluciones innovadoras y eficientes para proyectos web de alta calidad. Explora mi portafolio profesional para ver ejemplos de mi trabajo."
        />
        <meta
          name="twitter:title"
          content="Clarifion | Purificadores de Aire e Ionizadores"
        />
        <meta
          name="twitter:description"
          content="Descubre la tecnología innovadora de Clarifion para mejorar la calidad del aire que respiras. Ofrecemos purificadores de aire e ionizadores a precios asequibles con garantía de 30 días."
        />
        <meta name="twitter:image" content="/imgs/image-metas.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="keywords"
          content="Clarifion, purificadores de aire, ionizadores, aire limpio, tecnología de aire, garantía de 30 días, Exequiel Maydana"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="language" content="es" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://clarifionbyexedev.vercel.app/"
        />
        <meta
          property="og:title"
          content="Clarifion | Purificadores de Aire e Ionizadores"
        />
        <meta
          property="og:description"
          content="Descubre la tecnología innovadora de Clarifion para mejorar la calidad del aire que respiras. Ofrecemos purificadores de aire e ionizadores a precios asequibles con garantía de 30 días."
        />
        <meta
          property="og:image"
          content="https://clarifionbyexedev.vercel.app/imgs/image-metas.svg"
        />

        <link rel="canonical" href="https://clarifionbyexedev.vercel.app/" />
        <meta name="robots" content="index, follow" />

        <meta
          name="DC.title"
          content="Clarifion | Purificadores de Aire e Ionizadores"
        />
        <meta name="DC.creator" content="Maydana Hernán Exequiel" />
        <meta
          name="DC.description"
          content="Descubre la tecnología innovadora de Clarifion para mejorar la calidad del aire que respiras. Ofrecemos purificadores de aire e ionizadores a precios asequibles con garantía de 30 días."
        />
        <meta name="DC.language" content="es" />
      </head>
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
