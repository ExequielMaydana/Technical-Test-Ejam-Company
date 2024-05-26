import Image from "next/image";
import React from "react";

const DataPercent = () => {
  return (
    <div className="mt-6 w-full p-4 bg-[#EDF3FD] flex items-center justify-center gap-6 rounded-[10px] lg:justify-start">
      <figure className="w-[26px] h-[26px] rounded-full bg-DodgerBlue p-[6px] lg:w-[32px] lg:h-[32px] lg:p-2">
        <Image
          width={32}
          height={32}
          src="/icons/percent.svg"
          alt="icon percent"
          className="w-full h-full object-contain"
        />
      </figure>
      <p className="text-start text-sm lg:text-base">
        Save <span className="text-DodgerBlue">53%</span> and{" "}
        <span className="text-DodgerBlue"> 6 extra Clarifision</span>get for
        only <span className="text-DodgerBlue">$14 Each</span>.
      </p>
    </div>
  );
};

export default DataPercent;
