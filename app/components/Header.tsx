'use client';

export default function Header() {
  return (
    <header className="bg-[#252525] py-[160px] px-[287px] relative w-full">
      <div className="flex items-start gap-[100px] max-w-full">
        {/* Logo */}
        <a href="/#top" className="inline-flex" aria-label="Home - 次世代NFT">
          <h1 className="font-dela text-white text-[52px] font-bold tracking-[1.04px] leading-none">
            次世代NFT
          </h1>
        </a>

        {/* Desktop Navigation Menu */}
        <nav className="flex flex-col gap-[30px] items-start font-mplus font-extrabold text-[16px] text-white leading-[24px]">
          <a href="/#faq" className="hover:opacity-80 transition-opacity">
            FAQ
          </a>
          <a href="/#privacy" className="hover:opacity-80 transition-opacity">
            プライバシーポリシー
          </a>
        </nav>

        {/* LINE Contact Button */}
        <div className="h-[51px] w-[207px] relative">
          <a
            href="https://line.me/R/ti/p/%40nft"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bg-[#01b202] h-full rounded-[7.2px] w-full flex items-center justify-center gap-[17.12px] hover:bg-[#01a002] transition-colors"
          >
            <span className="font-bold text-white text-[32px] leading-none">
              󰔗
            </span>
            <span className="font-mplus font-extrabold text-white text-[15px] leading-none">
              LINEでお問い合わせ
            </span>
          </a>
        </div>

        {/* Language & Social Icons */}
        <div className="ml-auto flex items-center gap-[10px]">
          {/* Language selector and social icons would go here */}
          <div className="flex gap-[20px]">
            {/* Japanese flag or language selector */}
            <button type="button" className="text-white hover:opacity-80 transition-opacity" aria-label="Language">
              🇯🇵
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
