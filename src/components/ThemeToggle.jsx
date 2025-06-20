import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme &&
        window.matchMedia("(prefers-color-scheme: light)").matches)
    );
  });

  const toggleDarkMode = () => setIsDarkMode((prevMode) => !prevMode);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed top-4 right-4 z-50 w-16 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center px-1 transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      <div
        className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          isDarkMode ? "translate-x-8" : "translate-x-0"
        }`}
      >
        {isDarkMode ? (
          // Moon Icon (outline)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
            />
          </svg>
        ) : (
          // Sun Icon (solid)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-yellow-500"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4a1 1 0 0 1 1-1V2a1 1 0 1 0-2 0v1a1 1 0 0 1 1 1Zm5.657 2.343a1 1 0 0 1 1.414 0l.707-.707a1 1 0 1 0-1.414-1.414l-.707.707a1 1 0 0 1 0 1.414ZM20 11a1 1 0 1 1 0 2h1a1 1 0 1 0 0-2h-1Zm-1.929 6.071a1 1 0 0 1 0 1.414l.707.707a1 1 0 0 0 1.414-1.414l-.707-.707a1 1 0 0 1-1.414 0ZM13 20a1 1 0 1 1-2 0v1a1 1 0 1 0 2 0v-1Zm-6.071-1.929a1 1 0 0 1-1.414 0l-.707.707a1 1 0 1 0 1.414 1.414l.707-.707a1 1 0 0 1 0-1.414ZM4 13a1 1 0 1 1 0-2H3a1 1 0 1 0 0 2h1Zm1.929-6.071a1 1 0 0 1 0-1.414l-.707-.707a1 1 0 1 0-1.414 1.414l.707.707a1 1 0 0 1 1.414 0ZM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
          </svg>
        )}
      </div>
    </button>
  );
}
