'use client';

import Image from 'next/image';

export default function WhatIsNFTSection() {
  const useCases = [
    {
      id: 1,
      title: 'デジタルアート',
      description: 'アーティストが自身のデジタルアート作品をNFTとして販売することで、作品の所有権を証明し、転売の際にも収益を得ることができます。',
      image: '/use-cases/digital-art.jpg'
    },
    {
      id: 2,
      title: 'デジタルコレクティブ',
      description: 'デジタルアイテムを収集、売買することができます。',
      image: '/use-cases/collectibles.jpg'
    },
    {
      id: 3,
      title: 'ゲームアイテム',
      description: 'ゲーム内アイテムやキャラクターをNFTとして発行し、プレイヤーが所有することで、マーケットプレイスで売買することができます。',
      image: '/use-cases/game-items.jpg'
    },
    {
      id: 4,
      title: 'スポーツ',
      description: 'アスリートが限定版のデジタルアイテムやハイライト映像をNFTとして販売し、ファンとのエンゲージメントを高めています。',
      image: '/use-cases/sports.jpg'
    },
    {
      id: 5,
      title: '音楽',
      description: 'ミュージシャンが楽曲やアルバムをNFTとして販売することができます。また、ファンはアーティストの作品の所有権を持つことができます。',
      image: '/use-cases/music.jpg'
    },
    {
      id: 6,
      title: 'ファッション',
      description: 'NFTデジタルファッションとして、衣服やアクセサリーを販売することができます。バーチャルアバターやソーシャルメディアで使用されます。',
      image: '/use-cases/fashion.jpg'
    },
    {
      id: 7,
      title: '不動産',
      description: '現実世界の不動産NFTをトークン化し、所有権をデジタル証明することができます。これにより不動産の取引がより簡単かつ透明になります。',
      image: '/use-cases/real-estate.jpg'
    },
    {
      id: 8,
      title: '学術・資格証明',
      description: '学位証明書や資格証明書をNFTとして発行し、これらの証明書の正当性を簡単に検証できるようにします。',
      image: '/use-cases/academic.jpg'
    },
    {
      id: 9,
      title: '慈善活動',
      description: 'チャリティーオークションでNFTを販売し、収益を慈善団体に寄付することで、支援活動を行います。',
      image: '/use-cases/charity.jpg'
    }
  ];

  return (
    <section className="relative py-[80px] bg-[#050c9c]">
      <div className="max-w-[1440px] mx-auto px-[40px]">
        {/* Main white container */}
        <div className="relative bg-white rounded-[60px] p-[60px] min-h-[717px]">
          
          {/* Title "NFTってなんだ？" - rotated */}
          <div className="absolute left-[263px] top-[6px] flex items-center justify-center">
            <div className="rotate-[-15deg]">
              <h2 className="font-mplus-1p font-black text-[48px] tracking-[0.48px] leading-[1.4] text-black text-center whitespace-nowrap" style={{
                textShadow: '7px 0 0 #fff, 0 7px 0 #fff, -7px 0 0 #fff, 0 -7px 0 #fff'
              }}>
                NFTってなんだ？
              </h2>
            </div>
          </div>

          {/* Left character - with NFT label */}
          <div className="absolute left-[66px] top-[6px] w-[400px] h-[400px]">
            <div className="relative w-full h-full">
              {/* Character placeholder - replace with actual character images */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[288px] h-[288px] rounded-full bg-gradient-to-br from-[#addbff] to-[#7dd3ff] flex items-center justify-center">
                  <span className="text-[80px]">🐱</span>
                </div>
              </div>
              
              {/* "じせだい" label at bottom */}
              <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2">
                <p className="font-rocknroll text-[25px] text-white tracking-[0.25px] text-center">
                  じせだい
                </p>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="absolute left-[595px] top-[134px] w-[526px]">
            <p className="font-mplus-1p font-medium text-[18px] tracking-[0.18px] leading-[2] text-black mb-[20px]">
              NFTとは「世界にひとつだけの証明番号」を画像やビデオ、3D、音楽、音声などに付与する技術を活用して発行されるものです。証明番号は第三者から書き換えられたりするリスクがなく、デジタルの世界に"ひとつだけ"であることを証明するために使われています。
            </p>
            <p className="font-mplus-1p font-medium text-[16px] tracking-[0.16px] leading-[2] text-black">
              ※Non-Fungible Token（ノンファンジブルトークン）の略称で、日本語では「非代替性トークン」と訳されることが多いです。
            </p>
          </div>

          {/* Right character - teacher */}
          <div className="absolute right-[66px] top-[280px] w-[250px] h-[250px]">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-[200px] h-[200px] rounded-full bg-gradient-to-br from-[#ff95e3] to-[#ff3795] flex items-center justify-center transform rotate-180 scale-y-[-1]">
                <span className="text-[60px] transform rotate-180 scale-y-[-1]">👨‍🏫</span>
              </div>
            </div>
          </div>

          {/* Bubble with text */}
          <div className="absolute left-[66px] top-[549px]">
            <div className="relative">
              <div className="bg-white border-4 border-black rounded-[30px] px-[40px] py-[20px] shadow-lg">
                <p className="font-mplus-1p font-extrabold text-[28px] tracking-[1.4px] leading-[1.4] text-black text-center whitespace-nowrap">
                  こんなことに使われています
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal scrolling use cases */}
        <div className="mt-[40px] overflow-x-auto">
          <div className="flex gap-[20px] pb-[20px]">
            {useCases.map((useCase) => (
              <div 
                key={useCase.id}
                className="flex-none w-[420px] h-[420px] rounded-[20px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.2)] overflow-hidden relative"
              >
                {/* Background image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500" />
                
                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-[20px]">
                  <div className="bg-[rgba(255,255,255,0.8)] rounded-[20px] p-[20px]">
                    <p className="font-mplus-1p font-extrabold text-[20px] tracking-[0.2px] leading-none text-black mb-[10px]">
                      {useCase.title}
                    </p>
                    <p className="font-mplus-1p font-medium text-[16px] tracking-[0.16px] leading-[1.3] text-black">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
