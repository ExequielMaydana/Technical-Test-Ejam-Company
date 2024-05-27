import React from "react";
import Header from "./components/Header/Header";
import Product from "./components/main/Product";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full flex-1 h-screen flex flex-col items-center gap-6">
      <Header />
      <div className="w-full lg:px-[56px] lg:mb-10">
        <Product />
      </div>
      <Footer />
    </main>
  );
}
