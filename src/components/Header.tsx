import Image from "next/image";
import { useState } from "react";
import SideMenu from "./SideMenu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full h-16 bg-black-1 flex justify-between items-center px-6">
      <Image src={"/logo.png"} alt="Logo do site" width={70} height={40} />
      <div className="hidden sm:flex sm:gap-4 ">
        <a className="text-orange font-title text-base font-semibold" href="#">
          Projetos
        </a>
        <a className="text-orange font-title text-base font-semibold" href="#">
          Tec's
        </a>
        <a className="text-orange font-title text-base font-semibold" href="#">
          Meu CV
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
