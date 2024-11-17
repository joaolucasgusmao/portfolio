import projects from "@/data/projects";
import { FiGithub } from "react-icons/fi";
import { TbBrandVercel } from "react-icons/tb";

const Projects = () => {
  return (
    <section className="flex flex-col gap-4 mt-4">
      <h1 className="text-center text-white font-bold text-2xl">Projetos</h1>
      <div className="flex flex-col gap-8 items-center">
        {projects.map((project) => {
          return (
            <div
              key={project.id}
              className="w-full bg-black-2 flex flex-col rounded-md gap-4"
            >
              <div className="flex justify-between items-center mx-4 mt-2 ">
                <h2 className="text-orange font-semibold">{project.name}</h2>
                <div className="flex gap-2">
                  <a target="_blank" href={project.deploy}>
                    <TbBrandVercel className="text-white text-xl" />
                  </a>
                  <a target="_blank" href={project.repo}>
                    <FiGithub className="text-white text-xl" />
                  </a>
                </div>
              </div>
              <p className="text-white text-sm mx-4 font-medium">
                {project.description}
              </p>
              <div className="flex flex-col gap-2 mx-4 mb-2 border-t-2 border-gray-700">
                <span></span>
                <span className="text-sm font-medium text-gray-100">
                  {project.techs.join(", ")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
