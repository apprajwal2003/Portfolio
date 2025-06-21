import profilePic from "../assets/images/ProfilePic.jpg";

const Hero = ({ scrollToContact }) => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-0 px-6 md:py-12 text-white">
      {/* Left: Profile Picture */}
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={profilePic}
          alt="Profile Pic"
          className="max-md:mb-8 w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left px-4">
        <h1 className="text-4xl md:text-7xl font-semibold mb-6">
          Hello!,
          <br /> I'm <br /> A P Prajwal
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-4">
          Full Stack Developer
        </h2>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-2xl mb-4 hover:cursor-pointer hover:text-blue-900 transition-colors duration-300 dark:hover:text-blue-300">
          <div onClick={scrollToContact}>Contact me!</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
