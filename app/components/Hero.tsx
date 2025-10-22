'use client';

import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-[800px] overflow-hidden bg-white">
      {/* Background with 15% opacity colorful pattern (fv-1) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/fv-1.png"
          alt=""
          width={1440}
          height={800}
          sizes="100vw"
          className="w-full h-full object-cover opacity-[0.15]"
          priority
          style={{ width: '100%', height: 'auto' }}
        />
      </div>

      {/* Decorative stars overlay */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <Image 
          src="/hero-stars-overlay.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto h-full">
        {/* Character Group - Figma node 1:2113, positioned at x=20, y=30 */}
        <div className="absolute left-[20px] top-[30px] w-[805.9px] h-[742.4px]">
          {/* Character Image - Figma node 1:2114, dimensions: 737.747×665.978, rotation: 353.743deg */}
          <div className="absolute flex h-full w-full items-center justify-center">
            <div className="rotate-[353.743deg]">
              <div className="relative w-[737.747px] h-[665.978px]">
                <div className="absolute" style={{ inset: '-2.46% -3.38% -3.63% -2.27%' }}>
                  <Image 
                    src="/hero-character-new.png"
                    alt="NFT Character"
                    width={780}
                    height={707}
                    className="block w-full h-full object-cover"
                    priority
                    style={{ width: '100%', height: 'auto' }}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Text "Whaaaaat!?" - Figma node 1:2115, positioned at bottom-right, rotation: 350.52deg */}
          <div className="absolute bottom-[110px] left-[216px] flex items-center justify-center">
            <div className="rotate-[350.52deg]" style={{ transformOrigin: 'center center' }}>
              <p className="relative text-[80px] tracking-[0.8px] leading-[1.4] font-black font-mplus-1p text-black whitespace-nowrap" style={{
                textShadow: `
                  3px 0 0 #fff, 0 3px 0 #fff, -3px 0 0 #fff, 0 -3px 0 #fff,
                  3px 3px 0 #fff, -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff,
                  9px 0 0 #050c9c, 0 9px 0 #050c9c, -9px 0 0 #050c9c, 0 -9px 0 #050c9c,
                  9px 9px 0 #050c9c, -9px -9px 0 #050c9c, 9px -9px 0 #050c9c, -9px 9px 0 #050c9c
                `
              }}>
                Whaaaaat!?
              </p>
            </div>
          </div>
        </div>

        {/* Speech bubble - Figma node 1:2117, positioned at x=612, y=42.09 */}
        <div className="absolute left-[612px] top-[42.09px] w-[752px] h-[572px]">
          {/* Bubble background - Figma node 1:2118, rotation: 8deg */}
          <div className="absolute flex h-full w-full items-center justify-center">
            <div className="rotate-[8deg]">
              <div className="relative w-[752px] h-[572px]">
                <div className="absolute" style={{ bottom: '-1.4%', left: '0', right: '-1.06%', top: '0' }}>
                  <Image 
                    src="/hero-bubble.svg"
                    alt=""
                    fill
                    className="block max-w-none w-full h-full"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Text "えっ！" - positioned with inset */}
          <div className="absolute flex items-center justify-center" style={{ inset: '17.49% 16.17% 60.87% 62.59%' }}>
            <div className="rotate-[8deg]">
              <p className="w-[290px] h-[134px] text-[96px] tracking-[0.96px] leading-[1.4] font-black font-mplus-1p text-black text-center" style={{
                textShadow: '4px 4px 4px rgba(0,0,0,0.25)'
              }}>
                えっ！
              </p>
            </div>
          </div>

          {/* Main message text - positioned at left: 1020.35px (relative to parent 612), top: 254px */}
          <div className="absolute left-[408.35px] top-[254px] flex items-center justify-center -translate-x-1/2">
            <div className="rotate-[8deg]">
              <div className="text-center font-black font-mplus-1p text-black leading-[1.3] tracking-[0.54px] whitespace-nowrap" style={{
                textShadow: '4px 4px 4px rgba(0,0,0,0.25)'
              }}>
                <p className="mb-0">
                  <span className="text-[66px]">NFT</span>
                  <span className="text-[54px]">送るのに</span>
                </p>
                <p className="mb-0 text-[54px]">まだガス代</p>
                <p className="text-[54px]">払ってるの？</p>
              </div>
            </div>
          </div>

          {/* Text "次世代NFTなら" - positioned at left: 801.79px (relative to parent 612), top: 478.63px */}
          <div className="absolute left-[189.79px] top-[478.63px] flex items-center justify-center">
            <div className="rotate-[8deg]">
              <p className="text-[32px] tracking-[0.32px] leading-[1.4] font-black font-mplus-1p text-black" style={{
                textShadow: '4px 4px 4px rgba(0,0,0,0.25)'
              }}>
                次世代NFTなら
              </p>
            </div>
          </div>

          {/* Yellow box - positioned at left: 1028.99px (relative to parent 612), top: 510.39px */}
          <div className="absolute left-[416.99px] top-[510.39px] flex items-center justify-center">
            <div className="rotate-[8deg]">
              <div className="bg-[#FEEF01] rounded-[4px] shadow-[4px_5px_0px_0px_#000000] px-[11px] py-[4px]">
                <p className="font-black font-mplus-1p text-black leading-none text-right tracking-[0.32px]">
                  <span className="text-[32px]">無料だ</span>
                  <span className="text-[32px] tracking-[-8.32px]">よ</span>
                  <span className="text-[37px] tracking-[-2.59px]">！</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}