import React from 'react';

interface GirihDividerProps {
  compact?: boolean;
}

export const GirihDivider: React.FC<GirihDividerProps> = ({ compact = false }) => {
  return (
    <div
      className={`flex items-center justify-center gap-4 ${compact ? 'my-3' : 'my-6'}`}
      aria-hidden="true"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C5A059]/45 to-[#C5A059]/60" />
      <svg
        width={compact ? '22' : '28'}
        height={compact ? '22' : '28'}
        viewBox="0 0 32 32"
        fill="none"
        className="text-[#C5A059] shrink-0"
      >
        <path
          d="M16 2L19.8 12.2L30 16L19.8 19.8L16 30L12.2 19.8L2 16L12.2 12.2L16 2Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="#FBF9F4"
        />
        <rect
          x="9.5"
          y="9.5"
          width="13"
          height="13"
          transform="rotate(45 16 16)"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.7"
        />
        <circle cx="16" cy="16" r="2.2" fill="#134E3C" />
      </svg>
      <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C5A059]/45 to-[#C5A059]/60" />
    </div>
  );
};
