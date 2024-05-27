import React, { useState } from "react";
import Image from "next/image";
import { dataCarrousel } from "@/app/utils/data";

const Carrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  console.log(dataCarrousel);
  return (
    <>
      {dataCarrousel && (
        <div className="h-[42px] py-[10px] px-[20px] w-full relative flex items-center justify-between bg-DarkSlateGray lg:h-[50px] lg:py-[14px] lg:px-[60px] lg:justify-center">
          <button onClick={prevSlide} className="lg:hidden">
            {" "}
            <Image
              width={7.5}
              height={12.5}
              src="/icons/row-left.svg"
              alt="row-left"
            />
          </button>

          <ul className="flex items-center justify-center lg:hidden">
            <li className="flex items-center justify-center gap-4 h-[22px]">
              <Image
                width={18.2}
                height={18.2}
                src={dataCarrousel[activeIndex].icon}
                alt={dataCarrousel[activeIndex].alt}
                className=""
              />
              <span className="text-white text-[12px] uppercase">
                {dataCarrousel[activeIndex].title}
              </span>
            </li>
          </ul>
          <ul className="hidden lg:flex w-full items-center justify-between">
            {dataCarrousel.map((data) => (
              <li
                key={data.id}
                className="flex items-center justify-center gap-4"
              >
                {" "}
                <Image
                  width={18.2}
                  height={18.2}
                  src={data.icon}
                  alt={data.alt}
                  className=""
                />
                <span className="text-white text-[12px] uppercase">
                  {data.title}
                </span>
              </li>
            ))}
          </ul>
          <button onClick={nextSlide} className="lg:hidden">
            <Image
              width={7.5}
              height={12.5}
              src="/icons/row-right.svg"
              alt="row-right"
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Carrousel;
