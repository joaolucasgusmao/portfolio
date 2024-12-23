import { Education as EducationTypes } from "@/types/education";
import { motion } from "framer-motion";
import Image from "next/image";

interface EducationProps {
  educations: EducationTypes[];
}

const Education = ({ educations }: EducationProps) => {
  return (
    <section
      id="education"
      className="w-full flex flex-col items-center gap-4 scroll-mt-20 sm:w-2/3 lg:w-1/2 xl:w-2/5 2xl:w-1/3"
    >
      <motion.h1
        className="text-center text-white-1 font-bold text-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.8 }}
      >
        Formação
      </motion.h1>
      <motion.ul
        className="w-full flex items-start flex-col bg-black-2 gap-5 pl-1 py-4 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 0.2 }}
      >
        {educations.map((education) => {
          return (
            <li
              key={education.id}
              className="flex justify-start flex-col gap-2 pl-1"
            >
              <div className="flex items-center justify-start gap-3">
                <Image
                  src={education.image}
                  alt="Logo da instituição"
                  width={300}
                  height={300}
                  className="w-20 h-auto object-contain"
                />
                <div className="flex gap-1 flex-col pr-4">
                  <a
                    href={education.link}
                    className="text-base font-semibold text-orange cursor-pointer"
                  >
                    {education.institution}
                  </a>
                  <p className="text-white-1 font-semibold text-sm">
                    {education.course}
                  </p>
                  <span className="text-white-1 font-semibold text-sm">
                    {education.period}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </motion.ul>
    </section>
  );
};

export default Education;
