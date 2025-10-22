'use client';

import Image from 'next/image';

export default function Download() {
  return (
    <section id="download" className="relative bg-[#050c9c] py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-[clamp(32px,4vw,48px)] font-black text-white mb-4">
            アプリをダウンロード
          </h2>
          <p className="text-lg sm:text-xl text-white/80">
            次世代NFTを今すぐ体験しよう
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-[24px] sm:rounded-[40px] p-8 sm:p-12 max-w-[900px] mx-auto shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8">
            {/* iOS */}
            <a
              href="#"
              className="group bg-white rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex items-center gap-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl"
              aria-label="Download on App Store"
            >
              <div className="flex-shrink-0">
                <Image src="/apple 1.png" alt="App Store" width={48} height={48} className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">Download on the</p>
                <p className="text-xl sm:text-2xl font-black text-black">App Store</p>
              </div>
            </a>

            {/* Android */}
            <a
              href="#"
              className="group bg-white rounded-[16px] sm:rounded-[20px] p-6 sm:p-8 flex items-center gap-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl"
              aria-label="Download on Google Play"
            >
              <div className="flex-shrink-0">
                <Image src="/google 1.png" alt="Google Play" width={48} height={48} className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-600 mb-1">GET IT ON</p>
                <p className="text-xl sm:text-2xl font-black text-black">Google Play</p>
              </div>
            </a>
          </div>

          <div className="text-center">
            <p className="text-white/70 text-base sm:text-lg mb-4">
              または、ブラウザ版をお試しください
            </p>
            <button
              type="button"
              className="bg-white text-[#050c9c] px-6 sm:px-8 py-3 rounded-[12px] sm:rounded-[15px] font-black text-base sm:text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-lg"
              aria-label="Try browser version"
            >
              ブラウザ版を試す
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
