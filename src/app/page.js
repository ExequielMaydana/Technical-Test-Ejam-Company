import React from "react";
import Header from "./components/Header/Header";
import Product from "./components/main/Product";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col items-center gap-6">
      <Header />
      <Product />
    </main>
  );
}
