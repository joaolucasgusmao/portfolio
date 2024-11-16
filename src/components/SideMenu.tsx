import Image from "next/image";

interface SideMenuProps {
  closeMenu: () => void;
}

const SideMenu = ({ closeMenu }: SideMenuProps) => {
  return (
    <div className="w-full h-full bg-black-1 flex flex-col fixed top-0 left-0">
      <div className="w-full flex items-center justify-between px-4 bg-black-1">
        <div className="flex-shrink-0">
          <Image
            src={"/logo.png"}
            alt="Logo do site"
            width={60}
            height={60}
            className="object-contain"
          />
        </div>

        <button
          onClick={closeMenu}
          className="text-orange font-bold text-title text-base bg-black-2 px-2 rounded-sm"
        >
          X
        </button>
      </div>

      <div className="flex flex-col items-start p-4 space-y-4">
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
    </div>
  );
};

export default SideMenu;
