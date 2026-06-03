import SectionHeader from "./SectionHeader";
import { FaTelegramPlane } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-black py-20 text-white scroll-mt-0 lg:py-20"
    >
      <div className="container mx-auto px-8 gap-5 lg:px-20 bg-black flex flex-col lg:flex-row  lg:justify-between">
        <div className="flex w-full flex-col gap-6 lg:w-1/2 items-center lg:justify-center">
          <SectionHeader
            section="Contact"
            title="Get in touch with Me"
            description="I'm open to new opportunities, collaborations, and exciting projects. Let's build something great together!"
          />

          <a
            href="mailto:hello@ivan.dev"
            className="btn bg-emas border-black w-fit flex items-center gap-2 cursor-pointer"
          >
            <MdOutlineEmail className="text-xl" />
            <h2 className="m-0 text-lg font-headliner italic">
              hello@ivan.dev
            </h2>
          </a>

          <div className="flex flex-col gap-3">
            <div className="text-emas font-headliner font-bold tracking-widest">
              FIND ME ON
            </div>

            <div className="text-5xl flex gap-5 text-emas">
              <a href="https://www.instagram.com/christo.rinovan/">
                <IoLogoInstagram />
              </a>

              <a href="https://github.com/ChristoRinovan">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        <div className="card bg-black/15 border border-emas w-full max-w-sm shrink-0 shadow-2xl text-white font-nunito">
          <div className="card-body">
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-white shadow-md">
                Your name (optional)
              </legend>
              <input
                type="text"
                className="input bg-white/20 "
                placeholder="Type here"
              />
              <label className="label text-white">Email</label>
              <div>
                <label className="input validator bg-white/20 text-white">
                  <svg
                    className="h-[1em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email..."
                    required
                  />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
              </div>
              <div>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend text-white">
                    Your Message
                  </legend>
                  <textarea
                    className="textarea text-white bg-white/20"
                    placeholder="Write your message here..."
                  ></textarea>
                </fieldset>
              </div>

              <button className="btn bg-emas mt-4">
                <FaTelegramPlane />
                Send!
              </button>
            </fieldset>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
