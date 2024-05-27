import { logos } from "@/app/utils/data";
import Image from "next/image";
import React from "react";

const Logos = () => {
  return (
    <div className="w-full max-w-[1245px] flex items-center justify-between py-6 px-4 bg-White lg:pt-8">
      <figure className="w-[107px] h-[20px] lg:w-[192px] lg:h-[36px]">
        <Image
          width={192}
          height={36}
          src="/logo.svg"
          alt="logo"
          className="w-full h-full object-contain"
        />
      </figure>
      <div className="flex items-center justify-center gap-4 lg:gap-8">
        {logos.map((data) => (
          <figure
            key={data.id}
            className="w-[44px] h-[16px] lg:w-[88px] lg:h-[32px]"
          >
            <Image
              width={82}
              height={32}
              src={data.img}
              alt={data.alt}
              className="w-full h-full object-contain"
            />
          </figure>
        ))}
      </div>
    </div>
  );
};

export default Logos;
