import Image from "next/image"
import profilePic from '/public/assets/dummy.jpg'

export default function MyName() {
  return (

    <main className="mt-[1190px] px-[45px] flex items-start flex-col font-[Neulis_Sans] font-bold text-[270px] leading-[100%] tracking-[0%] text-[#FFFFFF] font-bold uppercase">
      <div>
        ro<span>
          {/* <Image
          src={profilePic}
          alt="myname"
          width={120}
          height={40}
        /> */}
        </span>hit</div>
      <div>
        kshirsagar<span>
        </span>
      </div>
    </main>
  )
}