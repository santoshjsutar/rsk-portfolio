import Image from "next/image";
import Header from "./ui/header";
import MyName from "./ui/my-name";
import MyDescription from "./ui/my-description";
import LearnMoreLabel from "./ui/learn-more-label";
import WorkLabel from "./ui/work-label";
import WorkCard from "./ui/work-card";
import MySpecialization from "./ui/my-specialization";
import MyKeyRole from "./ui/my-key-role";

const SELECTED_WORKS = [
  {
    name: "ayuran",
    color: "#FF57E0",
    description: "Merging modern luxury with ancient Indian tradition",
    skills: ["Personal", "Brand Identity", "Brand Strategy"],
  },
  {
    name: "playdale",
    color: "#2DE6B4",
    description:
      "A creative celebration designed to promote connection and engagement",
    skills: ["Public", "Brand Identity", "Brand Strategy", "Calderdale"],
  },
  {
    name: "quanwave",
    color: "#9C85FF",
    description:
      "Pioneering powerful quantum computing and AI solutions with strategic integration",
    skills: ["Technology", "Brand Identity", "Digital", "AI"],
  },
];

const MY_KEY_ROLES = [
  {
    width: 9,
    romanNumber: "roman-one",
    role: "Brand Identity",
    keyItems: [
      "Market Research",
      "Brand Strategy",
      "Logo Design",
      "Brand Guidelines",
      "Collateral Design",
    ],
  },
  {
    width: 9 + 9 + 5,
    romanNumber: "roman-two",
    role: "UI/UX Design",
    keyItems: [
      "User Research",
      "User Flows",
      "Wireframing",
      "Interface Design",
      "Prototyping",
    ],
  },
  {
    width: 9 + 5 + 9 + 5 + 9,
    romanNumber: "roman-three",
    role: "Packaging Design",
    keyItems: [
      "Market Research",
      "Material Research",
      "Designing on Die-Lines",
      "3D Mockups",
      "Collateral Design",
    ],
  },
  {
    width: 9 + 5 + 9 + 5 + 9,
    romanNumber: "roman-four",
    role: "3D Design",
    keyItems: [
      "Basic 3D Modellling",
      "Texturing",
      "Materials",
      "Lighting",
      "Rendering",
    ],
  },
];
export default function Home() {
  return (
    <div className="bg-[#000000] h-[100%] w-screen px-[45px]">
      <Header />
      {/* <div className="mt-[1190px]"> */}
      <div className="">
        <MyName />
      </div>
      <div className="mt-[110px]">
        <MyDescription />
      </div>
      <div className="mt-[55px]">
        <LearnMoreLabel />
      </div>
      <div className="mt-[220px]">
        <WorkLabel image="green-dot" label="Selected Work" />
      </div>
      <div className="mt-[85px] flex gap-[50px]">
        {SELECTED_WORKS.map((work, id) => (
          <WorkCard
            key={`WORK_${work.name}_${id}`}
            label={work.name}
            description={work.description}
            legendColor={work.color}
            image={work.name}
            skills={work.skills}
          />
        ))}
      </div>
      <div className="mt-[162px]">
        <WorkLabel image="green-dot" label="Creative skills and expertise" />
      </div>
      <div className="mt-[85px] grid grid-flow-row-dense grid-cols-5">
        <div className="col-span-2">
          <MySpecialization />
        </div>
        <div className="col-span-3 grid grid-cols-2 gap-[110px] px-[100px]">
          {MY_KEY_ROLES.map((keyRole, id) => (
            <MyKeyRole
              width={keyRole.width}
              key={`KEY_ROLE_${keyRole.role}_${id}`}
              romanNumber={keyRole.romanNumber}
              roleName={keyRole.role}
              keyRoles={keyRole.keyItems}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
