import React from "react";
import { useThemeStore } from "../store/useThemeStore";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";

const ThemeSwitchButton = () => {
  const { toggleDarkMode, darkMode } = useThemeStore();

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 right-4 size-12 bg-white dark:bg-slate-900 dark:text-white rounded-full shadow-md flex items-center justify-center"
    >
      {darkMode ? <Moon /> : <Sun />}
    </button>
  );
};

export default ThemeSwitchButton;
