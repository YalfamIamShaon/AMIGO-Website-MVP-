import React from "react";

interface AmigoLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
  textColor?: string;
}

export const AmigoLogo: React.FC<AmigoLogoProps> = ({
  className = "",
  size = 40,
  showText = false,
  textColor = "text-neutral-900"
}) => {
  return (
    <div className={`flex items-center space-x-2.5 ${className}`}>
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Main outer red map pin forming the letter "a" */}
          <path
            d="M72 16C48.8 16 30 34.8 30 58C30 70.33 35.34 81.4 43.86 89.04L28.24 104.66C25.12 107.78 25.12 112.84 28.24 115.96C31.36 119.08 36.42 119.08 39.54 115.96L55.16 100.34C60.32 102.68 66 104 72 104C95.2 104 114 85.2 114 62C114 45.05 103.95 30.43 89.43 23.88L89.43 16C89.43 16 89.43 16 89.43 16H72ZM72 30C87.46 30 100 42.54 100 58C100 73.46 87.46 86 72 86C56.54 86 44 73.46 44 58C44 42.54 56.54 30 72 30Z"
            fill="#ae0000"
            fillRule="evenodd"
            clipRule="evenodd"
          />
          {/* Center clock target emblem */}
          <circle cx="72" cy="58" r="17" fill="#ae0000" />
          <circle cx="72" cy="58" r="11" fill="#ffffff" />
          {/* Clock Hands indicating 3:00 / target alignment of direct delivery */}
          <path
            d="M72 58H80C80 53.58 76.42 50 72 50V58Z"
            fill="#ae0000"
          />
        </svg>
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-sans font-black text-xl tracking-tight leading-none ${textColor}`}>
            AMIGO
          </span>
          <span className="text-[9px] font-mono font-bold text-green-700 tracking-wider uppercase mt-0.5">
            0% Commission App
          </span>
        </div>
      )}
    </div>
  );
};
