import AboutMe from "@/components/AboutMe";
import Header from "@/components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center m-8">
        <AboutMe />
      </main>
    </>
  );
};

export default Home;
