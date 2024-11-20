"use-client";

import { Experiences as ExperiencesTypes } from "@/types/experiences";
import { motion } from "framer-motion";

interface ExperiencesProps {
  experiences: ExperiencesTypes[];
}

const Experiences = ({ experiences }: ExperiencesProps) => {
  return (
    <section id="experiences" className="flex flex-col gap-4 mt-4 scroll-mt-20">
      <h1 className="text-center text-white font-bold text-2xl">Experiência</h1>

      <div className="flex flex-col gap-8 items-center">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="bg-black-2 pb-3 flex flex-col gap-3 sm:w-2/3"
          >
            <div className="flex px-4 justify-between gap-1">
              <h2 className="text-orange font-semibold text-base mt-2 sm:text-xl">
                {experience.role}
              </h2>

              <div className="flex flex-row mt-2 items-center gap-1">
                <a
                  className="text-white text-sm font-bold cursor-pointer transition-colors duration-500 hover:text-orange sm:text-lg"
                  target="_blank"
                  href={experience.link}
                >
                  {experience.company}
                </a>
                <span className="text-white text-sm font-medium sm:text-lg">|</span>
                <span className="text-white text-sm font-medium sm:text-lg">
                  {experience.period}
                </span>
              </div>
            </div>

            <p className="text-white text-sm text-left mx-4 font-medium sm:text-base">
              {experience.responsibilities}
            </p>

            <div className="flex flex-col gap-2 mx-4 border-t-2 border-gray-700">
              <div className="flex gap-2 pt-2 flex-wrap items-center justify-start">
                {experience.techs.map((tech, index) => (
                  <span
                    key={index}
                    className="text-white font-medium text-sm bg-black-3 rounded-full px-2 py-1 mt-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
