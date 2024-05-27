import Image from "next/image";
import React from "react";
import SectionPreview from "./SectionPreview";
import OpinionCard from "./OpinionCard";

const Product = () => {
  return (
    <section className="w-full max-w-[1245px] flex flex-col mt-[435px] px-[20px] gap-3 min-[428px]:mt-[435px] min-[432px]:mt-[420px] min-[472px]:mt-[420px] min-[477px]:mt-[375px] min-[491px]:mt-[350px] lg:flex-row items-start justify-start lg:mx-auto lg:m-0 lg:px-10 py-10 lg:rounded-[10px] lg:bg-[#FAFAFA]">
      <div className="w-full flex flex-col gap-6 lg:max-w-[575px]">
        <figure className="w-full lg:max-w-[575px] lg:h-[591px]">
          <Image
            width={1000}
            height={1000}
            src="/imgs/image-product.svg"
            alt="image product"
            className="w-full h-full object-cover"
          />
        </figure>
        <OpinionCard />
      </div>

      <SectionPreview />
    </section>
  );
};

export default Product;
