import Image from "next/image";
import React from "react";

const Checkeds = () => {
  const chekeds = [
    {
      id: 0,
      title: "Cart Review",
      num: "1",
      validate: true,
      active: false,
      icon: "/icons/checked.svg",
    },
    {
      id: 1,
      title: "Checkout",
      num: "2",
      validate: true,
      active: false,
      icon: "/icons/checked.svg",
    },
    {
      id: 2,
      title: "Special Offer",
      num: "3",
      validate: false,
      active: true,
      icon: "/icons/checked.svg",
    },
    {
      id: 3,
      title: "Confirmation",
      num: "4",
      validate: false,
      active: false,
      icon: "/icons/checked.svg",
    },
  ];
  return (
    <ul className="w-full flex items-center justify-evenly pb-5">
      {chekeds.map((data) => (
        <li
          key={data.id}
          className="flex flex-col items-center justify-center gap-2 lg:flex-row lg:gap-4"
        >
          <div
            className={`${
              data.validate === true
                ? "w-5 h-5 flex items-center justify-center aspect-square rounded-full text-center bg-YellowGreen lg:w-10 lg:h-10"
                : "w-5 h-5 flex items-center justify-center aspect-square rounded-full border border-DodgerBlue lg:w-10 lg:h-10"
            } ${data.active && "bg-DodgerBlue"}`}
          >
            {data.validate === true ? (
              <figure className="w-[10px] h-[7px] lg:w-[20px] lg:h-[14px]">
                <Image
                  width={20}
                  height={14}
                  src={data.icon}
                  alt="icon-checked"
                />
              </figure>
            ) : (
              <span
                className={
                  data.active
                    ? "text-white text-sm lg:text-[20px]"
                    : "text-DodgerBlue text-sm lg:text-[20px]"
                }
              >
                {data.num}
              </span>
            )}
          </div>
          <p
            className={
              data.active
                ? "text-xs text-black font-bold lg:text-[20px]"
                : "text-xs text-black lg:text-[20px]"
            }
          >
            {data.title}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Checkeds;
