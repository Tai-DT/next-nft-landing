'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-[#252525] text-white overflow-hidden">
      {/* Menu Section */}
      <div className="px-[287px] py-[160px] flex justify-start items-start gap-[100px] relative z-10">
        {/* Logo */}
        <div className="pb-[30px] flex justify-start items-center gap-[3px]">
          <div className="text-white text-[52px] font-dela font-normal leading-[52px] tracking-[1.04px]">
            次世代NFT
          </div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col justify-start items-start gap-[30px]">
          <a href="#faq" className="text-white text-[16px] font-mplus font-extrabold leading-[24px] hover:text-[#3ABEF9] transition-colors">
            FAQ
          </a>
          <Link href="/privacy" className="text-white text-[16px] font-mplus font-extrabold leading-[24px] hover:text-[#3ABEF9] transition-colors">
            プライバシーポリシー
          </Link>
        </div>

        {/* LINE Contact Button */}
        <div className="w-[207px] h-[51px] relative">
          <div className="w-[207px] h-[51px] absolute left-0 top-0 bg-[#01B202] rounded-[7.2px] flex items-center hover:bg-[#019a01] transition-colors cursor-pointer">
            <div className="absolute left-[16px] top-[10px] text-white text-[32px] leading-[32px]">
              💬
            </div>
            <div className="absolute left-[50.12px] top-[19px] text-white text-[15px] font-mplus font-extrabold leading-[15px]">
              LINEでお問い合わせ
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-4">
          {/* Twitter */}
          <a href="https://twitter.com/" className="w-[45.84px] h-[26.43px] bg-[#22ABF3] hover:opacity-80 transition-opacity" aria-label="Twitter"></a>
          {/* Facebook */}
          <a href="https://facebook.com/" className="w-[45.84px] h-[26.43px] bg-white hover:opacity-80 transition-opacity" aria-label="Facebook"></a>
          {/* Instagram */}
          <a href="https://instagram.com/" className="w-[47.72px] h-[28.16px] bg-black hover:opacity-80 transition-opacity" aria-label="Instagram"></a>
          {/* YouTube */}
          <a href="https://youtube.com/" className="w-[44.31px] h-[32.60px] bg-[#E70012] hover:opacity-80 transition-opacity" aria-label="YouTube"></a>
          {/* TikTok */}
          <a href="https://tiktok.com/" className="w-[45.48px] h-[41.57px] bg-[#F9FE01] hover:opacity-80 transition-opacity" aria-label="TikTok"></a>
          {/* Discord */}
          <a href="https://discord.com/" className="w-[37.94px] h-[34px] bg-[#FE01F4] hover:opacity-80 transition-opacity" aria-label="Discord"></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="absolute left-[632px] bottom-[20px] px-[10px] py-[10px] flex justify-center items-center">
        <div className="text-center text-white text-[14px] font-mplus font-normal leading-[28px]">
          Copyright © 次世代NFT
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-[20px] right-[40px] z-50">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-[65px] h-[65px] bg-[#ADDBFF] rounded-full flex flex-col items-center justify-center hover:bg-[#9DCFFF] transition-colors"
          aria-label="Back to top"
        >
          <div className="text-[#3ABEF9] text-[13px] font-mplus font-medium leading-[18.2px] tracking-[0.13px]">
            TOP↑
          </div>
        </button>
      </div>
    </footer>
  );
}
