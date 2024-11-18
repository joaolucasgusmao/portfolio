import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Head from "next/head";
import { useState } from "react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Portfólio | João Lucas</title>
      </Head>

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex justify-center items-center m-8 mt-32 flex-col gap-4">
        <AboutMe />
        <Experiences />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </>
  );
};

export default Home;
