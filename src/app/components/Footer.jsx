import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-4 px-5 py-7 lg:flex-row lg:justify-between lg:text-[16px] bg-DarkSlateGray text-white text-xs">
      <div className="flex items-center justify-center gap-4 ">
        <span>Copyright (c) 2023</span>{" "}
        <div className="w-[1px] h-[10px] bg-[#FFFFFF]"></div>
        <span>Clarifionsupport@clarifion.com</span>{" "}
      </div>
      <span className="flex items-center justify-center gap-2">
        <Image
          width={13}
          height={13}
          src="/icons/lock-white.svg"
          alt="icon-lock"
          className="object-contain"
        />
        Secure 256-bit SSL encryption.
      </span>
    </footer>
  );
};

export default Footer;
