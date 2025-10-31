import SecondaryButton from "@/components/common/buttons/SecondaryButton";
import { IProjects } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const ProjectCards = ({ projectData }: { projectData: IProjects[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {projectData.map((card: IProjects, i: number) => (
        <div key={i} className="flex flex-col">
          <Fragment>
            <div className="w-full h-[348px] lg:h-[448px] relative z-40 overflow-hidden bg-[#f1f1f1] shadow-xl hover:scale-105 duration-1000 shadow-inset-black">
              <Image
                src={card.img}
                alt=""
                className="absolute opacity-50 -rotate-45 w-full h-full object-contain -top-1/2 -left-1/2 scale-200"
                width={400}
                height={400}
                priority
              />
              <Image
                src={card.img}
                alt=""
                className="px-[30px] md:px-[40px] lg:px-[60px] top-[30px] md:top-[40px] lg:top-[60px] z-30 absolute w-full"
                width={400}
                height={400}
                priority
              />
              <div className="w-full h-full flex items-center justify-center bg-black/55 relative z-30 opacity-0 hover:opacity-100 duration-1000 gap-6">
                <Link href={card.link} target="_blank">
                  <SecondaryButton />
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 mt-6 px-4">
              <h2 className="text-lg md:text-xl text-primary">{card.title}</h2>
              <h6 className="text-xs md:whitespace-nowrap text-primary">
                {card.stack}
              </h6>
            </div>
          </Fragment>
        </div>
      ))}
    </div>
  );
};

export default ProjectCards;
