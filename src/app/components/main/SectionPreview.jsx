"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import CheckList from "./CheckList";
import DataPercent from "./DataPercent";
import PaymentMethods from "./PaymentMethods";
import CardPreview from "./CardPreview";
import Guarantee from "./Guarantee";

const Preview = () => {
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
    <article className="w-full flex-col items-start">
      <h2
        className={`fixed top-[375px] left-0 right-0 m-auto text-lg p-2 z-10 bg-white text-center min-[428px]:top-[375px] min-[432px]:top-[355px] min-[472px]:top-[355px] min-[477px]:top-[310px] lg:static lg:m-0 lg:max-w-[550px] lg:text-xl lg:text-start lg:bg-transparent lg:mt-[-.5em] lg:mb-3 lg:z-0 ${
          scrolled ? "bg-[#FAFAFA]" : "bg-white"
        }`}
      >
        <span className="text-DodgerBlue">ONE TIME ONLY</span> special price for
        6 extra Clarifion for only{" "}
        <span className="text-DodgerBlue">$14 each</span> ($84.00 total!)
      </h2>
      <CardPreview />
      <CheckList />
      <DataPercent />
      <button className="mt-6 w-full flex items-center justify-center rounded-[50px] h-[50px] text-sm gap-3 bg-[#59AE43] text-white uppercase lg:text-[20px]">
        Yes - Claim my discount{" "}
        <figure className="w-[12px] h-[12px] lg:w-[16px] lg:h-[16px]">
          <Image
            width={500}
            height={500}
            src="/icons/right-arrow.svg"
            alt="arrow right icon"
            className="w-full h-full object-contain"
          />
        </figure>
      </button>
      <PaymentMethods />
      <p className="mt-6 text-center text-xs uppercase text-[#F82C2C] lg:text-[18px]">
        No thanks, I don’t want this.
      </p>
      <Guarantee />
    </article>
  );
};

export default Preview;
