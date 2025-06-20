import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import profilePic from "../assets/images/ProfilePic.jpg";

const Hero = () => {
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
        <h1 className="text-4xl md:text-6xl font-semibold mb-6">A P Prajwal</h1>

        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-2xl mb-4">
          <a
            href="https://www.linkedin.com/in/apprajwal03/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/apprajwal/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
            title="LeetCode"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://x.com/a_p_prajwal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
            title="Twitter / X"
          >
            <FaXTwitter />
          </a>
          <a
            href="tel:+919353015330"
            className="hover:text-gray-300 transition"
            title="Call"
          >
            <FaPhoneAlt />
          </a>
          <a
            href="mailto:apprajwalwork@gmail.com"
            className="hover:text-gray-300 transition"
            title="Email"
          >
            <MdEmail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
