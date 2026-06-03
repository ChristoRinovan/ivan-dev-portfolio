import type { IconType } from "react-icons";

type SkillCardProps = {
  id: number;
  iconCard: IconType;
  title: string;
  description: string;
  iconGrid: {
    icon: IconType;
    name: string;
  }[];
};

function SkillCard(props: SkillCardProps) {
  const IconCard = props.iconCard;
  return (
    <div
      key={props.id}
      className="bg-white/10 p-5 rounded-md flex  flex-col gap-4"
    >
      <div className="flex  items-center gap-2 text-xl font-bold text-white">
        <div>{<IconCard />}</div>
        <h2>{props.title}</h2>
      </div>
      <p className="text-white">{props.description}</p>
      <div className="text-emas grid grid-cols-2 sm:grid-cols-3 place-items-center gap-3">
        {props.iconGrid.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              className="group  flex flex-col  items-center justify-center w-full h-20 sm:h-24 hover:scale-110 hover:bg-emas hover:text-black rounded-2xl transition-all duration-500 border border-emas/20 p-2"
            >
              <Icon size={25} />
              <p className="opacity-0 group-hover:opacity-100 text-black truncate max-w-full text-xs sm:text-sm">
                {item.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;
