'use client';

import type { NextPage } from 'next';
import Image from 'next/image';

const useCases = [
  {
    title: 'デジタルアート',
    description: 'アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。',
    bgColor: 'from-purple-200 to-pink-200',
  },
  {
    title: 'デジタルコレクティブ',
    description: 'デジタルアイテムを収集、売買することができます。',
    bgColor: 'from-pink-200 to-red-200',
  },
  {
    title: 'ゲームアイテム',
    description: 'ゲーム内アイテムやキャラクターをNFTとして発行し、プレイヤーが所有することで、マーケットプレイスで売買することができます。',
    bgColor: 'from-blue-200 to-cyan-200',
  },
  {
    title: 'スポーツ',
    description: 'アスリートが限定版のデジタルアイテムやハイライト映像をNFTとして販売し、ファンとのエンゲージメントを高めています。',
    bgColor: 'from-green-200 to-teal-200',
  },
  {
    title: '音楽',
    description: 'ミュージシャンが楽曲やアルバムをNFTとして販売することができます。また、ファンはアーティストの作品の所有権を持つことができます。',
    bgColor: 'from-yellow-200 to-orange-200',
  },
  {
    title: 'ファッション',
    description: 'NFTデジタルファッションとして、衣服やアクセサリーを販売することができます。バーチャルアバターやソーシャルメディアで使用されます。',
    bgColor: 'from-red-200 to-pink-200',
  },
  {
    title: '不動産',
    description: '現実世界の不動産NFTをトークン化し、所有権をデジタル証明することができます。これにより不動産の取引がより簡単かつ透明になります。',
    bgColor: 'from-indigo-200 to-purple-200',
  },
  {
    title: '学術・資格証明',
    description: '学位証明書や資格証明書をNFTとして発行し、これらの証明書の正当性を簡単に検証できるようにします。',
    bgColor: 'from-cyan-200 to-blue-200',
  },
  {
    title: '慈善活動',
    description: 'チャリティーオークションでNFTを販売し、収益を慈善団体に寄付することで、支援活動を行います。',
    bgColor: 'from-green-200 to-emerald-200',
  },
];

type UseCase = {
  title: string;
  description: string;
  bgColor?: string;
};

function UseCaseCard({ useCase }: { useCase: UseCase }) {
  return (
    <div className="usecase-card">
      <div className="w-[400px] bg-[rgba(255,255,255,0.8)] rounded-[20px] px-[20px] py-[10px] flex flex-col gap-[10px]">
        <div className="text-black text-[20px] font-mplus-1p font-extrabold leading-[20px] tracking-[0.2px]">
          {useCase.title}
        </div>
        <div className="text-black text-[16px] font-mplus-1p font-medium leading-[20.8px] tracking-[0.16px]">
          {useCase.description}
        </div>
      </div>
    </div>
  );
}

