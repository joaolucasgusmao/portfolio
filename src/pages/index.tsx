import { useState, useEffect } from "react";
import Head from "next/head";
import { PulseLoader } from "react-spinners";
import About from "@/components/About";
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
import Education from "@/components/Education";
import educationApi from "@/services/educationApi";
import { Education as EducationTypes } from "@/types/education";

interface HomeProps {
  projectsData: ProjectsTypes[];
  experiencesData: ExperiencesTypes[];
  aboutData: AboutTypes[];
  educationData: EducationTypes[];
}

const Home = ({
  projectsData,
  experiencesData,
  aboutData,
  educationData,
}: HomeProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <PulseLoader color="#eb4432" loading={isLoading} size={10} />
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
        <About about={aboutData} />
        <Experiences experiences={experiencesData} />
        <Education educations={educationData} />
        <Skills />
        <Projects projects={projectsData} />
      </main>
      <Footer />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const [projectsData, experiencesData, educationData, aboutData] =
      await Promise.all([
        projectsApi(),
        experiencesApi(),
        educationApi(),
        aboutApi(),
      ]);

    return {
      props: {
        projectsData,
        experiencesData,
        educationData,
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
