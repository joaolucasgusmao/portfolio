import experiences from "@/data/experiences";

const Experiences = () => {
  return (
    <section>
      <h1>Experiência</h1>
      {experiences.map((experience) => {
        return (
          <div>
            <div>
              <h2>{experience.role}</h2>
              <h3>
                {experience.company} | {experience.period}
              </h3>
            </div>
            <p>{experience.responsibilities}</p>
            <div>
              <span>{experience.techs.join(", ")}</span>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Experiences;
