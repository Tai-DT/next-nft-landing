'use client';

interface DotPatternProps {
  className?: string;
}

export default function DotPattern({ className = '' }: DotPatternProps) {
  return (
    <div className={`absolute left-[-80px] top-[800px] flex flex-col justify-center items-center ${className}`}>
      {Array.from({ length: 25 }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex justify-start items-center">
          {Array.from({ length: 8 }).map((_, colIndex) => (
            <img
              key={colIndex}
              className="w-[200px] h-[200px] relative"
              src="https://placehold.co/200x200"
              alt=""
            />
          ))}
        </div>
      ))}
    </div>
  );
}