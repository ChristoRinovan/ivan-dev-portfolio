import { FaCheckCircle } from "react-icons/fa";
import { experience } from "./ExperienceData";

function ExperienceTimeline() {
  return (
    <div className="w-full">
      {/* layar gede yawla */}
      <div className="container mx-auto max-w-6xl px-5 hidden lg:block">
        <ul className="timeline timeline-horizontal w-full">
          {experience.map((item, index) => (
            <li key={item.id} className="flex-1">
              {index !== 0 && <hr />}

              <div className="timeline-start text-emas font-bold">
                {item.period}
              </div>

              <div className="timeline-middle text-emas">
                <FaCheckCircle />
              </div>

              <div className="timeline-end max-w-xs rounded-2xl bg-white/5 p-4 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <h3 className="font-headliner tracking-widest text-[12px] text-emas">
                  {item.title}
                </h3>

                <p className="text-white font-par text-[18px] font-bold">
                  {item.company}
                </p>

                <div className="w-full h-[0.5px] bg-emas mt-1"></div>

                <p className="mt-3 font-nunito text-white/90 italic">
                  {item.responsibility}
                </p>
              </div>

              {index !== experience.length - 1 && <hr />}
            </li>
          ))}
        </ul>
      </div>

      {/* layar kecil, hidden di desktop biar muat :(*/}
      <div className="container mx-auto px-5 lg:hidden">
        <div className="flex flex-col gap-5">
          {experience.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:border-emas/40 hover:bg-white/10"
            >
              <div className="flex gap-5">
                

                <div>
                  <p className="font-par text-sm font-bold text-emas">
                    {item.period}
                  </p>

                  <h3 className="mt-2 font-headliner text-lg font-bold tracking-wide text-white">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-white font-par text-[18px] font-bold">
                    {item.company}
                  </p>

                  <div className="w-full h-[0.5px] bg-emas mt-2"></div>

                  <p className="mt-3 font-nunito text-white/90 italic leading-relaxed">
                    {item.responsibility}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienceTimeline;