"use-client";

import skills from "@/data/skills";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="w-full flex flex-col items-center gap-6 mt-4 scroll-mt-20"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.5 }}
    >
      <h1 className="text-center text-white-1 font-bold text-2xl">Skills</h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 1500 }}
        loop={true}
        navigation={true}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <SwiperSlide key={skill.id}>
              <motion.div
                className="w-48 h-32 flex flex-col items-center gap-2 justify-center bg-black-2 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ amount: 0.5 }}
              >
                <Icon style={{ color: skill.color }} className="text-4xl" />
                <p className="text-lg text-white-1 font-semibold">{skill.name}</p>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.section>
  );
};

export default Skills;
