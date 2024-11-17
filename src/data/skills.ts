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
    id: 1,
    name: "HTML",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    id: 2,
    name: "CSS",
    icon: FaCss3Alt,
    color: "#1572B6",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: IoLogoJavascript,
    color: "#F7DF1E",
  },
  {
    id: 4,
    name: "TypeScript",
    icon: SiTypescript,
    color: "#007ACC",
  },
  {
    id: 5,
    name: "React.js",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    id: 6,
    name: "SASS",
    icon: BiLogoSass,
    color: "#CC6699",
  },
  {
    id: 7,
    name: "Next.js",
    icon: RiNextjsFill,
    color: "#100000",
  },
  {
    id: 8,
    name: "Tailwind CSS",
    icon: RiTailwindCssFill,
    color: "#38B2AC",
  },
  {
    id: 9,
    name: "Node.js",
    icon: FaNodeJs,
    color: "#43853D",
  },
  {
    id: 10,
    name: "PHP",
    icon: SiPhp,
    color: "#777BB4",
  },
  {
    id: 11,
    name: "Laravel",
    icon: FaLaravel,
    color: "#FF2D20",
  },
  {
    id: 12,
    name: "jQuery",
    icon: SiJquery,
    color: "#0769AD",
  },
  {
    id: 13,
    name: "Docker",
    icon: FaDocker,
    color: "#0894E3",
  },
  {
    id: 14,
    name: "Git",
    icon: FaGithub,
    color: "#100000",
  },
  {
    id: 15,
    name: "PostgreSQL",
    icon: BiLogoPostgresql,
    color: "#316192",
  },
];

export default skills;
