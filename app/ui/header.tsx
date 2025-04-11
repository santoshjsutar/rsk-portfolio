"use client"
import Image from "next/image";
import { useState } from "react";

const HOME_HEADER = "home";
const WORK_HEADER = "work";
const CONTACT_HEADER = "contact";
const ABOUT_HEADER = "about";
const HEADER_ITEMS = [HOME_HEADER, WORK_HEADER, CONTACT_HEADER, ABOUT_HEADER]
export default function Header() {
    const [activeItem, setActiveItem] = useState(HOME_HEADER);
    return (
        <header className="py-[50px] px-[45px] flex justify-between font-[Neulis_Sans] font-bold text-[25.15px] leading-[100%] tracking-[0%] text-center text-[#FFFFFF]">
            <Image src="/assets/logo.svg" alt="my-logo" width={65} height={40} />
            <div className="gap-[45px] w-[534] h-[71] flex items-center justify-center font-bold">
                {HEADER_ITEMS.map(item => <span key={item} className="cursor-pointer flex flex-col items-center" onClick={() => setActiveItem(item)}>
                    {item}
                    {activeItem === item && (
                        <Image
                            src="/assets/header-dot.svg"
                            alt="header-dot"
                            width={6}
                            height={6}
                        />
                    )}
                </span>
                )}
            </div>
            <div className="flex items-center justify-center font-light">
                <span className="cursor-pointer">resume</span>
            </div>
        </header>
    );
}
