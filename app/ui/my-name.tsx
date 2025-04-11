import Image from "next/image"

export default function MyName() {
  return (
    <main className="mt-[1190px] px-[45px] flex items-start flex-col font-[Neulis_Sans] font-bold text-[270px] leading-[100%] tracking-[0%] text-[#FFFFFF] uppercase">
      <span className="w-full flex flex-row">
        <span className="">ro</span>
        <span className="hover:">
          <Image
            src="/assets/color-me.png"
            alt="myname"
            width={600}
            height={100}
          />
        </span>
        <span className="">hit</span>
      </span>
      <span className="w-full">
        kshirsagar<span>
        </span>
      </span>
    </main>
  )
}