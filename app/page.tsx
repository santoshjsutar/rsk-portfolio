import Image from "next/image";
import Header from "./ui/header";
import MyName from "./ui/my-name";
import MyDescription from "./ui/my-description";
import LearnMoreLabel from "./ui/learn-more-label";
import WorkLabel from "./ui/work-label";
import WorkCard from "./ui/work-card";

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
export default function Home() {
  return (
    <div className="bg-[#000000] h-[100%] w-screen px-[45px]">
      <Header />
      <div className="mt-[1190px]">
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
    </div>
  );
}
