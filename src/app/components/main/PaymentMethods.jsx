import { cards } from "@/app/utils/data";
import Image from "next/image";
import React from "react";

const PaymentMethods = () => {
  return (
    <div className="mt-4 w-full flex flex-col items-center gap-3 border border-[#CFCFCF] rounded-[4px] p-2 lg:flex-row">
      <div className="w-full flex items-center justify-center gap-3 text-xs text-DimGray">
        <p className="text-xs ">Free shipping</p>
        <div className="w-[1px] h-[22px] bg-[#CFCFCF]"></div>
        <div className="flex items-center justify-center gap-2">
          <figure className="w-[12px] h-[12px]">
            <Image
              width={15}
              height={15}
              src="/icons/lock.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </figure>
          <p>Secure 256-bit SSL encryption.</p>
        </div>
      </div>
      <div className="h-[1px] w-[90%] bg-[#CFCFCF] lg:w-[1px] lg:h-[22px]"></div>
      <ul className="flex items-center justify-center gap-1">
        {cards.map((data) => (
          <li key={data.id} className="w-[24px] h-[14px]">
            <Image
              width={24}
              height={24}
              src={data.icon}
              alt={data.alt}
              className="w-full h-full object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentMethods;
