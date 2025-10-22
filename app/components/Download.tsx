'use client';

export default function Download() {
  return (
    <section id="download" className="relative bg-[#050c9c] py-20">
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-[48px] font-black text-white mb-4">
            アプリをダウンロード
          </h2>
          <p className="text-xl text-white/80">
            次世代NFTを今すぐ体験しよう
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-[40px] p-12 max-w-[900px] mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* iOS */}
            <a 
              href="#" 
              className="bg-white rounded-[20px] p-8 flex items-center gap-4 hover:scale-105 transition-transform shadow-xl"
            >
              <div className="text-5xl">🍎</div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">Download on the</p>
                <p className="text-2xl font-black text-black">App Store</p>
              </div>
            </a>

            {/* Android */}
            <a 
              href="#" 
              className="bg-white rounded-[20px] p-8 flex items-center gap-4 hover:scale-105 transition-transform shadow-xl"
            >
              <div className="text-5xl">🤖</div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">GET IT ON</p>
                <p className="text-2xl font-black text-black">Google Play</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-white/70 text-lg">
              または、ブラウザ版をお試しください
            </p>
                        <button type="button" className="mt-4 bg-white text-[#050c9c] px-8 py-3 rounded-[15px] font-black text-lg hover:bg-gray-100 transition-colors">
              ブラウザ版を試す
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
