'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0b1020] text-white py-16">
      <div className="max-w-[1360px] mx-auto px-6">
        <div className="flex flex-wrap justify-between gap-8 mb-10">
          {/* Brand */}
          <div className="flex-1 min-w-[220px]">
            <div className="flex items-center gap-4">
              {/* If you add a logo to public, replace the text with Image */}
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-yellow-300 flex items-center justify-center">
                  <span className="text-xl">🐵</span>
                </div>
                <h3 className="text-[40px] font-black tracking-wider -mt-1">次世代NFT</h3>
              </div>
            </div>
            <p className="mt-6 text-sm text-white/70 max-w-sm">
              次世代のNFTがもたらす価値や使われ方をやさしく解説するランディングページです。
            </p>
          </div>

          {/* Menu */}
          <div className="flex-1 min-w-[180px]">
            <h4 className="text-lg font-bold mb-3">メニュー</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#what-is-nft" className="hover:text-[#3ABEF9] transition-colors">
                  NFTってなんだ？
                </a>
              </li>
              <li>
                <a href="#evolution" className="hover:text-[#3ABEF9] transition-colors">
                  NFTの進化
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#3ABEF9] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-[#3ABEF9] transition-colors">
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="flex-1 min-w-[220px]">
            <h4 className="text-lg font-bold mb-3">お問い合わせ</h4>
            <div className="flex flex-col gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center gap-3 bg-[#01b202] text-white px-5 py-3 rounded-lg hover:bg-[#019a01] transition-colors max-w-max"
                aria-label="Contact via LINE"
              >
                <span className="text-2xl">💬</span>
                <span className="font-bold">LINEでお問い合わせ</span>
              </a>

              <div>
                <h4 className="text-lg font-bold mb-2">フォローする</h4>
                <div className="flex gap-3">
                  <a
                    href="https://twitter.com/"
                    className="w-10 h-10 bg-white/8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Twitter"
                  >
                    <span className="text-lg">🐦</span>
                  </a>
                  <a
                    href="https://discord.com/"
                    className="w-10 h-10 bg-white/8 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                    aria-label="Discord"
                  >
                    <span className="text-lg">💬</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-wrap justify-between items-center gap-4">
          <p className="text-sm text-white/60">© {new Date().getFullYear()} 次世代NFT. All Rights Reserved.</p>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-[#3ABEF9] hover:text-[#2a9ed9] transition-colors"
              aria-label="Back to top"
            >
              <span className="font-medium">TOP</span>
              <span aria-hidden>↑</span>
            </button>

            <Link href="/terms" className="text-sm text-white/60 hover:text-white transition-colors">
              利用規約
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
