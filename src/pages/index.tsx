import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";
import { useState } from "react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex justify-center items-center m-8">
        <AboutMe isMenuOpen={isMenuOpen} />
      </main>
    </>
  );
};

export default Home;
