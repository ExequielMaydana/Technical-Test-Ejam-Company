import { stars } from "@/app/utils/data";
import Image from "next/image";
import React from "react";

const OpinionCard = () => {
  return (
    <article className="hidden lg:flex flex-col gap-6 bg-white rounded-[10px] p-6">
      <div className="flex items-start gap-5">
        <figure className="w-[48px] h-[48px] rounded-full aspect-square">
          <Image
            width={48}
            height={48}
            src="/imgs/profile-photo.svg"
            alt="profile photo"
            className="w-full h-full object-contain"
          />
        </figure>
        <ul className="flex flex-col gap-2 pt-1">
          <li className="w-full flex items-center justify-start gap-2">
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
          <li className="flex items-center gap-4">
            <h4 className="font-bold text-sm">Ken T.</h4>
            <Image
              width={16}
              height={16}
              src="/icons/verified-green.svg"
              alt="verified green"
              className="object-contain"
            />
            <p className="text-[#5BB59A] text-xs">Verified Customer</p>
          </li>
        </ul>
      </div>
      <p className="text-[16px] text-DimGray">
        “As soon as the Clarifions arrived I put one in my bedroom. This was
        late in the afternoon. When I went to the bedroom in the evening it
        smelled clean. When I went to bed I felt I could breathe better.
        Wonderful.”
      </p>
    </article>
  );
};

export default OpinionCard;
