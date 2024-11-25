import { useState, useEffect } from "react";
import Head from "next/head";
import { PacmanLoader } from "react-spinners";
import AboutMe from "@/components/AboutMe";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import aboutApi from "@/services/aboutApi";
import experiencesApi from "@/services/experiencesApi";
import projectsApi from "@/services/projectsApi";
import { About as AboutTypes } from "@/types/about";
import { Experiences as ExperiencesTypes } from "@/types/experiences";
import { Projects as ProjectsTypes } from "@/types/projects";
import { GetStaticProps } from "next";

interface HomeProps {
  projectsData: ProjectsTypes[];
  experiencesData: ExperiencesTypes[];
  aboutData: AboutTypes[];
}

const Home = ({ projectsData, experiencesData, aboutData }: HomeProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PacmanLoader color="#eb4432" loading={isLoading} size={20} />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Portfólio | João Lucas</title>
      </Head>

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="flex justify-center items-center mx-8 mt-28 mb-12 flex-col gap-12 sm:gap-20">
        <AboutMe aboutMe={aboutData} />
        <Experiences experiences={experiencesData} />
        <Skills />
        <Projects projects={projectsData} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [projectsData, experiencesData, aboutData] = await Promise.all([
      projectsApi(),
      experiencesApi(),
      aboutApi(),
    ]);

    return {
      props: {
        projectsData,
        experiencesData,
        aboutData,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    return {
      notFound: true,
    };
  }
};

export default Home;
