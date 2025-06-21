import profilePic from "../assets/images/ProfilePic.jpg";

const Hero = ({ scrollToContact }) => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:py-8 text-white">
      {/* Profile Picture */}
      <div className="flex items-center justify-center">
        <img
          src={profilePic}
          alt="Profile Pic"
          className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left px-4">
        <h1 className="text-2xl md:text-6xl font-semibold mb-4 leading-tight">
          <span>Hello!</span>
          <br />
          <span>I'm A P Prajwal</span>
        </h1>
        <h2 className="text-2xl md:text-4xl font-light mb-6">
          Full Stack Developer
        </h2>

        {/* Contact Button */}
        <div className="flex justify-center md:justify-start">
          <div
            onClick={scrollToContact}
            className="px-4 py-2 border-2 rounded bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <span className="text-transparent bg-clip-text animated-gradient font-extrabold tracking-wider">
              Contact me!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
