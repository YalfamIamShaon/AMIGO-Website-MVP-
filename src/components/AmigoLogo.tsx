import React from "react";

interface AmigoLogoProps {
  className?: string;
  size?: number;
  textColor?: string;
  showText?: boolean;
}

export const AmigoLogo: React.FC<AmigoLogoProps> = ({
  className = "",
  size = 42,
  textColor = "text-neutral-900",
  showText = true,
}) => {
  // Maintaining aspect ratio of 830:380
  const height = size;
  const width = size * (830 / 380);

  return (
    <div className={`relative shrink-0 ${className}`} style={{ width, height }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 830 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="amigo-gradient" x1="0%" y1="0%" x2="100%" y2="100%" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF5E1A" />
            <stop offset="50%" stopColor="#FF3B30" />
            <stop offset="100%" stopColor="#FF00D4" />
          </linearGradient>
        </defs>

        {/* Solid white background inside the capsule to make it pop on dark/light sections */}
        <path
          d="M 140,70 H 690 A 120,120 0 0 1 810,190 A 120,120 0 0 1 690,310 C 660,310 650,310 640,310 C 615,310 600,355 530,355 C 460,355 435,310 390,310 H 140 A 120,120 0 0 1 20,190 A 120,120 0 0 1 140,70 Z"
          fill="#FFFFFF"
        />

        {/* Gradient Border Capsule */}
        <path
          d="M 140,70 H 690 A 120,120 0 0 1 810,190 A 120,120 0 0 1 690,310 C 660,310 650,310 640,310 C 615,310 600,355 530,355 C 460,355 435,310 390,310 H 140 A 120,120 0 0 1 20,190 A 120,120 0 0 1 140,70 Z"
          stroke="url(#amigo-gradient)"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* CUSTOM VECTOR LETTERS FOR "amıgo" (with dotless i, perfectly matching brand) */}
        <g fill="url(#amigo-gradient)">
          {/* letter 'a' */}
          <path
            fillRule="evenodd"
            d="M 215,145 A 50,50 0 1 0 215,245 A 50,50 0 1 0 215,145 Z M 215,172 A 23,23 0 1 1 215,218 A 23,23 0 1 1 215,172 Z"
          />
          <rect x="242" y="145" width="23" height="100" rx="10" />

          {/* letter 'm' (Arch 1 & Arch 2) */}
          <path
            d="M 290,145 A 35,35 0 0 1 360,145 V 245 H 337 V 145 A 12,12 0 0 0 313,145 V 245 H 290 Z"
          />
          <path
            d="M 337,145 A 35,35 0 0 1 407,145 V 245 H 384 V 145 A 12,12 0 0 0 360,145 V 245 H 337 Z"
          />

          {/* letter 'ı' (dotless i) */}
          <rect x="435" y="145" width="23" height="100" rx="6" />

          {/* letter 'g' (bowl & hook tail) */}
          <path
            fillRule="evenodd"
            d="M 520,145 A 45,45 0 1 0 520,235 A 45,45 0 1 0 520,145 Z M 520,168 A 22,22 0 1 1 520,212 A 22,22 0 1 1 520,168 Z"
          />
          <path
            d="M 542,145 V 230 C 542,265 520,285 480,285 C 460,285 450,275 450,262 C 450,249 460,242 470,242 C 480,242 487,247 490,252 C 500,252 519,245 519,220 V 145 H 542 Z"
          />

          {/* letter 'o' */}
          <path
            fillRule="evenodd"
            d="M 620,140 A 48,48 0 1 0 620,236 A 48,48 0 1 0 620,140 Z M 620,165 A 23,23 0 1 1 620,211 A 23,23 0 1 1 620,165 Z"
          />
        </g>
      </svg>
    </div>
  );
};
