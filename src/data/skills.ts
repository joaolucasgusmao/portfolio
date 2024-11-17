import { Skills } from "@/types/skills";
import {
  FaCss3Alt,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaLaravel,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiJquery, SiPhp, SiTypescript } from "react-icons/si";
import { BiLogoPostgresql, BiLogoSass } from "react-icons/bi";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";

const skills: Skills[] = [
  {
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    name: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    name: "JavaScript",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "#007ACC",
  },
  {
    name: "React.js",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    name: "SASS",
    icon: BiLogoSass,
    color: "#CC6699",
  },
  {
    name: "Next.js",
    icon: RiNextjsFill,
    color: "#100000",
  },
  {
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#38B2AC",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "#43853D",
  },
  {
    name: "PHP",
    icon: SiPhp,
    color: "#777BB4",
  },
  {
    name: "Laravel",
    icon: FaLaravel,
    color: "#FF2D20",
  },
  {
    name: "jQuery",
    icon: SiJquery,
    color: "#0769AD",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "#0894E3",
  },
  {
    name: "Git",
    icon: FaGithub,
    color: "#100000",
  },
  {
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    color: "#316192",
  },
];

export default skills;
