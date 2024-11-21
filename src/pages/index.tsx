import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import aboutMe from "@/data/aboutMe";
import experiences from "@/data/experiences";
import projects from "@/data/projects";
import { AboutMe as AboutMeTypes } from "@/types/aboutMe";
import { Experiences as ExperiencesTypes } from "@/types/experiences";
import { Projects as ProjectsTypes } from "@/types/projects";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { useState } from "react";

interface HomeProps {
  projectsData: ProjectsTypes[];
  experiencesData: ExperiencesTypes[];
  aboutMeData: AboutMeTypes[];
}

const Home = ({ projectsData, experiencesData, aboutMeData }: HomeProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Portfólio | João Lucas</title>
      </Head>

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex justify-center items-center mx-8 mt-28 mb-12 flex-col gap-4">
        <AboutMe aboutMe={aboutMeData} />
        <Experiences experiences={experiencesData} />
        <Skills />
        <Projects projects={projectsData} />
      </main>
      <Footer />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const projectsData = projects;
  const experiencesData = experiences;
  const aboutMeData = aboutMe;

  return {
    props: {
      projectsData,
      experiencesData,
      aboutMeData,
    },
  };
};

export default Home;
