import { Projects as ProjectsType } from "@/types/projects";
import { FiGithub } from "react-icons/fi";
import { TbBrandVercel } from "react-icons/tb";
import { motion } from "framer-motion";
import Image from "next/image";

interface ProjectsProps {
  projects: ProjectsType[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center gap-8 scroll-mt-20"
    >
      <motion.h1
        className="text-center text-white-1 font-bold text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.8 }}
      >
        Meus Projetos
      </motion.h1>
      <ul className="w-full grid grid-cols-1 gap-8 items-center place-items-center lg:grid-cols-2 xl:w-4/5 2xl:w-2/3">
        {projects.map((project) => {
          return (
            <motion.li
              className="w-full h-fit bg-black-2 pb-4 flex flex-col rounded-lg gap-1 sm:w-2/3 lg:w-full"
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ amount: 0.4 }}
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt="Imagem do projeto"
                  width={1920}
                  height={900}
                  className="rounded-t-lg w-full"
                />
              )}
              <div className="flex justify-between items-center mx-4 mt-2">
                <h2 className="text-base text-orange font-semibold sm:text-lg">
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
              <p className="text-white-1 text-sm text-left mx-4 font-medium pb-1 sm:text-base">
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
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
};

export default Projects;
