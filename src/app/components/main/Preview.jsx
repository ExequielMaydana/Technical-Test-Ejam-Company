import Image from "next/image";
import React from "react";
import CheckList from "./CheckList";
import DataPercent from "./DataPercent";
import { ImageError } from "next/dist/server/image-optimizer";
import PaymentMethods from "./PaymentMethods";

const Preview = () => {
  const stars = [
    { id: 0, icon: "/icons/star.svg", alt: "icon start" },
    { id: 1, icon: "/icons/star.svg", alt: "icon start" },
    { id: 2, icon: "/icons/star.svg", alt: "icon start" },
    { id: 3, icon: "/icons/star.svg", alt: "icon start" },
    { id: 4, icon: "/icons/star.svg", alt: "icon start" },
  ];
  return (
    <div className="w-full flex-col items-start">
      <h2 className="hidden text-lg text-start lg:block w-[550px] pb-4 text-[32px]">
        <span className="text-DodgerBlue">ONE TIME ONLY</span> special price for
        6 extra Clarifion for only{" "}
        <span className="text-DodgerBlue">$14 each</span> ($84.00 total!)
      </h2>
      <article className="w-full flex items-start justify-center gap-4 lg:min-h-[200px] ">
        <figure className="lg:w-[180px] lg:h-[160px] bg-DodgerBlue  rounded-[10px]">
          <Image
            width={134}
            height={134}
            src="/imgs/preview.svg"
            alt="preview"
            className="w-full h-full object-contain"
          />
        </figure>
        <div className="w-full flex items-center justify-between">
          <div className="w-full h-[80px] pt-3 pb-2 flex flex-col items-start justify-between  lg:gap-4">
            <div className="flex flex-col items-start gap-3 lg:gap-4">
              <p className="text-sm lg:text-[20px]">Clarifion Air Ionizer</p>
              <ul className="flex items-center justify-center gap-2">
                {stars.map((data) => (
                  <li key={data.id}>
                    <figure className="w-[9.93px] h-[9.48px] lg:w-[14.89px] lg:h-[14.22px]">
                      <Image
                        width={14.89}
                        height={14.22}
                        src={data.icon}
                        alt={data.alt}
                        className="w-full h-full object-contain"
                      />
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start mt-6 lg:gap-2 lg:mt-2">
              <div className="flex items-center justify-center gap-2">
                <div className="w-[12px] h-[12px] rounded-full bg-[#E3EEFF] flex items-center justify-center lg:w-[16px] lg:h-[16px]">
                  <div className="w-[6px] h-[6px] rounded-full bg-DodgerBlue lg:w-[8.53px] lg:h-[8.53px]"></div>
                </div>
                <span className="text-xs lg:text-base">12 left in Stock</span>
              </div>
              <p className="hidden text-base text-DimGray lg:flex">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-[-3em]">
            <span className="text-[#969696] text-[10px] relative lg:text-base">
              <span className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#969696] transform -translate-y-1/2"></span>
              $180
            </span>{" "}
            <span className="text-sm font-semibold text-DodgerBlue lg:text-[22px]">
              $84
            </span>
          </div>
        </div>
      </article>
      <p className="text-xs text-center text-DimGray mt-4 lg:hidden">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </p>
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
    </div>
  );
};

export default Preview;
