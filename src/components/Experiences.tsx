import experiences from "@/data/experiences";

const Experiences = () => {
  return (
    <section className="flex flex-col gap-4 mt-4">
      <h1 className="text-center text-white font-bold text-2xl">Experiência</h1>
      <div className="flex flex-col gap-8 items-center">
        {experiences.map((experience) => {
          return (
            <div key={experience.id} className="bg-black-2 flex flex-col gap-3 pb-2">
              <div className="flex px-4 justify-between gap-1">
                <h2 className="text-orange font-semibold text-base mt-2 ">
                  {experience.role}
                </h2>
                <div className="flex flex-row mt-2 items-center gap-1">
                  <a
                    className="text-white text-sm font-bold cursor-pointer transition-colors duration-500 hover:text-orange"
                    target="_blank"
                    href={experience.link}
                  >
                    {experience.company}
                  </a>
                  <span className="text-white text-sm font-medium">|</span>
                  <span className="text-white text-sm font-medium">
                    {experience.period}
                  </span>
                </div>
              </div>
              <p className="text-white text-sm text-left mx-4 font-medium">
                {experience.responsibilities}
              </p>
              <div className="flex flex-col gap-2 mx-4 mb-2 border-t-2 border-gray-700">
                <span></span>
                <span className="text-sm text-left font-medium text-gray-100">
                  {experience.techs.join(", ")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
