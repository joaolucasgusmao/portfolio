"use-client";

import { Projects as ProjectsType } from "@/types/projects";
import { FiGithub } from "react-icons/fi";
import { TbBrandVercel } from "react-icons/tb";
import { motion } from "framer-motion";

interface ProjectsProps {
  projects: ProjectsType[];
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <section id="projects" className="flex flex-col gap-4 mt-4">
      <motion.h1
        className="text-center text-white font-bold text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
      >
        Projetos
      </motion.h1>
      <div className="flex flex-col gap-8 items-center">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ amount: 0.5 }}
            className="w-full bg-black-2 pb-3 flex flex-col rounded-md gap-4 sm:w-2/4"
          >
            <div className="flex justify-between items-center mx-4 mt-2 ">
              <h2 className="text-base text-orange font-semibold sm:text-xl">
                {project.name}
              </h2>
              <div className="flex gap-2">
                {project.deploy && (
                  <a target="_blank" href={project.deploy}>
                    <TbBrandVercel className="text-white text-xl transition-colors duration-500 hover:text-orange sm:text-2xl" />
                  </a>
                )}
                <a target="_blank" href={project.repo}>
                  <FiGithub className="text-white text-xl transition-colors duration-500 hover:text-orange sm:text-2xl" />
                </a>
              </div>
            </div>
            <p className="text-white text-sm text-left mx-4 font-medium sm:text-base">
              {project.description}
            </p>
            <div className="flex flex-col gap-2 mx-4 border-t-2 border-gray-700">
              <div className="flex gap-2 pt-2 flex-wrap items-center justify-start">
                {project.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="text-white font-medium text-sm bg-black-3 rounded-full px-2 py-1 mt-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
