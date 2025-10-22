'use client';

export default function TracouHunter() {
  return (
    <section className="w-[1440px] h-[979px] relative overflow-hidden">
      {/* Background */}
      <div className="w-[1440px] h-[980px] absolute left-0 top-0 bg-gradient-radial from-[#194CC3] via-[#062675] to-[#031A57] opacity-100"></div>
      <img 
        className="w-[1440px] h-[980px] absolute left-0 top-0 mix-blend-overlay" 
        src="https://placehold.co/1440x980" 
        alt=""
      />

      {/* Game Screenshot */}
      <div className="w-[912.77px] h-[698px] absolute left-[527px] top-[227px] bg-[#000083] shadow-inner overflow-hidden rounded-[34.17px]">
        {/* NFT Cards Pattern */}
        <div className="absolute inset-0">
          {/* Multiple rotated rectangles representing NFT cards */}
          {Array.from({ length: 16 }).map((_, index) => {
            const positions = [
              { left: 549.13, top: 209.89 },
              { left: 422.22, top: -9.76 },
              { left: 641.87, top: -136.67 },
              { left: 768.78, top: 82.98 },
              { left: 895.69, top: 302.63 },
              { left: 676.03, top: 429.54 },
              { left: 802.94, top: 649.19 },
              { left: 456.38, top: 556.45 },
              { left: 583.29, top: 776.10 },
              { left: 236.73, top: 683.36 },
              { left: 17.08, top: 810.27 },
              { left: -109.83, top: 590.62 },
              { left: -236.73, top: 370.96 },
              { left: -363.64, top: 151.31 },
              { left: -143.99, top: 24.41 },
              { left: 75.66, top: -102.50 }
            ];
            
            const pos = positions[index] || { left: 0, top: 0 };
            const isDark = [4, 10, 13].includes(index);
            
            return (
              <img
                key={index}
                className="w-[214.77px] h-[214.77px] absolute transform rotate-[-30deg] rounded-[48.81px] border-2 border-white/5"
                style={{ left: pos.left, top: pos.top }}
                src="https://placehold.co/215x215"
                alt=""
              />
            );
          })}
          
          {/* Large circular element */}
          <img 
            className="w-[468.59px] h-[468.59px] absolute left-[-17.08px] top-[244.06px] transform rotate-[-30deg] rounded-[97.62px] border-2 border-white/5" 
            src="https://placehold.co/469x469" 
            alt=""
          />
        </div>

        {/* Copyright */}
        <div className="absolute left-[744px] top-[654px] text-white text-[13px] font-mplus font-normal">
          ©︎諏訪原寛幸 / 七大陸
        </div>
      </div>

      {/* Text Content */}
      <div className="absolute left-[77px] top-[484px] flex flex-col justify-center items-center gap-[60px]">
        <div className="text-center text-white text-[64px] font-['Noto_Serif_JP'] font-black uppercase leading-[96px] tracking-[1.92px] shadow-[0px_4px_104px_rgba(0,0,131,1)]">
          戦国NFT
        </div>
        <div className="w-[405.75px] text-center text-white text-[20px] font-['Noto_Serif_JP'] font-bold leading-[30px] tracking-[0.60px]">
          戦国NFTがあなたの街に所狭しと出現中！<br/>無料でNFTを獲得できます！
        </div>
        
        {/* Download Button */}
        <div className="relative">
          <div className="w-[321.32px] h-[89.32px] bg-gradient-to-r from-[#000C22] to-[#003088] flex items-center justify-center rounded-lg">
            {/* Arrow icons */}
            <div className="w-[53.36px] h-[66.12px] transform rotate-90 bg-white mr-4"></div>
            <div className="flex flex-col items-center text-white">
              <div className="text-[23.20px] font-['Noto_Serif_JP'] font-medium leading-[23.20px] tracking-[0.70px]">
                Tracou Hunter
              </div>
              <div className="text-[23.20px] font-['Noto_Serif_JP'] font-medium leading-[23.20px] tracking-[0.70px]">
                公式サイト
              </div>
            </div>
            <div className="w-[53.36px] h-[66.12px] transform -rotate-90 bg-white ml-4"></div>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute left-[3px] top-[51px] mix-blend-overlay text-center text-[#000083] text-[146px] font-['Noto_Serif_JP'] font-black leading-[146px] tracking-[4.38px]">
        TRACOU HUNTER
      </div>

      {/* Logo */}
      <img 
        className="w-[164px] h-[152px] absolute left-[638px] top-[57px] shadow-[0px_0px_92.8px_rgba(14.96,126.51,207.29,0.40)]" 
        src="https://placehold.co/164x152" 
        alt="Tracou Hunter Logo"
      />
    </section>
  );
}