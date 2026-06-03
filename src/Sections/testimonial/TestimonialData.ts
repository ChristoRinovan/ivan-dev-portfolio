import testi1 from "../../assets/testi1.jpeg";
import testi2 from "../../assets/testi2.jpeg";

type Testimonial = {
  id: number;
  name: string;
  img: string;
  alt: string;
  position: string;
  company: string;
  message: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sundar Pichai",
    img: testi1,
    alt: "Portrait of Sundar Pichai, CEO of Google",
    position: "Chief Executive Officer",
    company: "Google",
    message:
      "Ivan consistently exceeded expectations, delivering scalable solutions while maintaining exceptional code quality and collaboration.",
  },
  {
    id: 2,
    name: "Tim Cook",
    img: testi2,
    alt: "Portrait of Tim Cook, CEO of Apple",
    position: "Chief Executive Officer",
    company: "Apple",
    message:
      "His ability to transform complex requirements into elegant user experiences made him a valuable contributor to every project.",
  },
];