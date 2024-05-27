"use client";
import React, { useEffect, useState } from "react";
import Carrousel from "./Carrousel";
import Logos from "./Logos";
import Data from "./Data";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full h-[326px] fixed top-0 left-0 flex flex-col lg:h-auto lg:static ">
      <Carrousel />
      <div
        className={`w-full flex flex-col gap-8 bg-white lg:px-16 ${
          scrolled ? "bg-[#FAFAFA]" : "bg-white"
        }`}
      >
        <Logos />
        <Data />
      </div>
    </header>
  );
};

export default Header;
