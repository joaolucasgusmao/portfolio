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

  return (
    <header className="w-full h-16 bg-black-1 flex justify-between items-center px-6 border-b-2 border-gray-1">
      <Image src={"/logo.png"} alt="Logo do site" width={60} height={60} />
      <div className="hidden sm:flex sm:gap-4 ">
        <a className="text-orange font-title text-base font-semibold" href="#">
          Projetos
        </a>
        <a className="text-orange font-title text-base font-semibold" href="#">
          Tec's
        </a>
        <a className="text-orange font-title text-base font-semibold" href="#">
          Contato
        </a>
      </div>
      <button onClick={toggleMenu} className="sm:hidden">
        <Image
          src={"/hamburguer.svg"}
          alt="Menu hamburguer"
          width={25}
          height={25}
        />
      </button>

      {isMenuOpen && <SideMenu closeMenu={() => setIsMenuOpen(false)} />}
    </header>
  );
};

export default Header;
