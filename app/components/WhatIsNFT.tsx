'use client';

import type { NextPage } from 'next';
import DotPattern from './DotPattern';
import CharacterDisplay from './CharacterDisplay';

const useCases = [
  {
    id: 'digital-art',
    title: 'デジタルアート',
    description: 'アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。',
    bgColor: 'from-purple-200 to-pink-200',
  },
  {
    id: 'collectibles',
    title: 'デジタルコレクティブ',
    description: 'デジタルアイテムを収集、売買することができます。',
    bgColor: 'from-pink-200 to-red-200',
  },
  {
    id: 'game-items',
    title: 'ゲームアイテム',
    description: 'ゲーム内アイテムやキャラクターをNFTとして発行し、プレイヤーが所有することで、マーケットプレイスで売買することができます。',
    bgColor: 'from-blue-200 to-cyan-200',
  },
  {
    id: 'sports',
    title: 'スポーツ',
    description: 'アスリートが限定版のデジタルアイテムやハイライト映像をNFTとして販売し、ファンとのエンゲージメントを高めています。',
    bgColor: 'from-green-200 to-teal-200',
  },
  {
    id: 'music',
    title: '音楽',
    description: 'ミュージシャンが楽曲やアルバムをNFTとして販売することができます。また、ファンはアーティストの作品の所有権を持つことができます。',
    bgColor: 'from-yellow-200 to-orange-200',
  },
  {
    id: 'fashion',
    title: 'ファッション',
    description: 'NFTデジタルファッションとして、衣服やアクセサリーを販売することができます。バーチャルアバターやソーシャルメディアで使用されます。',
    bgColor: 'from-red-200 to-pink-200',
  },
  {
    id: 'real-estate',
    title: '不動産',
    description: '現実世界の不動産NFTをトークン化し、所有権をデジタル証明することができます。これにより不動産の取引がより簡単かつ透明になります。',
    bgColor: 'from-indigo-200 to-purple-200',
  },
  {
    id: 'academic',
    title: '学術・資格証明',
    description: '学位証明書や資格証明書をNFTとして発行し、これらの証明書の正当性を簡単に検証できるようにします。',
    bgColor: 'from-cyan-200 to-blue-200',
  },
  {
    id: 'charity',
    title: '慈善活動',
    description: 'チャリティーオークションでNFTを販売し、収益を慈善団体に寄付することで、支援活動を行います。',
    bgColor: 'from-green-200 to-emerald-200',
  },
];

type UseCase = {
  id: string;
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
    <section id="what-is-nft" className="relative h-[1197px] bg-[#050c9c] overflow-hidden">
      {/* Dot Pattern Background */}
      <DotPattern />

      <div className="relative max-w-[1440px] mx-auto h-full text-left text-[20px] text-black font-mplus-1p">
        
        {/* White rounded container */}
        <div className="absolute left-[40px] top-[0px] w-[1360px] h-[717px] bg-white rounded-[60px]" />

        {/* Title "NFTってなんだ？" */}
        <div className="what-title text-white">NFTってなんだ？</div>

        {/* Left character group */}
        <div className="absolute left-[135px] top-[102px] w-[400px] h-[351px]">
          <CharacterDisplay />
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
              {useCases.map((useCase) => (
                <UseCaseCard useCase={useCase} key={useCase.id} />
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
        .usecase-card { background-image: url('https://via.placeholder.com/420x420'); }
      `}</style>
    </section>
  );
};

export default WhatIsNFT;
