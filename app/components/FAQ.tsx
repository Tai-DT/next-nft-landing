'use client';

import { useState } from 'react';

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-white py-20">
      <div className="max-w-[900px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-[48px] font-black text-black mb-4">FAQ</h2>
          <p className="text-xl text-gray-600">よくある質問</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-[20px] overflow-hidden hover:border-[#3ABEF9] transition-colors"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left"
              >
                <span className="text-xl font-bold text-black pr-4">{faq.question}</span>
                <span className="text-3xl text-[#3ABEF9] flex-shrink-0">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