const WhatIsNFT: NextPage = () => {
  return (
    <section id="what-is-nft" className="relative h-[1197px] bg-[#050c9c]">
      <div className="relative max-w-[1440px] mx-auto h-full text-left text-[20px] text-black font-mplus-1p">
        
        {/* White rounded container - Figma node 1:1594 */}
        <div className="absolute left-[40px] top-[0px] w-[1360px] h-[717px] bg-white rounded-[60px]" />

        {/* Title "NFTってなんだ？" - Figma node 1:1673 */}
        <div className="what-title text-white">NFTってなんだ？</div>

        {/* Left character group - Figma node 1:1652 */}
        <div className="absolute left-[135px] top-[102px] w-[400px] h-[351px]">
          {/* Background image - node 1:1654 */}
          <div className="absolute w-[400px] h-[339px]">
              <div className="absolute bg-wrap">
                <Image
                  src="/character-layers/img-background.svg"
                  alt="background"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
          </div>
          
          {/* Character layers container at 188, 136 (relative: 53, 34) */}
          <div className="absolute left-[53px] top-[34px] w-[288px] h-[288px]">
            {/* Layer 1: Fur/Default */}
            <div className="absolute inset-0">
              <Image 
                src="/character-layers/fur-default.png"
                alt="Character Fur"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Layer 2: Clothes/Red Tee */}
            <div className="absolute inset-0">
              <Image 
                src="/character-layers/clothes-red-tee.png"
                alt="Character Clothes"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Layer 3: Eyes/1 */}
            <div className="absolute inset-0">
              <Image 
                src="/character-layers/eyes-1.png"
                alt="Character Eyes"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Layer 4: Mouth/Open 3 */}
            <div className="absolute inset-0">
              <Image 
                src="/character-layers/mouth-open-3.png"
                alt="Character Mouth"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Layer 5: Hat/Cap UFO */}
            <div className="absolute inset-0">
              <Image 
                src="/character-layers/hat-cap-ufo.png"
                alt="Character Hat"
                width={288}
                height={288}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Vector 1 - Pink banner for じせだい */}
            <div className="absolute vector-pos">
                <Image
                  src="/character-layers/vector-1.svg"
                  alt="vector"
                  fill
                  className="object-contain"
                  unoptimized
                />
            </div>
            
            {/* じせだい text */}
              <p className="absolute font-rocknroll text-[25px] tracking-[0.25px] text-center leading-[1.4] what-jisedai">
                じせだい
              </p>
            
            {/* "what is nft?" rainbow bubble (inline gradient div provided by user) */}
            <div className="absolute what-bubble">
              <div className="bubble-inner">
                <div data-layer="what is nft?" className="WhatIsNft whatisnft-gradient" />
              </div>
            </div>
            
            {/* Question mark 1 - right side */}
            <div className="absolute what-question-right">
              <div className="question-inner-right">
                  <Image
                    src="/character-layers/question-mark-1.svg"
                    alt="question"
                    fill
                    className="object-contain"
                    unoptimized
                  />
              </div>
            </div>
            
            {/* Question mark 2 - left side */}
            <div className="absolute what-question-left">
              <div className="absolute what-question-inner">
                  <Image
                    src="/character-layers/question-mark-2.svg"
                    alt="question"
                    fill
                    className="object-contain"
                    unoptimized
                  />
              </div>
            </div>
          </div>
          
          {/* Final overlay mask - node 1:1672 */}
          <div className="absolute w-[400px] h-[339px] overlay-wrap">
            <div className="absolute overlay-inner">
                <Image
                  src="/character-layers/img-overlay.svg"
                  alt="overlay"
                  fill
                  className="object-cover"
                  unoptimized
                />
            </div>
          </div>
        </div>

        {/* Main text content */}
        <div className="absolute left-[595px] top-[134px]">
          <p className="w-[526px] text-black text-[18px] font-mplus-1p font-medium leading-[36px] tracking-[0.18px] mb-[52px]">
            NFTとは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に"ひとつだけ"であることを証明するために使われています。
          </p>
          <p className="w-[480px] text-black text-[16px] font-mplus-1p font-medium leading-[32px] tracking-[0.16px]">
            ※Non-Fungible Token（ノンファンジブルトークン）の略称で、日本語では「非代替性トークン」と訳されることが多いです。
          </p>
        </div>

        {/* Right teacher character */}
        <div className="absolute left-[1077px] top-[280px] w-[250px] h-[239px]">
          <div className="w-full h-full flex items-center justify-center transform rotate-180 scale-y-[-1]">
            <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#ff95e3] to-[#ff3795] flex items-center justify-center">
              <span className="text-[60px] transform rotate-180 scale-y-[-1]">👨‍🏫</span>
            </div>
          </div>
        </div>

        {/* Bubble "こんなことに使われています" */}
        <div className="absolute left-[39px] top-[495px]">
          <div className="w-[419px] h-[95px] bg-[#FFF7B0] rounded-[4px] border-[4px] border-black flex items-center justify-center">
            <p className="text-black text-[28px] font-mplus-1p font-extrabold leading-[39.2px] tracking-[1.4px] text-center">
              こんなことに使われています
            </p>
          </div>
        </div>

        {/* Horizontal scrolling use cases */}
        <div className="absolute left-[29px] top-[717px] right-0">
          <div className="overflow-x-auto hide-scrollbar">
            <div className="flex gap-[20px] pb-[20px]">
              {useCases.map((useCase, index) => (
                <UseCaseCard useCase={useCase} key={`${useCase.title}-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .what-title {
          position: absolute;
          left: 66px;
          top: 107.2px;
          color: #000;
          font-size: 48px;
          line-height: 67.2px;
          font-weight: 900;
          letter-spacing: 0.48px;
          text-align: center;
          transform: rotate(-15deg);
          transform-origin: top left;
          text-shadow: 7px 0 0 #fff, 0 7px 0 #fff, -7px 0 0 #fff, 0 -7px 0 #fff;
        }
        /* jisedai position tuned to be responsive-ish */
        .what-jisedai {
          position: absolute;
          inset: 87.17% 33.68% 0.68% 31.25%;
          z-index: 3; /* ensure text appears above the bubble */
          pointer-events: none;
          /* Use rainbow gradient as text fill */
          background: linear-gradient(90deg, #FF75C3 0%, #FFA647 20%, #FFE83F 40%, #9FFF5B 60%, #70E2FF 80%, #CD93FF 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
          display: inline-block;
          background-size: 200% 100%;
        }
        .what-bubble { position: absolute; inset: -7.22% 39.11% 83.17% -1.44%; }
        .what-question-right { position: absolute; inset: 55.6% -6.66% 28.29% 94.84%; }
        .what-question-left { position: absolute; left: -21.29px; top: 121.78px; width: 33.629px; height: 45.784px; }
        .what-question-inner { bottom: -4.37%; left: 0; right: 0; top: 0; position: absolute; }
        .overlay-wrap { width: 400px; height: 339px; }
        .overlay-inner { inset: -4.56% -4.52% -4.81% -3.75%; position: absolute; }
        .bg-wrap { position: absolute; inset: -4.56% -4.52% -4.81% -3.75%; }
        .vector-pos { position: absolute; inset: 87.5% 31.42% -7.11% 30.73%; }
  .bubble-inner { bottom: -2.89%; left: 0; right: 0; top: 0; position: absolute; z-index: 1; }
        .question-inner-right { bottom: -4.31%; left: 0; right: 0; top: 0; position: absolute; }
        .usecase-card { background-image: url('https://via.placeholder.com/420x420'); }
        .whatisnft-gradient {
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, #FF75C3 0%, #FFA647 20%, #FFE83F 40%, #9FFF5B 60%, #70E2FF 80%, #CD93FF 100%);
          box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.55);
          z-index: 1;
        }
      `}</style>
    </section>
  );
};

export default WhatIsNFT;
