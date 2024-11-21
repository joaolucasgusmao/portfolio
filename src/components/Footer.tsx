import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-14 bg-black-1 flex justify-between items-center px-6 border-t-2 border-gray-1">
      <p className="text-sm text-white-1 font-medium sm:text-lg">
        Feito com ♥︎{" "}
        <a
          target="_blank"
          href="https://github.com/joaolucasgusmao"
          className="text-xs text-white-1 font-extrabold cursor-pointer sm:text-base transition-colors duration-500 hover:text-orange"
        >
          by: joaolucas
        </a>
      </p>
      <div className="flex gap-2">
        <a target="_blank" href="https://www.linkedin.com/in/joaoolucasgusmao/">
          <FaLinkedin className="text-white-1 text-xl cursor-pointer transition-colors duration-500 hover:text-orange sm:text-2xl" />
        </a>
        <a target="_blank" href="https://github.com/joaolucasgusmao">
          <FaGithub className="text-white-1 text-xl transition-colors duration-500 hover:text-orange sm:text-2xl" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
