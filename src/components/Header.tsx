import Image from "next/image";
import SideMenu from "./SideMenu";

const Header = ({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const clearHash = () => {
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    clearHash();
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full h-16 bg-black-1 flex justify-between items-center px-6 border-b-2 border-gray-2 z-10 md:px-24">
      <Image
        onClick={scrollToTop}
        src={"https://i.ibb.co/KDHxGMt/logo.png"}
        alt="Logo do site"
        width={60}
        height={60}
        className="cursor-pointer"
      />
      <nav className="hidden sm:flex sm:gap-4 ">
        <a
          className="text-orange  text-lg font-semibold cursor-pointer"
          target="_blank"
          href="https://drive.google.com/file/d/1XROfeO8C1INqBK7HPyYWWJj8m7-6ZcfT/view?usp=drive_link"
        >
          Meu CV
        </a>
        <a
          className="text-orange  text-lg font-semibold cursor-pointer"
          onClick={() => scrollToSection("experiences")}
        >
          Experiência
        </a>
        <a
          className="text-orange  text-lg font-semibold cursor-pointer"
          onClick={() => scrollToSection("education")}
        >
          Formação
        </a>
        <a
          className="text-orange  text-lg font-semibold cursor-pointer"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </a>
        <a
          className="text-orange  text-lg font-semibold cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          Projetos
        </a>
      </nav>
      <button onClick={toggleMenu} className="sm:hidden">
        <Image
          src={"/hamburguer.svg"}
          alt="Menu hamburguer"
          width={25}
          height={25}
        />
      </button>

      {isMenuOpen && <SideMenu setIsMenuOpen={toggleMenu} />}
    </header>
  );
};

export default Header;
