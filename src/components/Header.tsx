import Image from "next/image";
import SideMenu from "./SideMenu";
import Link from "next/link";

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

  return (
    <header className="fixed top-0 w-full h-16 bg-black-1 flex justify-between items-center px-6 border-b-2 border-gray-1 z-10">
      <Image src={"/logo.png"} alt="Logo do site" width={60} height={60} />
      <nav className="hidden sm:flex sm:gap-4 ">
        <Link
          className="text-orange font-title text-base font-semibold"
          href="#experiences"
        >
          Experiência
        </Link>
        <Link
          className="text-orange font-title text-base font-semibold"
          href="#skills"
        >
          Skills
        </Link>
        <Link
          className="text-orange font-title text-base font-semibold"
          href="#projects"
        >
          Projetos
        </Link>
      </nav>
      <button onClick={toggleMenu} className="sm:hidden">
        <Image
          src={"/hamburguer.svg"}
          alt="Menu hamburguer"
          width={25}
          height={25}
        />
      </button>

      {isMenuOpen && <SideMenu />}
    </header>
  );
};

export default Header;
