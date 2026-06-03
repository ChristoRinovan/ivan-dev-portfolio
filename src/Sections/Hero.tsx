import Heroimg from "../assets/hero.svg";
function Hero() {
  return (
    <section
      id="home"
      className="bg-black w-full lg:max-h-screen  flex flex-col lg:flex-row text-white  lg:scroll-mt-20 scroll-mt-0"
    >
      {/* Wrapper gede */}
      <div className="w-full min-h-screen flex flex-col lg:flex-row bg-black">
        {" "}
        {/* Gambar */}
        <div className="w-full h-[50vh] lg:w-1/2 lg:h-full lg:order-2 overflow-hidden bg-black">
          {/* lg:h-screen */}
          <img
            src={Heroimg}
            className="w-full h-full  object-cover object-center lg:object-cover lg:object-center overflow-y-hidden"
            alt="Hero"
          ></img>
        </div>
        {/* Wrapper Teks */}
        <div className="w-full h-[50vh] lg:h-full lg:w-1/2  flex items-center gap-4 py-5 px-10 lg:py-10 lg:px-25 flex-col lg:justify-center lg:items-start lg:gap-8 lg:order-1 ">
          {/* Nama Judul */}
          <h1 className="font-headliner font-bold tracking-wide text-white text-4xl lg:text-6xl text-center lg:text-left">
            Fullstack Developer<span className="text-emas">.</span>
          </h1>
          <p className="font-par text-[15px] lg:text-[16px] text-center lg:text-left  px-5  lg:px-0  text-white/80  tracking-wide font-thin">
            {" "}
            I combine code, design, and logic to build seamless digital
            experiences.
          </p>
          {/* CTA */}
          <div className="flex flex-row gap-8 text-[10px] font-navbar font-bold">
            <a href="#projects">
              <button className=" p-4 bg-emas   rounded-2xl hover:bg-[#b5740c] cursor-pointer">
                View Project
              </button>
            </a>
            <a href="#contact">
              <button className="p-4 border rounded-2xl hover:text-black hover:bg-white cursor-pointer">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
