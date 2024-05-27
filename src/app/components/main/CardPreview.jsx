import { stars } from "@/app/utils/data";
import Image from "next/image";
import React from "react";

const CardPreview = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-4">
      <article className="w-full flex items-start justify-center gap-4">
        <figure className="w-[80px] h-[80px] bg-DodgerBlue rounded-[10px] lg:w-[134px] lg:h-[134px]">
          <Image
            width={134}
            height={134}
            src="/imgs/preview.svg"
            alt="preview"
            className="w-full h-full object-cover"
          />
        </figure>
        {/* data card preview */}
        <ul className="w-full flex flex-col items-start justify-start gap-2 py-2">
          <li className="w-full flex items-start justify-between">
            {" "}
            <p className="text-sm lg:text-[20px]">Clarifion Air Ionizer</p>{" "}
            <div className="flex items-center justify-center gap-2">
              <span className="text-[#969696] text-[10px] relative lg:text-base">
                <span className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#969696] transform -translate-y-1/2"></span>
                $180
              </span>{" "}
              <span className="text-sm font-semibold text-DodgerBlue lg:text-[22px]">
                $84
              </span>
            </div>
          </li>
          <li className="flex items-center justify-center gap-2 mt-[-.2em] mb-[.2em]">
            {stars.map((data) => (
              <figure
                key={data.id}
                className="w-[9.93px] h-[9.48px] lg:w-[14.89px] lg:h-[14.22px]"
              >
                <Image
                  width={14.89}
                  height={14.22}
                  src={data.icon}
                  alt={data.alt}
                  className="w-full h-full object-contain"
                />
              </figure>
            ))}
          </li>
          <li>
            {" "}
            <div className="flex items-center justify-center gap-2">
              <div className="w-[12px] h-[12px] rounded-full bg-[#E3EEFF] flex items-center justify-center lg:w-[16px] lg:h-[16px]">
                <div className="w-[6px] h-[6px] rounded-full bg-DodgerBlue lg:w-[8.53px] lg:h-[8.53px]"></div>
              </div>
              <span className="text-xs lg:text-base">12 left in Stock</span>
            </div>
          </li>
          <li>
            {" "}
            <p className="hidden text-base text-DimGray lg:flex">
              Simply plug a Clarifion into any standard outlet and replace
              bulky, expensive air purifiers with a simple.
            </p>
          </li>
        </ul>
      </article>
      <p className="text-xs text-center text-DimGray mt-4 lg:hidden">
        Simply plug a Clarifion into any standard outlet and replace bulky,
        expensive air purifiers with a simple.
      </p>
    </div>
  );
};

export default CardPreview;
