"use-client";

import { Experiences as ExperiencesTypes } from "@/types/experiences";
import { motion } from "framer-motion";

interface ExperiencesProps {
  experiences: ExperiencesTypes[];
}

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <motion.section
      id="experiences"
      className="flex flex-col gap-4 mt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-center text-white font-bold text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Experiência
      </motion.h1>

      <div className="flex flex-col gap-8 items-center">
        {experiences.map((experience) => (
          <motion.div
            key={experience.id}
            className="bg-black-2 pb-3 flex flex-col gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex px-4 justify-between gap-1">
              <motion.h2
                className="text-orange font-semibold text-base mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {experience.role}
              </motion.h2>

              <div className="flex flex-row mt-2 items-center gap-1">
                <motion.a
                  className="text-white text-sm font-bold cursor-pointer transition-colors duration-500 hover:text-orange"
                  target="_blank"
                  href={experience.link}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {experience.company}
                </motion.a>
                <span className="text-white text-sm font-medium">|</span>
                <motion.span
                  className="text-white text-sm font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {experience.period}
                </motion.span>
              </div>
            </div>

            <motion.p
              className="text-white text-sm text-left mx-4 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {experience.responsibilities}
            </motion.p>

            <div className="flex flex-col gap-2 mx-4 border-t-2 border-gray-700">
              <span></span>
              <div className="flex gap-2 pt-2 flex-wrap items-center justify-start">
                {experience.techs.map((tech, index) => (
                  <motion.span
                    key={index}
                    className="text-white font-medium text-sm bg-black-3 rounded-full px-2 py-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.2,
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experiences;
