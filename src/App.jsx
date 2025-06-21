import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import { useRef } from "react";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-r from-blue-700 to-purple-700 dark:from-black dark:to-black text-white dark:text-gray-100 font-mono tracking-tighter">
      <ThemeToggle />
      <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-10 space-y-20">
        {/* Portfolio Sections */}
        <Hero scrollToContact={scrollToContact} />
        <About />
        <Projects />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
