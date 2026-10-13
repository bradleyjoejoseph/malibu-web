"use client";

export default function MalibuLogo({ className = "h-7 w-7", withBorder = true }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 rounded-lg overflow-hidden transition-transform duration-200 group-hover:scale-105 ${
        withBorder ? "border border-black/[0.08] dark:border-white/[0.12] shadow-sm" : ""
      } ${className}`}
      aria-label="Malibu M13 Logo"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {/* Chassis Background (Adapts cleanly to theme) */}
        <rect
          width="100"
          height="100"
          rx="22"
          className="fill-[#1d1d1f] dark:fill-white"
        />

        {/* M13 Emblem (Inverted foreground: white on dark, dark on light) */}
        <g className="fill-white dark:fill-[#1d1d1f]">
          {/* Left Stroke: Sharp Numeral '1' forming left leg of 'M' */}
          <path d="M 20 42 L 36 26 L 36 78 L 26 78 L 26 52 L 20 58 Z" />

          {/* Central Stencil Chevron ('M' Vertex) */}
          <path d="M 42 32 L 52 22 L 62 32 L 52 42 Z" />

          {/* Right Stroke: Angular Numeral '3' molded into right leg of 'M' */}
          <path d="M 58 24 L 78 24 L 78 45 L 67 52 L 78 59 L 78 78 L 52 78 L 42 68 L 50 60 L 68 60 L 68 54 L 56 51 L 68 47 L 68 34 L 56 34 Z" />
        </g>
      </svg>
    </div>
  );
}
