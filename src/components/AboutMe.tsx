"use client";

import { AboutMe as AboutMeTypes } from "@/types/aboutMe";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

interface AboutMeProps {
  aboutMe: AboutMeTypes[];
}

const AboutMe = ({ aboutMe }: AboutMeProps) => {
  const { image, name, bio, roles, links } = aboutMe[0];

  return (
    <motion.section
      className="flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Image
          className="rounded-full w-44 h-44"
          src={image}
          alt={`Foto de perfil de ${name}`}
          width={720}
          height={1200}
          priority
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="flex flex-col mt-4"
      >
        <h1 className="text-white text-2xl font-semibold">
          Prazer, {name}! ✋🏻
        </h1>

        <h2 className="text-orange text-center font-bold text-lg">
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex flex-col w-full gap-3 mt-2"
      >
        <p className="text-white text-sm w-full text-left font-medium">{bio}</p>
      </motion.div>

      <motion.div
        className="flex flex-row gap-4 mt-6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <a target="_blank" href={links.linkedin}>
          <FaLinkedin className="text-white text-2xl cursor-pointer transition-colors duration-500 hover:text-orange" />
        </a>
        <a target="_blank" href={links.github}>
          <FaGithub className="text-white text-2xl transition-colors duration-500 hover:text-orange" />
        </a>
        <a target="_blank" href={links.whatsapp}>
          <FaWhatsapp className="text-white text-2xl transition-colors duration-500 hover:text-orange" />
        </a>
        <a target="_blank" href={links.mail}>
          <IoMailOutline className="text-white text-2xl transition-colors duration-500 hover:text-orange" />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default AboutMe;
