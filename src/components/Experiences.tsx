"use-client";

import { motion } from "framer-motion";

import { Experiences as ExperiencesTypes } from "@/types/experiences";

interface ExperiencesProps {
  experiences: ExperiencesTypes[];
}

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <section
      id="experiences"
      className="w-full flex flex-col gap-4 scroll-mt-20 sm:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3"
    >
      <motion.h1
        className="text-center text-white-1 font-bold text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        Experiência
      </motion.h1>

      <div className="w-full flex flex-col bg-black-2 gap-1 px-4 items-center rounded-lg">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            className="w-full h-fit rounded-lg pb-4 flex flex-col gap-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.3 }}
          >
            <div className="flex flex-col gap-1">
              <h2 className="text-orange font-semibold text-base mt-2 sm:text-lg">
                {experience.role}
              </h2>

              <div className="flex flex-row items-center gap-1">
                <a
                  className="text-white-1 text-sm font-bold cursor-pointer transition-colors duration-500 hover:text-orange sm:text-base"
                  target="_blank"
                  href={experience.link}
                >
                  @ {experience.company}
                </a>
                <span className="text-white-1 text-sm font-medium sm:text-base">
                  |
                </span>
                <span className="text-white-1 text-sm font-medium sm:text-base">
                  {experience.period}
                </span>
              </div>
            </div>

            <div className="flex gap-2 pt-2 flex-wrap items-center justify-start">
              {experience.techs.map((tech, index) => (
                <span
                  key={index}
                  className="text-white-1 font-medium text-sm bg-black-3 rounded-full px-2 py-1 mt-1"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
