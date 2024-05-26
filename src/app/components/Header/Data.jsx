import React from "react";
import Checkeds from "./Checkeds";

const Data = () => {
  return (
    <section className="w-full flex flex-col gap-6 lg:gap-16 px-[20px]">
      <div className="flex flex-col items-center justify-center text-center gap-4">
        <h2 className="text-black text-[32px] lg:text-2xl">
          Wait ! your order in progress.
        </h2>
        <p className="text-base text-DimGray lg:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing{" "}
        </p>
      </div>
      <Checkeds />
    </section>
  );
};

export default Data;
