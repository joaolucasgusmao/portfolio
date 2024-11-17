import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
    <section className="flex flex-col items-center">
      <Image
        className="rounded-50 w-48 h-42"
        src="/avatar.png"
        alt="Foto de perfil"
        width={720}
        height={900}
        priority
      />
      <div className="flex flex-col mt-4">
        <h1 className="text-white text-3xl font-semibold">
          Prazer, João Lucas!✋🏻
        </h1>
        <h2 className="text-orange text-center font-bold text-lg">
          <Typewriter
            options={{
              strings: [
                "Desenvolvedor Full-Stack",
                "Desenvolvedor Front-end",
                "Desenvolvedor Back-end",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>
      </div>
      <div className="flex flex-col w-full gap-3 mt-2">
        <p className="text-white text-sm w-full text-center font-medium">
          Sou Desenvolvedor apaixonado por tecnologia e programação, com sólida
          experiência em desenvolvimento de soluções web utilizando React, Node,
          PHP e Laravel.
        </p>
      </div>
      <div className="flex flex-row gap-4 mt-6">
        <a target="_blank" href="https://www.linkedin.com/in/joaoolucasgusmao/">
          <FaLinkedin className="text-white text-2xl cursor-pointer" />
        </a>
        <a target="_blank" href="https://github.com/joaolucasgusmao">
          <FaGithub className="text-white text-2xl" />
        </a>
        <a target="_blank" href="https://w.app/joaolucas">
          <FaWhatsapp className="text-white text-2xl" />
        </a>
        <a target="_blank" href="mailto:joaolucasgusmao@hotmail.com">
          <IoMailOutline className="text-white text-2xl" />
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
