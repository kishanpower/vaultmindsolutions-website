import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type ThemeSwitcherProps = {
  scrolled: boolean;
};

export default function ThemeSwitcher({
  scrolled,
}: ThemeSwitcherProps) {
  const [darkMode, setDarkMode] =
    useState(() => {
      return (
        localStorage.getItem("theme") ===
        "dark"
      );
    });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add(
        "dark"
      );
    } else {
      document.documentElement.classList.remove(
        "dark"
      );
    }
  }, [darkMode]);

  const toggleTheme = () => {
    const next = !darkMode;

    setDarkMode(next);

    localStorage.setItem(
      "theme",
      next ? "dark" : "light"
    );
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

              dark:border-slate-700
              dark:bg-slate-900
              dark:text-slate-200
              dark:hover:border-cyan-400
              dark:hover:text-cyan-400
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
