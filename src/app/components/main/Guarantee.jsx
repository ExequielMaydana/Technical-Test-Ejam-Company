import Image from "next/image";
import React from "react";

const Guarantee = () => {
  return (
    <div className="mt-6 flex items-start gap-4 lg:gap-6">
      <figure className="w-[48px] h-[48px] lg:w-[88px] lg:h-[88px] flex-shrink-0">
        <Image
          width={88}
          height={88}
          src="/imgs/guarantee.svg"
          alt="img guarantee.svg"
          className="w-full h-full object-cover"
        />
      </figure>
      <p className="text-xs leading-5 lg:text-[16px] lg:leading-7">
        If you are not completely thrilled with your Clarifion - We have a
        <b> 30 day satisfaction guarantee</b>. Please refer to our return policy
        at the bottom of the page for more details. Happy Shopping!
      </p>
    </div>
  );
};

export default Guarantee;
