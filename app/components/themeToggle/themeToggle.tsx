"use client";

import { useDarkMode } from '@/app/context/themeContext';
import { FiSun, FiMoon } from 'react-icons/fi';

export const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle dark mode"
    >
      {isDarkMode ? (
        <FiSun className="w-6 h-6 text-yellow-400" />
      ) : (
        <FiMoon className="w-6 h-6 text-gray-800" />
      )}
    </button>
  );
};