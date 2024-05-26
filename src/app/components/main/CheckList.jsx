import Image from "next/image";
import React from "react";

const CheckList = () => {
  return (
    <ul className="w-full flex flex-col items-start justify-center text-xs mt-4 gap-4 lg:text-base lg:mt-0">
      <li className="flex items-center justify-center gap-4">
        <figure className="w-[12px] h-[8px] lg:w-[20px] lg:h-[14px]">
          <Image
            width={20}
            height={14}
            src="/icons/checked-blue.svg"
            alt="checked blue"
            className="w-full h-full object-contain"
          />{" "}
        </figure>
        <p>
          Negative Ion Technology may <b>help with allergens</b>
        </p>
      </li>
      <li className="flex items-center justify-center gap-4">
        <figure className="w-[12px] h-[8px] lg:w-[20px] lg:h-[14px]">
          <Image
            width={20}
            height={14}
            src="/icons/checked-blue.svg"
            alt="checked blue"
            className="w-full h-full object-contain"
          />{" "}
        </figure>
        <p>
          Designed for <b>air rejuvenation</b>
        </p>
      </li>
      <li className="flex items-center justify-center gap-4">
        <figure className="w-[12px] h-[8px] lg:w-[20px] lg:h-[14px]">
          <Image
            width={20}
            height={14}
            src="/icons/checked-blue.svg"
            alt="checked blue"
            className="w-full h-full object-contain"
          />{" "}
        </figure>
        <p>
          <b>Perfect for every room</b> in all types of places.
        </p>
      </li>
    </ul>
  );
};

export default CheckList;
