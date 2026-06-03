import SectionHeader from "../SectionHeader";
import { abouts } from "./AboutData";
import AboutCard from "./AboutCard";

function About() {
  return (
    <section
      id="about"
      className="w-full bg-black py-20 text-white scroll-mt-0 lg:py-15"
    >
      <div className="container mx-auto px-5 lg:px-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Bagian kiri mas e */}
          <div>
            <SectionHeader
              section="About Me"
              title="A developer who builds with purpose"
            />

            <div className="space-y-5 font-par text-sm leading-relaxed text-white/70 lg:text-base">
              <p className="text-white">
                I'm Ivan, a Fullstack Developer and Machine Learning Engineer
                based in Indonesia.
              </p>

              <p>
                I enjoy building digital products that solve real-world problems
                by combining software engineering with artificial intelligence.
              </p>

              <p>
                My interests span across web development, machine learning, and
                computer vision, where I continuously improve my skills through
                hands-on projects.
              </p>
            </div>
          </div>
          <div>
            <p className="font-headliner text-sm tracking-section text-emas lg:mb-5">
              WHAT I DO
            </p>
            <div className="flex flex-col gap-3">
              {/* bagian kanan */}
              {abouts.map((about) => {
                return (
                  <AboutCard
                    key={about.number}
                    number={about.number}
                    title={about.title}
                    description={about.description}
                  />
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
