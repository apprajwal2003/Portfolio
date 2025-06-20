import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profilePic from "../assets/images/ProfilePic.jpg";

const Hero = ({ scrollToContact }) => {
  return (
    <section className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-0 px-6 py-12  text-white">
      {/* Left: Profile Picture */}
      <div className="md:w-1/2 flex items-center justify-center">
        <img
          src={profilePic}
          alt="Profile Pic"
          className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Right: Text Content */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left px-4">
        <h1 className="text-4xl md:text-7xl font-semibold mb-6">A P PRAJWAL</h1>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-2xl mb-4">
          <div onClick={scrollToContact}>Connect with me!</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
