const SideMenu = () => {
  return (
    <div className="w-full bg-black-1 flex flex-col fixed top-16 left-0">
      <div className="flex flex-col gap-2">
        <a
          className="w-full py-2 pl-4 text-white font-title text-sm font-semibold hover:text-orange hover:bg-black-2 active:text-orange active:bg-black-2"
          href="#"
        >
          Projetos
        </a>
        <a
          className="w-full py-2 pl-4 text-white font-title text-sm font-semibold hover:text-orange hover:bg-black-2 active:text-orange active:bg-black-2"
          href="#"
        >
          Skills
        </a>
        <a
          className="w-full py-2 pl-4 text-white font-title text-sm font-semibold hover:text-orange hover:bg-black-2 active:text-orange active:bg-black-2"
          href="#"
        >
          Contato
        </a>
      </div>
    </div>
  );
};

export default SideMenu;
