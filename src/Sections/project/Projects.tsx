import SectionHeader from "../SectionHeader";
import ProjectsCard from "./ProjectsCard";
import { projects } from "./ProjectsData";

function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-black py-20 text-white scroll-mt-0 lg:py-15"
    >
      <div className="container mx-auto px-5 lg:px-20">
        <SectionHeader section="Projects" title="Selected works I have built" />

        <div className="space-y-4 lg:space-y-5">
          {projects.map((project) => (
            <ProjectsCard
              key={project.id}
              imgMobile={project.imgMobile}
              alt={project.alt}
              name={project.name}
              description={project.description}
              situation={project.situation}
              task={project.task}
              action={project.action}
              result={project.result}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
