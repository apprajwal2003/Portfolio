import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
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
    <div className="min-h-screen animated-gradient text-white font-mono tracking-tighter">
      <ThemeToggle />
      <main className="max-w-7xl mx-auto px-4 sm:px-0 md:px-12 py-10 ">
        {/* Portfolio Sections */}
        <Hero scrollToContact={scrollToContact} />
        <About />
        <Skills />
        <Projects />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
