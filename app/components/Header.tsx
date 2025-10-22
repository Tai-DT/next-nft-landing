'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
  <header className="fixed top-0 left-0 right-0 z-50 bg-transparent">
      <div className="max-w-[1360px] mx-auto px-10 py-[30px] flex items-center justify-between">
        {/* Logo */}
        <h1 
          className="font-dela text-[#050c9c] text-[32px] font-bold tracking-[0.32px] leading-[1.4]"
        >
          次世代NFT
        </h1>
        
        {/* Menu Button */}
        <button 
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-[20px] text-black relative"
        >
          <span 
            className="font-mplus text-[30px] font-medium tracking-[0.3px] leading-[1.4]"
          >
            Menu
          </span>
          
          {/* Hamburger icon with rotation effect */}
          <div className="relative w-[59px] h-[59px] flex items-center justify-center">
            <div className={`absolute transition-transform duration-300 ${menuOpen ? 'rotate-[135deg]' : 'rotate-[315deg]'}`}>
              {/* Three parallel lines forming hamburger menu */}
              <div className="relative w-[42px] h-[36px]">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-black"></div>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 h-[3px] bg-black"></div>
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black"></div>
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* Dropdown Menu */}
      {menuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-100">
          <ul className="max-w-[1360px] mx-auto px-10 py-6 space-y-4">
            <li>
              <a 
                href="#what-is-nft" 
                className="block text-lg font-medium hover:text-[#050c9c] transition-colors"
              >
                NFTってなんだ？
              </a>
            </li>
            <li>
              <a 
                href="#evolution" 
                className="block text-lg font-medium hover:text-[#050c9c] transition-colors"
              >
                NFTの進化
              </a>
            </li>
            <li>
              <a 
                href="#series" 
                className="block text-lg font-medium hover:text-[#050c9c] transition-colors"
              >
                次世代シリーズ
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className="block text-lg font-medium hover:text-[#050c9c] transition-colors"
              >
                FAQ
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
