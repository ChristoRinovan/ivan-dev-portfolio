type AboutCardProps = {
  number: string;
  title: string;
  description: string;
};

function AboutCard(props: AboutCardProps) {
  return (
    <div
      key={props.number}
      className="group  rounded-2xl border border-white/10  p-6 transition-all duration-500 hover:border-emas/40 hover:bg-white/10"
    >
      <div className="flex gap-5">
        <span className="font-headliner text-4xl font-light text-emas">
          {props.number}
        </span>

        <div>
          <h3 className="font-headliner text-lg font-bold tracking-wide text-white">
            {props.title}
          </h3>

          <p className="mt-2 font-par text-sm leading-relaxed text-white/70">
            {props.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
