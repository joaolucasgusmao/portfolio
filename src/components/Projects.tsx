import { Projects as ProjectsType } from "@/types/projects";
import { FiGithub } from "react-icons/fi";
import { TbBrandVercel } from "react-icons/tb";
import { motion } from "framer-motion";

interface ProjectsProps {
  projects: ProjectsType[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const groupedProjects = projects.reduce((acc, project, index) => {
    if (index % 2 === 0) {
      acc.push([project]);
    } else {
      acc[acc.length - 1].push(project);
    }
    return acc;
  }, [] as ProjectsType[][]);

  return (
    <section id="projects" className="flex flex-col gap-4 scroll-mt-20">
      <motion.h1
        className="text-center text-white-1 font-bold text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.8 }}
      >
        Projetos
      </motion.h1>
      <div className="flex flex-col gap-4 items-center">
        {groupedProjects.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex flex-wrap items-center gap-4 justify-center w-full lg:flex-row lg:flex-nowrap "
          >
            {group.map((project) => (
              <motion.div
                className="w-full h-fit bg-black-2 pb-3 flex flex-col rounded-lg gap-4 sm:w-2/3 lg:w-2/5"
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.8 }}
              >
                <div className="flex justify-between items-center mx-4 mt-2">
                  <h2 className="text-base text-orange font-semibold sm:text-xl">
                    {project.name}
                  </h2>
                  <div className="flex gap-2">
                    {project.deploy && (
                      <a target="_blank" href={project.deploy}>
                        <TbBrandVercel className="text-white-1 text-xl transition-colors duration-500 hover:text-orange sm:text-2xl" />
                      </a>
                    )}
                    <a target="_blank" href={project.repo}>
                      <FiGithub className="text-white-1 text-xl transition-colors duration-500 hover:text-orange sm:text-2xl" />
                    </a>
                  </div>
                </div>
                <p className="text-white-1 text-sm text-left mx-4 font-medium sm:text-base">
                  {project.description}
                </p>
                <div className="flex flex-col gap-2 mx-4 border-t-2 border-gray-2">
                  <div className="flex gap-2 pt-2 flex-wrap items-center justify-start">
                    {project.techs.map((tech, index) => (
                      <span
                        key={index}
                        className="text-white-1 font-medium text-sm bg-black-3 rounded-full px-2 py-1 mt-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
