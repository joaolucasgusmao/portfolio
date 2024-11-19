"use-client";

import skills from "@/data/skills";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="w-full flex flex-col items-center gap-6 mt-4"
    >
      <motion.h1
        className="text-center text-white font-bold text-2xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.h1>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 1500 }}
        loop={true}
        spaceBetween={50}
        navigation={true}
        speed={1000}
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <SwiperSlide key={skill.id}>
              <motion.div
                className="w-48 h-32 flex flex-col items-center gap-2 justify-center bg-black-2 rounded-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Icon style={{ color: skill.color }} className="text-4xl" />
                <p className="text-lg text-white font-semibold">{skill.name}</p>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Skills;
