const About = () => {
  return (
    <section className="flex items-center justify-center mt-10 px-6 py-8">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 max-w-6xl text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">ABOUT ME</h2>
        <div className="text-xs md:text-lg leading-relaxed text-justify">
          <p className="indent-6">
            Hi, I'm <span className="font-semibold">A P Prajwal</span> — a
            full-stack developer tinkering around my beloved laptop driven by a
            passion for building intuitive and impactful digital products.
          </p>
          <p className="indent-6">
            I specialize in crafting scalable, performant web applications. From
            seamless front-end interfaces to robust backend architectures, I
            enjoy translating ideas into working solutions that solve real-world
            problems.
          </p>
          <p className="indent-6">
            Outside of coding, I believe in clean design, clear communication,
            and collaboration that brings out the best product
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
