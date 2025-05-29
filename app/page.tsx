import Image from "next/image";
import Header from "./ui/header";
import MyName from "./ui/my-name";
import MyDescription from "./ui/my-description";
import LearnMoreLabel from "./ui/learn-more-label";
import WorkLabel from "./ui/work-label";

export default function Home() {
  return (
    <div className="bg-[#000000] h-[100%] w-screen px-[45px]">
      <Header />
      <MyName />
      <MyDescription />
      <LearnMoreLabel />
      <WorkLabel image="green-dot" label="Selected Work" />
      <div className=" mt-[165px] text-[#FFFFFF] text-[31.82px] font-bold">
        Ayuran{" "}
      </div>

      <div className="mt-[13.75px] text-[#FFFFFF] text-[22.35px] font-light">
        Merging Modern Luxury with Ancient Indian <br />
        Tradition{" "}
      </div>

      <div className="mt-[13.75px]">
        <span className="text-[#CBD72B] text-[19.86px] font-light">
          {" "}
          Personal Care{" "}
        </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          ></Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light">
          {" "}
          Brand Identity{" "}
        </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          ></Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light">
          {" "}
          Brand Strategy{" "}
        </span>
      </div>

      <div className=" mt-[165px] text-[#FFFFFF] text-[31.82px] font-bold">
        Playdale{" "}
      </div>

      <div className="mt-[13.75px] text-[#FFFFFF] text-[22.35px] font-light">
        Merging Modern Luxury with Ancient Indian <br />
        Tradition{" "}
      </div>

      <div className="mt-[13.75px]">
        <span className="text-[#2DE6B4] text-[19.86px] font-light">
          {" "}
          Public{" "}
        </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          ></Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light">
          {" "}
          Brand Identity{" "}
        </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          ></Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light">
          {" "}
          Brand Strategy{" "}
        </span>

        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          ></Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light">
          {" "}
          Playful{" "}
        </span>
      </div>

      <div className=" mt-[165px] text-[#FFFFFF] text-[31.82px] font-bold">
        Quanwave{" "}
      </div>

      <div className="mt-[13.75px] text-[#FFFFFF] text-[22.35px] font-light">
        Merging Modern Luxury with Ancient Indian <br />
        Tradition{" "}
      </div>

      <div className="mt-[13.75px]">
        <span className="text-[#9C85FF] text-[19.86px] font-light">
          {" "}
          Technology{" "}
        </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          ></Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light">
          {" "}
          Brand Identity{" "}
        </span>
        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          ></Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light">
          {" "}
          Brand Strategy{" "}
        </span>

        <span className="flex items-center px-[20px]">
          <Image
            src="./assets/outline-circle.svg"
            alt="hhhh"
            width={13}
            height={13}
          ></Image>
        </span>
        <span className="text-[#FFFFFF] text-[19.86px] font-light"> AI </span>
      </div>

      <div className="flex items-center mt-[110px]">
        <Image
          src="./assets/red-circle.svg"
          alt="hhhh"
          width={18}
          height={18}
        ></Image>

        <span className="px-[14px] text-[#FFFFFF] text-[25.14px] font-bold">
          CREATIVE SKILLS AND EXPERTISE{" "}
        </span>
      </div>
    </div>
  );
}
