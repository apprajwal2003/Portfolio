const skillImages = import.meta.glob("../assets/skills/*.svg", {
  eager: true,
  import: "default",
});

const formatName = (path) => {
  const name = path.split("/").pop().replace(".svg", "");
  return name.charAt(0).toUpperCase() + name.slice(1).replace("js", "JS");
};

const Skills = () => {
  const logos = Object.entries(skillImages); // [path, url]

  return (
    <section className="overflow-hidden w-full mt-10 md:px-6 md:py-8">
      <h2 className="text-3xl font-bold mb-10 text-center">SKILLS</h2>
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-scroll-loop whitespace-nowrap gap-10 px-6">
          {Array(3)
            .fill(logos)
            .flat()
            .map(([path, url], idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center min-w-[80px]"
              >
                <img
                  src={url}
                  alt={formatName(path)}
                  className={`h-16 w-16 object-contain transition duration-300 ${
                    path.includes("next") ||
                    path.includes("node") ||
                    path.includes("mongo")
                      ? "dark:invert"
                      : ""
                  }`}
                />
                <span className="text-sm mt-2 text-white dark:text-gray-200">
                  {formatName(path)}
                </span>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
