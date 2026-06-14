import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeSwitcherProps = {
  scrolled: boolean;
};

export default function ThemeSwitcher({
  scrolled,
}: ThemeSwitcherProps) {
  const [darkMode, setDarkMode] =
    useState(false);

  useEffect(() => {
    const savedTheme =
      localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add(
        "dark"
      );

      setDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );

      localStorage.setItem(
        "theme",
        "light"
      );
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={`
        flex
        items-center
        gap-2
        rounded-2xl
        px-4
        py-3
        text-sm
        font-medium
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        active:scale-95

        ${
          scrolled
            ? `
              border
              border-slate-200
              bg-white
              text-slate-700
              hover:border-blue-400
              hover:text-blue-600
            `
            : `
              border
              border-white/20
              bg-white/10
              text-white
              backdrop-blur-md
              hover:bg-white/20
              hover:border-white/40
            `
        }
      `}
    >
      {darkMode ? (
        <>
          <Sun size={16} />
          Light
        </>
      ) : (
        <>
          <Moon size={16} />
          Dark
        </>
      )}
    </button>
  );
}
