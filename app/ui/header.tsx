import Image from "next/image"

export default function Header() {
    return (
        <header className="py-[50px] px-[45px] flex justify-between font-[Neulis_Sans] font-bold text-[25.15px] leading-[100%] tracking-[0%] text-center text-[#FFFFFF]"
            style={{
                fontFamily: "neulis-sans",
            }}
        >
            <Image
                src="./assets/logo.svg"
                alt="my-logo"
                width={65}
                height={40}
            ></Image>
            <div className="gap-[45px] w-[534] h-[71] flex items-center justify-center font-bold">
                <span>home</span>
                <span>work</span>
                <span>case studies</span>
                <span>contact</span>
            </div>
            <div className="flex items-center justify-center font-light">
                <span>about</span>
            </div>
        </header>
    )
}