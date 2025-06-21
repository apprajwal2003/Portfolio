import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-6 mt-10 border-t border-gray-700 dark:border-gray-600 ">
      <div className="flex flex-wrap justify-center gap-6 text-2xl mb-4">
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

      <div className="text-xs md:text-sm text-center text-gray-200 dark:text-gray-400">
        &copy; {new Date().getFullYear()} A P Prajwal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
