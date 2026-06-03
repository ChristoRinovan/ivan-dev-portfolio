import Footer from "./components/Footer";
import Navbar from "./components/Navbar/Navbar";
import About from "./Sections/about/About";
import Contact from "./Sections/Contact";
import Experience from "./Sections/experience/Experience";
import Hero from "./Sections/Hero";
import Projects from "./Sections/project/Projects";
import Skill from "./Sections/skill/Skill";
import Testimonials from "./Sections/testimonial/Testimonials";

function App() {
  return (
    <div className="overflow-x-hidden lg:min-h-dvh lg:w-full ">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Experience/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
