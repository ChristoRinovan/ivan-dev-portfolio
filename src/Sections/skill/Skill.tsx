import SectionHeader from "../SectionHeader";
import { skills } from "./SkillData";
import SkillCard from "./SkillCard";

function Skill() {
  return (
    <section
      id="skill"
      className="w-full bg-black py-20 text-white scroll-mt-0 lg:py-20"
    >
      <div className="container mx-auto px-5 lg:px-20">
        <SectionHeader
          section="Skills"
          title="Technologies I use to build"
          description="A collection of tools and technologies I use to design, develop, test, and deploy digital products."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillCard
              key={skill.id}
              id={skill.id}
              iconCard={skill.iconCard}
              title={skill.title}
              description={skill.description}
              iconGrid={skill.iconGrid}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skill;