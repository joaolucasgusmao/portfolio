import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const AboutMe = () => {
  return (
    <div
      className="flex flex-col items-center gap-4
    "
    >
      <Image
        className="rounded-50 w-48 h-42"
        src="/avatar.png"
        alt="Foto de perfil"
        width={720}
        height={900}
        priority
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-white text-3xl font-semibold">
          Prazer, João Lucas!✋🏻
        </h1>
        <span className="text-orange text-center font-semibold text-xl">
          <Typewriter
            options={{
              strings: ["Desenvolvedor Front-end", "Desenvolvedor Back-end"],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </div>

      <div className="flex gap-2 flex-col w-full">
        <p className="text-white text-base w-full text-center">
          Sou apaixonado por programação e estou em constante evolução. Estou
          imerso no mundo do desenvolvimento web, explorando seus aspectos e
          desafios.
        </p>
        <p className="text-white text-base w-full text-center">
          Cada projeto é uma oportunidade de crescimento, e estou sempre ansioso
          para aprender e colaborar. Vamos transformar linhas de código em
          soluções extraordinárias juntos! 🚀
        </p>
      </div>

      <div className="flex flex-row gap-4">
        <a target="_blank" href="https://github.com/joaolucasgusmao">
          <FaGithub className="text-white text-3xl" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/joaoolucasgusmao/">
          <FaLinkedin className="text-white text-3xl cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
