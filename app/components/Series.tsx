'use client';

export default function Series() {
  return (
    <section id="series" className="relative bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <h2 className="text-[clamp(28px,4vw,48px)] sm:text-[48px] font-black text-center mb-12 sm:mb-16 text-black">
          次世代シリーズ
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Green Series */}
          <article className="group rounded-[24px] p-6 bg-[linear-gradient(135deg,#e6f9ef, #dff3ea)] hover:scale-[1.01] transform transition-all shadow-md">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="bg-white rounded-[16px] overflow-hidden shadow-sm">
                  <img src="/img-1.png" alt="Green series preview" className="w-full h-40 object-cover" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[28px] sm:text-[32px] font-black text-[#0f8a4c] mb-3">グリーンシリーズ</h3>
                <p className="text-base text-black leading-relaxed mb-4">
                  環境に優しいNFTコレクション。カーボンニュートラルなブロックチェーン技術を使用し、地球環境保護に貢献します。
                </p>
                <button type="button" className="inline-block bg-[#0f8a4c] text-white px-6 py-3 rounded-[12px] font-black text-base hover:bg-[#0c6e3c] transition-colors" aria-label="グリーンシリーズの詳細を見る">詳細を見る</button>
              </div>
            </div>
          </article>

          {/* Red Series */}
          <article className="group rounded-[24px] p-6 bg-[linear-gradient(135deg,#ffe9e9,#ffdede)] hover:scale-[1.01] transform transition-all shadow-md">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-full md:w-1/3 flex-shrink-0">
                <div className="bg-white rounded-[16px] overflow-hidden shadow-sm">
                  <img src="/img.png" alt="Red series preview" className="w-full h-40 object-cover" />
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-[28px] sm:text-[32px] font-black text-[#c53030] mb-3">レッドシリーズ</h3>
                <p className="text-base text-black leading-relaxed mb-4">
                  情熱とエネルギーを表現したNFTコレクション。限定版デジタルアートで、コレクターの心を燃やします。
                </p>
                <button type="button" className="inline-block bg-[#c53030] text-white px-6 py-3 rounded-[12px] font-black text-base hover:bg-[#9a2626] transition-colors" aria-label="レッドシリーズの詳細を見る">詳細を見る</button>
              </div>
            </div>
          </article>
        </div>

        {/* Special Edition */}
        <div className="mt-10 md:mt-12">
          <section className="rounded-[24px] p-6 bg-[linear-gradient(90deg,#fff7cc,#ffe7b8)] shadow-md">
            <div className="bg-white/90 rounded-[20px] p-6 text-center">
              <h3 className="text-[26px] sm:text-[36px] font-black mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FEEF01] via-[#ff8a5b] to-[#ff5d9e]">
                  スペシャルエディション
                </span>
              </h3>
              <p className="text-base text-black leading-relaxed mb-6 max-w-[900px] mx-auto">
                超限定版のNFTコレクション。独自の特典とコミュニティアクセスが付属します。
              </p>
              <button type="button" className="bg-[var(--color-yellow)] text-black px-10 py-3 rounded-[12px] font-black text-lg hover:shadow-xl transition-all" aria-label="限定情報をゲット">限定情報をゲット</button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
