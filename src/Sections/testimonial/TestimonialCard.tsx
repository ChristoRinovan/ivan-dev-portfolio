type TestimonialCardProps = {
  name: string;
  alt: string;
  img: string;
  position: string;
  company: string;
  message: string;
};

function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="card w-80 bg-white/5 border border-emas/40 shadow-xl rounded-3xl overflow-hidden transition-all duration-500 hover:scale-110 hover:bg-white/10 hover:border-emas">
      <figure className="h-64 overflow-hidden">
        <img
          src={props.img}
          alt={props.alt}
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title font-headliner text-2xl tracking-widest text-emas">
          {props.name}
        </h2>
        <span className="rounded-full border border-white/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-[2px] text-white text-center">
          Demo
        </span>
        <h3 className="text-sm italic tracking-widest text-white/70">
          {props.position}
          <span className="text-emas/80"> of {props.company}</span>
        </h3>

        <div className=" h-[0.5px] w-full bg-emas/30" />

        <p className="font-par text-sm leading-relaxed tracking-normal text-white/80">
          “{props.message}”
        </p>
      </div>
    </div>
  );
}

export default TestimonialCard;
