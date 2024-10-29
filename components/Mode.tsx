"use client";

import React from "react";
import { CiLight, CiDark } from "react-icons/ci";
import { useTheme } from "@/context/ThemeProvider";

const Mode: React.FC = () => {
  const { isLightMode, toggleTheme } = useTheme();

  return (
    <div
      role='switch'
      aria-checked={isLightMode}
      aria-label='Toggle light and dark mode'
      tabIndex={0}
      className='bg-secondary-200 dark:bg-[#4B6BFB] rounded-full w-12 h-7 flex items-center relative cursor-pointer'
      onClick={toggleTheme}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "D" || e.key === "L" || e.key === "d" || e.key === "l") {
          toggleTheme();
        }
      }}>
      <div
        className={`w-5 h-5 flex mx-1 items-center bg-white  justify-center rounded-full transform transition-transform duration-300 ${
          isLightMode ? "translate-x-0" : "translate-x-6"
        }`}>
        {isLightMode ? <CiLight /> : <CiDark />}
      </div>
    </div>
  );
};

export default Mode;
