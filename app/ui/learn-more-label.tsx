import Image from "next/image";
import React from "react";

export default function LearnMoreLabel() {
  return (
    <div className="flex items-center">
      <Image src="./assets/common/right-arrow.svg" alt="arrow-with-label" width={43} height={43} />
      <span className="px-[14px] text-white text-[25.14px] font-bold">
        {" "}
        LEARN MORE
      </span>
    </div>
  );
}
