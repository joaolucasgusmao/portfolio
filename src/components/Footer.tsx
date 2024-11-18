import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="w-full h-14 bg-black-1 flex justify-between items-center px-6 border-t-2 border-gray-1">
      <p className="text-sm text-white font-medium">
        Feito com ♥︎{" "}
        <a
          target="_blank"
          href="https://github.com/joaolucasgusmao"
          className="text-xs text-white font-extrabold cursor-pointer"
        >
          by: joaolucas
        </a>
      </p>
      <div className="flex gap-2">
        <a target="_blank" href="https://www.linkedin.com/in/joaoolucasgusmao/">
          <FaLinkedin className="text-white text-xl cursor-pointer transition-colors duration-500 hover:text-orange" />
        </a>
        <a target="_blank" href="https://github.com/joaolucasgusmao">
          <FaGithub className="text-white text-xl transition-colors duration-500 hover:text-orange" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
