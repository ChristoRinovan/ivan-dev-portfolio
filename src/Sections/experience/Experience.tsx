import SectionHeader from "../SectionHeader";
import ExperienceTimeline from "./ExperienceTimeline";
function Experience() {
  return (
    <section
      id="experience"
      className="w-full overflow-hidden scroll-mt-0 py-20 lg:py-15 bg-black"
    >
      <div className="container mx-auto px-5 lg:px-20">
        <SectionHeader section="Experience" title="My Professional Journey" />
        <div className="w-full h-0.5 bg-emas mt-0"></div>
        <ExperienceTimeline />
      </div>
    </section>
  );
}

export default Experience;
