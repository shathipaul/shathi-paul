import CommonTitle from "@/components/common/CommonTitle";
import OpacityAnimation from "@/components/common/OpacityAnimation";
import ProjectCards from "@/components/modules/projects/ProjectCards";
import { getAllData } from "@/services/GetServices";

const ProjectsPage = async () => {
  const projectData = await getAllData("projects.json");

  return (
    <OpacityAnimation>
      <div className="pt-20 lg:pt-28 pb-10">
        <CommonTitle text="My Awesome projects" />
        <ProjectCards projectData={projectData} />
      </div>
    </OpacityAnimation>
  );
};

export default ProjectsPage;
