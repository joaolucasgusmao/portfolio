import Link from "next/link";

const SideMenu = ({
  setIsMenuOpen,
}: {
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <nav className="w-full bg-black-1 flex flex-col fixed top-16 left-0">
      <div className="flex flex-col gap-2">
        <Link
          className="w-full py-2 pl-4 text-white font-title text-sm font-semibold hover:text-orange hover:bg-black-2 active:text-orange active:bg-black-2"
          href="#experiences"
          onClick={() => setIsMenuOpen(false)}
        >
          Experiência
        </Link>
        <Link
          className="w-full py-2 pl-4 text-white font-title text-sm font-semibold hover:text-orange hover:bg-black-2 active:text-orange active:bg-black-2"
          href="#skills"
          onClick={() => setIsMenuOpen(false)}
        >
          Skills
        </Link>
        <Link
          className="w-full py-3 pl-4 text-white font-title text-sm font-semibold hover:text-orange hover:bg-black-2 active:text-orange active:bg-black-2"
          href="#projects"
          onClick={() => setIsMenuOpen(false)}
        >
          Projetos
        </Link>
      </div>
    </nav>
  );
};

export default SideMenu;
