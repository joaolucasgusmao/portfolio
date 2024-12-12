"use client";

import { About as AboutMeTypes } from "@/types/about";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

interface AboutProps {
  about: AboutMeTypes[];
}

const About = ({ about }: AboutProps) => {
  const { image, name, bio, roles, links } = about[0];

  return (
    <section className="flex flex-col items-center sm:flex-row sm:justify-center sm:gap-12">
      <motion.div
        className="flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <Image
          className="rounded-full w-44 h-52 sm:w-60 sm:h-72"
          src={image}
          alt={`Foto de perfil de ${name}`}
          width={720}
          height={1226}
          priority
        />

        <div className="flex flex-col mt-4">
          <h1 className="text-white-1 text-2xl font-semibold">
            Prazer, {name}! ✋🏻
          </h1>

          <h2 className="text-orange text-center font-bold text-lg sm:text-xl">
            <Typewriter
              options={{
                strings: roles,
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 100,
              }}
            />
          </h2>
        </div>
      </motion.div>

      <motion.div
        className="flex flex-col items-center mt-2 gap-4 sm:w-1/3 sm:mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3 }}
      >
        <p className="text-white-1 text-sm w-full text-left font-medium sm:text-lg">
          Sou um desenvolvedor apaixonado por tecnologia e inovação, com quase
          um ano de experiência profissional na área.
        </p>
        <p className="text-white-1 text-sm w-full text-left font-medium sm:text-lg">
          Atualmente, estou cursando Análise e Desenvolvimento de Sistemas na
          Uninter e tenho trabalhado com tecnologias como React.js, Next.js,
          Node.js, PHP e Laravel para criar soluções escaláveis e inovadoras.
        </p>
        <div className="flex flex-row gap-4">
          <a target="_blank" href={links.linkedin}>
            <FaLinkedin className="text-white-1 text-2xl sm:text-3xl cursor-pointer transition-colors duration-500 hover:text-orange" />
          </a>
          <a target="_blank" href={links.github}>
            <FaGithub className="text-white-1 text-2xl sm:text-3xl transition-colors duration-500 hover:text-orange" />
          </a>
          <a target="_blank" href={links.whatsapp}>
            <FaWhatsapp className="text-white-1 text-2xl sm:text-3xl transition-colors duration-500 hover:text-orange" />
          </a>
          <a target="_blank" href={links.mail}>
            <IoMailOutline className="text-white-1 text-2xl sm:text-3xl transition-colors duration-500 hover:text-orange" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
