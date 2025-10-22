'use client';

export default function DotPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      width="200"
      height="200"
      viewBox="0 0 200 200"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="dotPattern"
          x="0"
          y="0"
          width="200"
          height="200"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="100" cy="100" r="4" fill="#050C9C" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotPattern)" />
    </svg>
  );
}
