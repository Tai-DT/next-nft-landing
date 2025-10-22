'use client';

import { useState } from 'react';

const faqs = [
  {
    id: 'faq-1',
    question: 'NFTとは何ですか？',
    answer: 'NFT（Non-Fungible Token）は、ブロックチェーン技術を使用して作成された、唯一無二のデジタル資産です。各NFTは固有の識別情報を持ち、所有権の証明が可能です。',
  },
  {
    id: 'faq-2',
    question: 'ガス代とは何ですか？なぜ無料なのですか？',
    answer: '従来のNFTでは、ブロックチェーン上での取引に「ガス代」と呼ばれる手数料が必要でした。次世代NFTでは、独自の技術により、この手数料を削減し、ユーザーの負担を最小限に抑えています。',
  },
  {
    id: 'faq-3',
    question: 'NFTはどのように保管されますか？',
    answer: 'NFTはデジタルウォレットに保管されます。当社のアプリでは、安全で使いやすいウォレット機能を提供しており、簡単にNFTを管理できます。',
  },
  {
    id: 'faq-4',
    question: 'NFTを転売することはできますか？',
    answer: 'はい、NFTは自由に転売することができます。マーケットプレイスで他のユーザーと取引が可能です。',
  },
  {
    id: 'faq-5',
    question: '次世代NFTの特徴は何ですか？',
    answer: '次世代NFTは、低コスト、高速処理、環境への配慮を実現しています。また、独自のプライバシー保護機能により、所有者だけがNFTの詳細を確認できる仕組みを採用しています。',
  },
  {
    id: 'faq-6',
    question: 'サポートを受けるにはどうすればよいですか？',
    answer: 'LINEまたはメールでお気軽にお問い合わせください。専門のサポートチームが対応させていただきます。営業時間内のご返信をさせていただいております。',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      {/* FAQ Title */}
      <div className="text-center pb-[80px] pt-[160px] px-[10px] relative z-10">
        <h2 className="font-roboto font-bold text-[48px] text-white text-center tracking-[3.84px] faq-title">
          FAQ
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="max-w-[920px] mx-auto px-4 flex flex-col gap-[30px] pb-20 relative z-10">
        {faqs.map((faq) => (
          <div key={faq.id} className="relative">
            {/* FAQ Item Container */}
            <div 
              className={`w-full rounded-[20px] border-2 border-[#050C9C] bg-white relative transition-all duration-300 ${
                openIndex === faqs.indexOf(faq) ? 'min-h-[210px]' : 'h-[130px]'
              }`}
            >
              {/* Question Section */}
              <div className="absolute left-[30px] top-[43px] flex items-center gap-[40px]">
                <div className="font-roboto font-bold text-[32px] text-[#050C9C] leading-[1.373] text-center flex-shrink-0 faq-q">
                  Q
                </div>
                <h3 className="font-noto-sans-jp font-bold text-[22px] text-black leading-[1.373]">
                  {faq.question}
                </h3>
              </div>

              {/* Toggle Button */}
              <button
                type="button"
                onClick={() => toggleFAQ(faqs.indexOf(faq))}
                className="absolute right-[30px] top-[41px] w-[48px] h-[48px] rounded-full border-2 border-[#050C9C] flex items-center justify-center hover:bg-[#050C9C] hover:text-white transition-colors group"
                aria-label={openIndex === faqs.indexOf(faq) ? '閉じる' : '開く'}
                aria-expanded={openIndex === faqs.indexOf(faq) ? 'true' : 'false'}
              >
                <div className={`transition-transform duration-300 transform ${openIndex === faqs.indexOf(faq) ? 'rotate-180' : ''}`}>
                  <svg 
                    className="w-[25.6px] h-[25.6px] text-[#050C9C] group-hover:text-white"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </button>

              {/* Answer Section */}
              {openIndex === faqs.indexOf(faq) && (
                <div className="absolute left-[93px] top-[97px] right-[100px] text-black text-[16px] font-noto-sans-jp font-normal leading-[1.5] tracking-[0.48px] pb-[40px]">
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
