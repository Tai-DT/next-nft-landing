'use client';

import { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      className="fixed right-[40px] bottom-[40px] z-50 flex flex-col items-center gap-[2px] transition-opacity hover:opacity-80"
      aria-label="Scroll to top"
    >
      {/* Character Avatar - Using placeholder styled div */}
      {/* To use actual avatar: Export the character from Figma and place in /public/avatar-character.png */}
      <div className="relative w-[65px] h-[65px] rounded-full overflow-hidden bg-gradient-to-br from-[#addbff] to-[#7dd3ff] shadow-lg flex items-center justify-center">
        <span className="text-[28px]">🐱</span>
      </div>
      
      {/* TOP↑ Text */}
      <p className="font-mplus font-medium text-[13px] text-[#3abef9] tracking-[0.13px] leading-[1.4]">
        TOP↑
      </p>
    </button>
  );
}
