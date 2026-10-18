// src/components/ToggleTheme.jsx

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ToggleTheme() {
  // Get saved preference from localStorage
  // If nothing is saved, start with light mode
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  // Apply the theme to the <html> element
  // and save the preference
  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Toggle light ↔ dark
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-full p-2 transition hover:bg-gray-200 dark:hover:bg-gray-700 "
    >
      {isDark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}
