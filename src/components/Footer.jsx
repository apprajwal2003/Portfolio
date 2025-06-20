const Footer = () => {
  return (
    <footer className="flex justify-around items-center font-black py-6 mt-10 border-t border-gray-700 dark:border-gray-600 text-black dark:text-white">
      <p>&copy; {new Date().getFullYear()} A P Prajwal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
