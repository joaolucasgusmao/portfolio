import skills from "@/data/skills";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 mt-4">
      <h1 className="text-center text-white font-bold text-2xl">Skills</h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 1500 }}
        spaceBetween={50}
        navigation={true}
        speed={1000}
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <SwiperSlide key={skill.id}>
              <div className="w-48 h-32 flex flex-col items-center gap-2 justify-center bg-black-2 rounded-sm">
                <Icon style={{ color: skill.color }} className="text-4xl" />
                <p className="text-lg text-white font-semibold">{skill.name}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Skills;
