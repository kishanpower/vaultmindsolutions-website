import { useEffect, useState } from "react";
import type { Theme } from "../types/theme";

const STORAGE_KEY = "vaultmind-theme";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem(STORAGE_KEY) as Theme) || "system";
  });

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = () => {
      const systemDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const isDark =
        theme === "dark" ||
        (theme === "system" && systemDark);

      root.classList.toggle("dark", isDark);
    };

    applyTheme();

    localStorage.setItem(STORAGE_KEY, theme);

    const media = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    media.addEventListener("change", applyTheme);

    return () => {
      media.removeEventListener("change", applyTheme);
    };
  }, [theme]);

  return {
    theme,
    setTheme,
  };
}
