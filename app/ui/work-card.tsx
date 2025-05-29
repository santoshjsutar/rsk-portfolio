import { Span } from "next/dist/trace";
import Image from "next/image";
import React, { Fragment } from "react";

type WorkLabelType = {
  image: string;
  label: string;
  description: string;
  skills: string[];
  legendColor: string;
};
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
      <p className="text-[23.35px] w-[574px]">{description}</p>
      <div className="flex gap-[9px]">
        {skills.map((skill, id) => (
          <Fragment key={`SKILL_${skill}_${id}`}>
            {id !== 0 && (
              <Image
                src={"/assets/common/outline-dot.svg"}
                alt="outline-dot image"
                width={11}
                height={11}
              />
            )}
            <span className={id === 0 ? `text-[${legendColor}]` : ""}>
              {skill}
            </span>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
