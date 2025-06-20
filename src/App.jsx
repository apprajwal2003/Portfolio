import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <div className="min-h-screen transition-colors duration-500 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-gray-900 dark:to-gray-800 text-white dark:text-gray-100 font-mono">
      <ThemeToggle />
      <main className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 py-10 space-y-20">
        {/* Portfolio Sections */}
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
