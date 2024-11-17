import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { useState } from "react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex justify-center items-center m-8 flex-col gap-4">
        <AboutMe isMenuOpen={isMenuOpen} />
        <Projects />
      </main>
    </>
  );
};

export default Home;
