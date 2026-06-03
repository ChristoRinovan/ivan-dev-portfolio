type SectionHeaderProps = {
  section: string;
  title: string;
  description?: string;
};

function SectionHeader({ section, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-10 lg:mb-10">
      <p className="font-headliner text-emas text-sm tracking-section uppercase">
        {section}
      </p>

      <h2 className="mt-3 font-headliner text-3xl lg:text-5xl font-bold tracking-wide text-white">
        {title}
        <span className="text-emas">.</span>
      </h2>

      {description && (
        <p className="mt-4 max-w-2xl font-par text-sm lg:text-base leading-relaxed text-white/70">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;