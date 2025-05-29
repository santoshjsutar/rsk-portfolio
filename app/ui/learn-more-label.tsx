import Image from "next/image";
import React from "react";

export default function LearnMoreLabel() {
  return (
    <div className="mb-[225px] flex items-center mt-[55px]">
      <Image src="./assets/right-arrow.svg" alt="hhhh" width={43} height={43} />
      <span className="px-[14px] text-[#FFFFFF] text-[25.14px] font-bold">
        {" "}
        LEARN MORE
      </span>
    </div>
  );
}
