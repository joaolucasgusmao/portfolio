"use-client";

import { motion } from "framer-motion";

const SideMenu = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", bounce: 0.25 }}
      className="w-full bg-black-1 flex flex-col fixed top-16 left-0"
    >
      <div className="flex flex-col gap-2">
        <a
          className="w-full py-2 pl-4 text-white-1  text-sm font-semibold transition-colors duration-500 hover:text-orange hover:bg-black-2"
          onClick={() => scrollToSection("experiences")}
        >
          Experiência
        </a>
        <a
          className="w-full py-2 pl-4 text-white-1  text-sm font-semibold transition-colors duration-500 hover:text-orange hover:bg-black-2"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </a>
        <a
          className="w-full py-3 pl-4 text-white-1  text-sm font-semibold transition-colors duration-500 hover:text-orange hover:bg-black-2"
          onClick={() => scrollToSection("projects")}
        >
          Projetos
        </a>
      </div>
    </motion.nav>
  );
};

export default SideMenu;
