import localFont from "next/font/local";
import Image from "next/image";
import React, { Fragment } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type WorkLabelType = {
  image: string;
  label: string;
  description: string;
  skills: string[];
  legendColor: string;
};
const neulisSansLight = localFont({
  src: "../../public/fonts/NeulisSans/Neulis_Sans_Light.otf",
});
export default function WorkCard({
  image,
  label,
  description,
  skills,
  legendColor,
}: WorkLabelType) {
  return (
    <div className="text-white flex flex-col gap-[10px]">
      <div className="group overflow-hidden transition-transform duration-700 rounded-[10px]">
        <Image
          src={`/assets/work/${image}.png`}
          alt={image}
          id={label}
          width={574}
          height={407}
          className="rounded-[10px] group-hover:scale-110 ease-in-out"
        />
      </div>
      <label htmlFor={label} className="font-bold text-[31.82px] capitalize">
        {label}
      </label>
      <p className={`${neulisSansLight.className} text-[23.35px] w-[574px]`}>
        {description}
      </p>
      <div className="flex gap-[9px]">
        {skills.map((skill, id) => {
          const conditionalClasses = {
            "text-[#FF57E0]": id === 0 && label === "ayuran",
            "text-[#2DE6B4]": id === 0 && label === "playdale",
            "text-[#9C85FF]": id === 0 && label === "quanwave",
          };
          const baseClasses = neulisSansLight.className;
          const mergedClasses = twMerge(clsx(baseClasses, conditionalClasses));
          return (
            <Fragment key={`SKILL_${skill}_${id}`}>
              {id !== 0 && (
                <Image
                  src={"/assets/common/outline-dot.svg"}
                  alt="outline-dot image"
                  width={11}
                  height={11}
                />
              )}
              <span className={mergedClasses}>{skill}</span>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
