"use client";
import React, { useRef, useState } from "react";
import jsLogo from "@/assets/images/skills/3.svg";
import tsLogo from "@/assets/images/skills/4.svg";
import reactLogo from "@/assets/images/skills/5.svg";
import nextLogo from "@/assets/images/skills/6.svg";
import tailwindLogo from "@/assets/images/skills/7.svg";
import nodeLogo from "@/assets/images/skills/8.svg";
import mongoLogo from "@/assets/images/skills/9.svg";
import postLogo from "@/assets/images/skills/13.svg";
import Card from "./Card";

const skillsData = [
  {
    title: "JavaScript",
    image: jsLogo,
  },
  {
    title: "TypeScript",
    image: tsLogo,
  },
  {
    title: "React.js",
    image: reactLogo,
  },
  {
    title: "Next.js",
    image: nextLogo,
  },
  {
    title: "Tailwind CSS",
    image: tailwindLogo,
  },
  {
    title: "Node.js",
    image: nodeLogo,
  },
  {
    title: "MongoDB",
    image: mongoLogo,
  },
  {
    title: "Postgres",
    image: postLogo,
  },
];

const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [revealed, setRevealed] = useState<boolean[]>(
    Array(skillsData.length).fill(false)
  );

  return (
    <div id="skills">
      <div className="text-center mb-[48px]">
        <h4 className="text-3xl md:text-4xl lg:text-5xl tracking-wider">
          My Skills
        </h4>
      </div>
      <div
        ref={sectionRef}
        className="relative min-h-screen flex justify-center my-16 scroll-mt-28"
      >
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-1 bg-primary" />

        {/* Cards */}
        <div className="relative w-full flex flex-col items-center py-24">
          {skillsData.map((skill, index) => (
            <Card
              key={index}
              index={index}
              title={skill.title}
              image={skill.image}
              revealed={revealed}
              setRevealed={setRevealed}
            />
          ))}
          <span className="w-6 h-6 rounded-full bg-primary absolute bottom-0"></span>
          <span className="w-6 h-6 rounded-full bg-primary absolute top-0"></span>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
