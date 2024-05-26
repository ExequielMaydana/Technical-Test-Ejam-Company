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
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
