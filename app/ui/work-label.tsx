import Image from "next/image";
import React from "react";

type WorkLabelType = {
  image: string;
  label: string;
};
export default function WorkLabel({ image = "yellowcircle", label }: WorkLabelType) {
  return (
    <div className="flex items-center">
      <Image src={`./assets/common/${image}.svg`} alt={image} width={18} height={18} className="flex-none"/>
      <span className="px-[14px] text-white text-[25.14px] font-bold uppercase flex-none">
        {label}{" "}
      </span>
      <span className="border-[1px] border-[#7f7f7f] grow"></span>
    </div>
  );
}
