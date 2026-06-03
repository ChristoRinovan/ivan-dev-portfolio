import SectionHeader from "../SectionHeader";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "./TestimonialData";

function Testimonials() {
  return (
    <section
      id="skill"
      className="w-full bg-black py-20 text-white scroll-mt-0 lg:py-20"
    >
      <div className="container mx-auto px-5 lg:px-20">
        <SectionHeader
          section="Testimonials"
          title="Words from those I collab with"
          description="Insights and feedback from professionals who have collaborated with me on various projects and initiatives."
        />

        <div className="mt-12 flex flex-col items-center gap-8 lg:flex-row lg:justify-center">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              img={testimonial.img}
              alt={testimonial.alt}
              position={testimonial.position}
              company={testimonial.company}
              message={testimonial.message}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
