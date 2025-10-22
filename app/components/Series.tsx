'use client';

export default function Series() {
  return (
    <section id="series" className="relative bg-white py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <h2 className="text-[48px] font-black text-center mb-16 text-black">
          次世代シリーズ
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Green Series */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-[30px] p-8 shadow-xl">
            <div className="bg-white rounded-[20px] p-6 mb-6">
              <h3 className="text-[32px] font-black text-green-600 mb-4">グリーンシリーズ</h3>
              <p className="text-lg text-black leading-relaxed">
                環境に優しいNFTコレクション。カーボンニュートラルなブロックチェーン技術を使用し、地球環境保護に貢献します。
              </p>
            </div>
            <button type="button" className="w-full bg-green-600 text-white py-4 rounded-[15px] font-black text-xl hover:bg-green-700 transition-colors">
              詳細を見る
            </button>
          </div>

          {/* Red Series */}
          <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-[30px] p-8 shadow-xl">
            <div className="bg-white rounded-[20px] p-6 mb-6">
              <h3 className="text-[32px] font-black text-red-600 mb-4">レッドシリーズ</h3>
              <p className="text-lg text-black leading-relaxed">
                情熱とエネルギーを表現したNFTコレクション。限定版デジタルアートで、コレクターの心を燃やします。
              </p>
            </div>
            <button type="button" className="w-full bg-red-600 text-white py-4 rounded-[15px] font-black text-xl hover:bg-red-700 transition-colors">
              詳細を見る
            </button>
          </div>
        </div>

        {/* Special Edition */}
        <div className="mt-12 bg-gradient-to-br from-yellow-100 via-orange-100 to-pink-100 rounded-[30px] p-8 shadow-xl">
          <div className="bg-white/90 rounded-[20px] p-8 text-center">
            <h3 className="text-[36px] font-black mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500">
                スペシャルエディション
              </span>
            </h3>
            <p className="text-lg text-black leading-relaxed mb-6 max-w-[800px] mx-auto">
              超限定版のNFTコレクション。独自の特典とコミュニティアクセスが付属します。
            </p>
                        <button type="button" className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-white px-12 py-4 rounded-[15px] font-black text-xl hover:shadow-2xl transition-all">
              限定情報をゲット
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
