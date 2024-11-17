import skills from "@/data/skills";

const Skills = () => {
  return (
    <section className="w-full flex flex-col items-center gap-6 mt-4">
      <h1 className="text-center text-white font-bold text-2xl">Skills</h1>
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <div className="w-2/4 h-28 bg-black-2 rounded-md flex flex-col justify-center items-center py-4 gap-1">
            <Icon style={{ color: skill.color }} className="text-4xl" />

            <p className="text-lg text-white font-semibold">{skill.name}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
