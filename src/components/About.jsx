const About = () => {
  return (
    <section className="flex items-center justify-center px-4 py-12">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-xl rounded-2xl p-8 max-w-6xl text-center text-white">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hi, I'm <span className="font-semibold">A P Prajwal</span> — a
          full-stack developer with a strong passion for building real-world
          products that solve meaningful problems.
          <br />
          <br />I believe great products come from combining{" "}
          <span className="italic">code</span> with
          <span className="italic"> creativity</span>, and I’m always excited to
          learn new tools, improve my skills, and collaborate on impactful
          projects.
        </p>
      </div>
    </section>
  );
};

export default About;
