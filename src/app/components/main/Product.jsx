import Image from "next/image";
import React from "react";
import Preview from "./Preview";

const Product = () => {
  return (
    <div className="w-full lg:px-24 lg:rounded-[10px]">
      <div className="w-full mt-[360px] flex flex-col items-center justify-center gap-6 px-[20px] min-[467px]:mt-[260px] lg:mt-0 lg:flex-row lg:bg-[#FAFAFA] lg:p-10 lg:items-start">
        <h2 className="text-lg text-center h-[100px] fixed top-[322px] bg-white pt-5 min-[430px]:top-[305px] lg:static lg:h-0 lg:hidden min-[476px]:top-[250px]">
          <span className="text-DodgerBlue">ONE TIME ONLY</span> special price
          for 6 extra Clarifion for only{" "}
          <span className="text-DodgerBlue">$14 each</span> ($84.00 total!)
        </h2>
        <figure className="mt-[70px] lg:mt-0 lg:w-[700px]">
          <Image
            width={575}
            height={591}
            src="/imgs/image-product.svg"
            alt="image product"
            className="w-full h-full object-contain"
          />
        </figure>
        <Preview />
      </div>
    </div>
  );
};

export default Product;
