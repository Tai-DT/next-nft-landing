'use client';

import { useState } from 'react';
import Image from 'next/image';

const faqs = [
  {
    question: 'NFTとは何ですか？',
    answer: 'NFT（Non-Fungible Token）は、ブロックチェーン技術を使用して作成された、唯一無二のデジタル資産です。各NFTは固有の識別情報を持ち、所有権の証明が可能です。',
  },
  {
    question: 'ガス代とは何ですか？なぜ無料なのですか？',
    answer: '従来のNFTでは、ブロックチェーン上での取引に「ガス代」と呼ばれる手数料が必要でした。次世代NFTでは、独自の技術により、この手数料を削減し、ユーザーの負担を最小限に抑えています。',
  },
  {
    question: 'NFTはどのように保管されますか？',
    answer: 'NFTはデジタルウォレットに保管されます。当社のアプリでは、安全で使いやすいウォレット機能を提供しており、簡単にNFTを管理できます。',
  },
  {
    question: 'NFTを転売することはできますか？',
    answer: 'はい、NFTは自由に転売することができます。マーケットプレイスで他のユーザーと取引が可能です。',
  },
  {
    question: '次世代NFTの特徴は何ですか？',
    answer: '次世代NFTは、低コスト、高速処理、環境への配慮を実現しています。また、独自のプライバシー保護機能により、所有者だけがNFTの詳細を確認できる仕組みを採用しています。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#050c9c] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
               backgroundSize: '30px 30px'
             }}
        />
      </div>

      {/* Decorative NFT Characters */}
      <div className="absolute left-0 bottom-[10%] w-[200px] h-[200px] opacity-20 pointer-events-none hidden lg:block">
        <Image 
          src="/nft-character-left.png" 
          alt="" 
          width={200} 
          height={200}
          className="object-contain"
        />
      </div>
      
      <div className="absolute right-0 top-[20%] w-[200px] h-[200px] opacity-20 pointer-events-none hidden lg:block">
        <Image 
          src="/nft-character-left.png" 
          alt="" 
          width={200} 
          height={200}
          className="object-contain transform scale-x-[-1]"
        />
      </div>

      {/* FAQ Title */}
      <div className="text-center py-[160px] px-[10px] relative z-10">
        <div className="text-white text-[48px] font-roboto font-bold tracking-[3.84px]">
          FAQ
        </div>
      </div>

      {/* FAQ Items */}
      <div className="max-w-[920px] mx-auto px-4 flex flex-col gap-[30px] pb-20 relative z-10">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* FAQ Item Container */}
            <div className={`w-full ${openIndex === index ? 'min-h-[210px]' : 'h-[130px]'} bg-white rounded-[20px] border border-[#050C9C] relative transition-all duration-300 shadow-lg hover:shadow-xl`}>
              
              {/* Question */}
              <div className="absolute left-[40px] top-[40px] flex justify-start items-center gap-[40px] pr-[100px]">
                <div className="text-center text-[#050C9C] text-[32px] font-roboto font-bold leading-[43.94px] flex-shrink-0">
                  Q
                </div>
                <div className="text-center text-black text-[22px] font-['Noto_Sans_JP'] font-bold leading-[30.21px]">
                  {faq.question}
                </div>
              </div>

              {/* Toggle Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="absolute right-[40px] top-[40px] w-[48px] h-[48px] rounded-full border border-[#050C9C] flex items-center justify-center hover:bg-[#050C9C] hover:text-white transition-colors group"
                aria-label={openIndex === index ? '閉じる' : '開く'}
              >
                <div className={`w-[25.60px] h-[25.60px] relative overflow-hidden transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <div className="w-0 h-0 border-l-[4px] border-r-[4px] border-t-[8px] border-l-transparent border-r-transparent border-t-[#050C9C] group-hover:border-t-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  </div>
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="absolute left-[40px] top-[100px] right-[40px] text-black text-[16px] font-['Noto_Sans_JP'] font-normal leading-[24px] tracking-[0.48px] pb-[40px]">
                  {faq.answer}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
