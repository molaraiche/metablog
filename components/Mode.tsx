"use client";

import React, { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const Mode = () => {
  const [isLightMode, setIsLightMode] = useState(false);
  const modeHandler = (e: React.MouseEvent | React.KeyboardEvent) => {
    e.preventDefault();
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <div
      role='switch'
      aria-checked={isLightMode}
      aria-label='Toggle light and dark mode'
      tabIndex={0}
      className='bg-secondary-200 rounded-full w-12 h-7 flex items-center relative cursor-pointer'
      onClick={modeHandler}
      onKeyDown={(e: React.KeyboardEvent) => {
        if (e.key === "D" || e.key === "L" || e.key === "d" || e.key === "l") {
          modeHandler(e);
        }
      }}>
      <div
        className={`w-5 h-5 flex mx-1 items-center bg-white justify-center rounded-full transform transition-transform duration-300 ${
          isLightMode ? "translate-x-0" : "translate-x-6"
        }`}>
        {isLightMode ? <CiLight /> : <CiDark />}
      </div>
    </div>
  );
};

export default Mode;
