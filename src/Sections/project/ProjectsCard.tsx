type ProjectCardProps = {
  imgMobile: string;
  alt: string;
  name: string;
  description: string;
  situation: string;
  task: string;
  action: string;
  result: string;
};
function ProjectsCard(props: ProjectCardProps) {
  return (
    <div className="bg-black rounded-3xl border border-emas transition-all hover:bg-emas/10">
      <div className="card gap-4 p-5 lg:card-side">
        <div className="w-full grid items-center justify-center  rounded-2xl lg:w-1/3 lg:h-auto lg:aspect-auto ">
          <img
            src={props.imgMobile}
            alt={props.alt}
            className="block w-full lg:w-50 h-full object-cover object-top lg:hover:scale-120 lg:origin-left transition-all duration-500 lg:hover:border-2  rounded-2xl"
          />
        </div>

        <div className="card-body px-0 lg:w-2/3 lg:px-8">
          <h2 className="card-title font-headliner text-3xl lg:text-4xl font-bold tracking-wide text-white">
            {props.name}
          </h2>
          <div className="w-full h-0.5 bg-emas"></div>
          <p>{props.description}</p>
          <p>{props.situation}</p>
          <p>{props.action}</p>
          <p>{props.result}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectsCard;
