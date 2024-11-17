import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CgSoftwareDownload } from "react-icons/cg";

import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
    <div className="flex flex-col items-center">
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
      <div className="flex flex-row gap-4 mt-4">
        <a target="_blank" href="https://www.linkedin.com/in/joaoolucasgusmao/">
          <FaLinkedin className="text-white text-2xl cursor-pointer" />
        </a>
        <a
          href="https://drive.google.com/uc?export=download&id=1Q55Ck_8Ik8tTyI_vTB4uhPKS43AZahRN"
          download
          className="h-fit w-fit"
        >
          <CgSoftwareDownload className="text-white text-2xl cursor-pointer" />
        </a>
        <a target="_blank" href="https://github.com/joaolucasgusmao">
          <FaGithub className="text-white text-2xl" />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
