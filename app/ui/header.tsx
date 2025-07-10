"use client";
import Image from "next/image";
import { useState } from "react";
import { saveAs } from "file-saver";
import axios from "axios";

const HOME_HEADER = "home";
export default function Header() {
  const [activeItem, setActiveItem] = useState(HOME_HEADER);
  async function downloadFile() {
    try {
      const response = await axios.get(
        `${window.location.origin}/assets/files/rsk-cv.pdf`,
        {
          responseType: "blob",
        }
      );
      saveAs(response.data, "rsk-cv.pdf");
    } catch (error: any) {
      saveAs(error.response.data, "rsk-cv.pdf");
      console.error("Error downloading the file:", error);
    }
  }
  return (
    <header className="py-[50px] flex justify-between font-bold text-[25.15px] leading-[100%] tracking-[0%] text-center text-white">
      <Image
        src="/assets/brand/logo.svg"
        alt="my-logo"
        width={65}
        height={40}
      />
      <div className="gap-[45px] w-[534] h-[71] flex items-center justify-center font-bold">
        {[HOME_HEADER, "work", "contact", "about"].map((item) => (
          <span
            key={item}
            className="flex flex-col items-center"
            onClick={() => setActiveItem(item)}
          >
            <span className="cursor-pointer py-2">{item}</span>
            <Image
              src={`/assets/common/${
                activeItem === item ? "header" : "black"
              }-dot.svg`}
              alt="header-dot"
              width={6}
              height={6}
            />
          </span>
        ))}
      </div>
      <div className="flex items-center justify-center font-light">
        <span className="cursor-pointer py-2" onClick={downloadFile}>
          resume
        </span>
      </div>
    </header>
  );
}
