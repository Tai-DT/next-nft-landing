'use client';

import { useState } from 'react';

const faqs = [
  {
    question: "タイトルテキストが入ります。",
    answer: "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。"
  },
  {
    question: "タイトルテキストが入ります。",
    answer: "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。"
  },
  {
    question: "タイトルテキストが入ります。",
    answer: "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。"
  },
  {
    question: "タイトルテキストが入ります。",
    answer: "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。"
  },
  {
    question: "タイトルテキストが入ります。",
    answer: "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。"
  },
  {
    question: "タイトルテキストが入ります。",
    answer: "詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。詳細テキストが入ります。"
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#050c9c] relative">
      {/* FAQ Title */}
      <div className="text-center py-[160px] px-[10px]">
        <div className="text-white text-[48px] font-roboto font-bold tracking-[3.84px]">
          FAQ
        </div>
      </div>

      {/* FAQ Items */}
      <div className="max-w-[920px] mx-auto px-4 flex flex-col gap-[30px] pb-20">
        {faqs.map((faq, index) => (
          <div key={index}>
            {/* FAQ Item Container */}
            <div className={`w-full ${openIndex === index ? 'min-h-[210px]' : 'h-[130px]'} bg-white rounded-[20px] border border-[#050C9C] relative transition-all duration-300`}>
              
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
