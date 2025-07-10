import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const neulisSansBold = localFont({
  src: "../../public/fonts/NeulisSans/Neulis_Sans_Bold.otf",
});

type WorkLabelType = {
  image: string;
  label: string;
};
export default function WorkLabel({
  image = "yellowcircle",
  label,
}: WorkLabelType) {
  return (
    <div className={`${neulisSansBold.className} flex items-center`}>
      <Image
        src={`./assets/common/${image}.svg`}
        alt={image}
        width={18}
        height={18}
        className="flex-none"
      />
      <span className="px-[14px] text-white text-[25.14px] uppercase flex-none">
        {label}{" "}
      </span>
      <span className="border-[1px] border-[#7f7f7f] grow"></span>
    </div>
  );
}
