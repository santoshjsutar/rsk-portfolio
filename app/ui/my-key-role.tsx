import Image from "next/image";
import React, { Fragment } from "react";

type MyKeyRoleType = {
  width: number;
  romanNumber: string;
  roleName: string;
  keyRoles: string[];
};
export default function MyKeyRole({
  width,
  romanNumber,
  roleName,
  keyRoles,
}: MyKeyRoleType) {
  return (
    <div className="gap-[16px]">
      <div className="flex flex-row gap-[19px]">
        <Image
          src={`/assets/common/${romanNumber}.svg`}
          alt={romanNumber}
          id={romanNumber}
          width={width}
          height={28}
        />
        <label
          htmlFor={roleName}
          className="text-[40.27px] font-bold text-white"
        >
          {roleName}
        </label>
      </div>
      <div className="flex flex-col gap-[8px]">
        {keyRoles.map((role, id) => (
          <div className="flex gap-[19px]" key={`ROLES_${role}_${id}`}>
            <Image
              src={`/assets/common/black-dot.svg`}
              alt={romanNumber}
              id={romanNumber}
              width={width}
              height={28}
            />
            <span className="text-[25.14px] text-[#D9D9D9]">{role}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
