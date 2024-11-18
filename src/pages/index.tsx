import AboutMe from "@/components/AboutMe";
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
        <title>Portfólo</title>
      </Head>

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex justify-center items-center m-8 mt-32 flex-col gap-4">
        <AboutMe />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default Home;
