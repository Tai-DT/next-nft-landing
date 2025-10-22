'use client';

export default function NFTEvolution() {
  return (
    <section id="evolution" className="relative bg-[#050c9c] py-32 overflow-hidden">
      {/* Dot pattern background */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, white 2px, transparent 2px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-8">
        {/* Main title */}
        <div className="text-center mb-20">
          <h2 
            className="text-[72px] font-black text-transparent bg-clip-text mb-8 leading-tight"
            style={{
              backgroundImage: 'linear-gradient(180deg, #FEEF01 0%, #FF3795 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            THE EVOLUTION<br />OF NFT
          </h2>
        </div>

        {/* Content box */}
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-[60px] blur-3xl"></div>
          
          <div className="relative bg-white/95 backdrop-blur-sm rounded-[60px] p-16 shadow-2xl">
            {/* Character on the left */}
            <div className="flex gap-12 items-center">
              <div className="relative flex-shrink-0">
                <div className="w-[300px] h-[300px] bg-gradient-to-br from-green-200 to-teal-200 rounded-full flex items-center justify-center text-8xl transform -rotate-3">
                  🐸
                </div>
                
                {/* Speech bubble from character */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 rotate-3">
                  <div className="bg-white rounded-3xl shadow-xl px-6 py-4 border-4 border-black max-w-[280px]">
                    <p className="text-[18px] leading-relaxed text-black">
                      希少性とセキュリティ、開封時のワクワク感が強化されるんだね！
                    </p>
                  </div>
                  {/* Bubble tail */}
                  <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
                    <div className="w-6 h-6 bg-white border-l-4 border-b-4 border-black rotate-45"></div>
                  </div>
                </div>
              </div>

              <div className="flex-1 space-y-8">
                <div className="text-center">
                  <h3 className="text-[48px] font-black mb-2">
                    <span className="text-[#FF3795]">NFT</span>
                    <span className="text-[38px] text-black">は</span>
                  </h3>
                  <h3 className="text-[48px] font-black text-black">
                    <span className="text-[#3ABEF9]">もっと</span>
                    <span className="text-[38px]">進化する！</span>
                  </h3>
                </div>

                <div className="space-y-4 text-[20px] text-black leading-relaxed">
                  <p>
                    NFTはアートのイメージが強いですが、これからもっと進化します！
                  </p>
                  <p>
                    近い将来、お店で購入するトレーディングカードのように、中身は所有者だけが確認できるようになります。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
