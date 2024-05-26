"use client";
import React from "react";
import Carrousel from "./Carrousel";
import Logos from "./Logos";
import Data from "./Data";

const Header = () => {
  return (
    <header className="w-full h-[326px] fixed top-0 left-0 flex flex-col lg:h-auto lg:static ">
      <Carrousel />
      <div className="w-full flex flex-col gap-5 bg-white lg:px-16">
        <Logos />
        <Data />
      </div>
    </header>
  );
};

export default Header;
