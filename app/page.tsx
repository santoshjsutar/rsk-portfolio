import Image from "next/image";
import Header from "./ui/header";
import MyName from "./ui/my-name";

export default function Home() {
  return (
    <div className="bg-[#000000] h-[100%] w-screen">
      <Header />
      <MyName />
      {/* paragraph here */}

      <div className="mt-[110px] px-[45px] font-[Neulis_Sans] font-bold text-[35.75px] leading-[100%] tracking-[0%] text-[#FFFFFF] font-bold leading-[normal]">
        <span>I’m a passionate designer with an expertise in creating unique and effective </span>
        <span className="text-[#FF2C52] ">
          Brand Identities.</span> <br />
        <span>
          Alongside this, I have strong skills in </span>
        <span className="font-bold">
          UI/UX Design </span>
        <span> and </span>
        <span className="font-bold">
          Packaging Design, </span>
        <span> ensuring well-rounded, </span> <br />
        <span> creative solutions. My focus is on delivering designs that resonate with audiences and elevate brands. </span>
      </div>
      <div className=" flex items-center mt-[55px] px-[45px]">
        <Image
          src="./assets/right-arrow.svg"
          alt="hhhh"
          width={43}
          height={43}
        >
        </Image>

        <span className="px-[14px] text-[#FFFFFF] text-[25.14px] font-bold">
          LEARN MORE</span>
      </div>

      <div className="flex items-center mt-[110px] px-[45px]">
        <Image
          src="./assets/yellowcircle.svg"
          alt="hhhh"
          width={18}
          height={18}
        >
        </Image>

        <span className="px-[14px] text-[#FFFFFF] text-[25.14px] font-bold">
          SELECTED WORK </span>

      </div>

      <div className=" mt-[165px] px-[45px] text-[#FFFFFF] text-[31.82px] font-bold">
        Ayuran </div>

      <div className="mt-[13.75px] px-[45px] text-[#FFFFFF] text-[22.35px] font-light">
        Merging Modern Luxury with Ancient Indian <br />
        Tradition </div>

      <div className="mt-[13.75px] px-[45px]">
        <span className="text-[#CBD72B] text-[19.86px] font-light"> Personal Care </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          >
          </Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light"> Brand Identity </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          >
          </Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light"> Brand Strategy </span>
      </div>

      <div className=" mt-[165px] px-[45px] text-[#FFFFFF] text-[31.82px] font-bold">
        Playdale </div>

      <div className="mt-[13.75px] px-[45px] text-[#FFFFFF] text-[22.35px] font-light">
        Merging Modern Luxury with Ancient Indian <br />
        Tradition </div>

      <div className="mt-[13.75px] px-[45px]">
        <span className="text-[#2DE6B4] text-[19.86px] font-light"> Public </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          >
          </Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light"> Brand Identity </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          >
          </Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light"> Brand Strategy </span>

        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          >
          </Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light"> Playful </span>
      </div>

      <div className=" mt-[165px] px-[45px] text-[#FFFFFF] text-[31.82px] font-bold">
        Quanwave </div>

      <div className="mt-[13.75px] px-[45px] text-[#FFFFFF] text-[22.35px] font-light">
        Merging Modern Luxury with Ancient Indian <br />
        Tradition </div>

      <div className="mt-[13.75px] px-[45px]">
        <span className="text-[#9C85FF] text-[19.86px] font-light"> Technology </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          >
          </Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light"> Brand Identity </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          >
          </Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light"> Brand Strategy </span>

        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          >
          </Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light"> AI </span>
      </div>

      <div className="flex items-center mt-[110px] px-[45px]">
        <Image
          src="./assets/red-circle.svg"
          alt="hhhh"
          width={18}
          height={18}
        >
        </Image>

        <span className="px-[14px] text-[#FFFFFF] text-[25.14px] font-bold">
          CREATIVE SKILLS AND EXPERTISE </span>

      </div>



    </div>
  );
}
