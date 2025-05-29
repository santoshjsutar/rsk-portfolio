"use client"
import Image from "next/image"
import localFont from 'next/font/local';
import { useState } from "react";

const neulisSansBlack = localFont({
  src: '../../public/fonts/NeulisSans/Neulis_Sans_Black.otf',
});
// const neulisSansLight = localFont({
//   src: '../public/fonts/NeulisSans/Neulis_Sans_Light.otf',
// });

export default function MyName() {
  const [onHover, setOnHover] = useState(false)
  return (
    // mt-[1190px] 
    <main className={`${neulisSansBlack.className} px-[45px] flex items-start flex-col text-[295.5px] text-[#FFFFFF] uppercase leading-none`}>
      <span className="w-full flex flex-row items-center">
        <span className="leading-none">ro</span>
        {/* <Image
          src="/assets/color-me.png"
          alt="myname"
          width={600}
          height={600}
          quality={100}
          style={{
            borderRadius: '10px'
          }}
        /> */}
        {onHover ? <Image
          src="/assets/black-me.png"
          alt="myname-hover"
          onMouseOut={() => setOnHover(false)}
          width={916}
          height={100}
          className="rounded-[10px]"
        /> : <Image
          src="/assets/color-me.png"
          alt="myname-default"
          width={585}
          onMouseOver={() => setOnHover(true)}
          height={100}
          className="rounded-[10px]"
        />}
        <span className="leading-none">hit</span>
      </span>
      <span className="w-full flex flex-row items-center">
        <span className="leading-none">kshirsagar</span>
      </span>
    </main>
  )
}