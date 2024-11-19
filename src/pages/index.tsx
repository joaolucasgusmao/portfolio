import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import projects from "@/data/projects";
import { Projects as ProjectsTypes } from "@/types/projects";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

interface HomeProps {
  projectsData: ProjectsTypes[];
}

const Home = ({ projectsData }: HomeProps) => {
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
        <Projects projects={projectsData} />
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const projectsData = projects;

  return {
    props: {
      projectsData,
    },
  };
};

export default Home;
