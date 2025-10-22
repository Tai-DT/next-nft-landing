'use client';

export default function Download() {
  return (
    <section id="download" className="w-[912px] h-[502px] relative mx-auto my-20">
      {/* Background */}
      <div className="w-[912px] h-[502px] absolute left-0 top-0 bg-[#2157E3] rounded-[20px] border-[21px] border-[#2157E3]">
        
        {/* Phone Images */}
        <img 
          className="w-[205px] h-[398px] absolute right-[21px] top-[32px]" 
          src="https://placehold.co/205x398" 
          alt="Phone 2"
        />
        <img 
          className="w-[205px] h-[398px] absolute right-[168px] top-[71px]" 
          src="https://placehold.co/205x398" 
          alt="Phone 1"
        />

        {/* Download Text */}
        <div className="absolute left-[223.86px] top-[331.14px] text-center text-white text-[32px] font-['Zen_Kaku_Gothic_New'] font-black leading-[80px]">
          PC
        </div>

        {/* Separator Lines */}
        <div className="absolute left-[74.86px] top-[371.14px] w-[131px] h-0 border border-white"></div>
        <div className="absolute left-[283.86px] top-[371.14px] w-[131px] h-0 border border-white"></div>

        {/* App Store Buttons */}
        <img 
          className="w-[199.04px] h-[59.13px] absolute left-[251.01px] top-[274.01px] hover:opacity-80 transition-opacity cursor-pointer" 
          src="https://placehold.co/199x59" 
          alt="Google Play"
        />
        <img 
          className="w-[199.04px] h-[59.80px] absolute left-[39.86px] top-[273.14px] hover:opacity-80 transition-opacity cursor-pointer" 
          src="https://placehold.co/199x60" 
          alt="App Store"
        />

        {/* Chrome Download Button */}
        <img 
          className="w-[190.48px] h-[60px] absolute left-[149.86px] top-[409.14px] hover:opacity-80 transition-opacity cursor-pointer" 
          src="https://placehold.co/190x60" 
          alt="Chrome Download"
        />

        {/* Download Text Elements - "DOWNLOAD" */}
        <div className="absolute left-[142.37px] top-[165.68px] transform rotate-[-8deg] w-[22.60px] h-[29.25px] bg-white"></div>
        <div className="absolute left-[174.70px] top-[164.15px] transform rotate-[-8deg] w-[27.75px] h-[26.86px] bg-white"></div>
        <div className="absolute left-[209.22px] top-[158.21px] transform rotate-[-8deg] w-[25.46px] h-[26.29px] bg-white"></div>
        <div className="absolute left-[248.16px] top-[151.73px] transform rotate-[-8deg] w-[17.33px] h-[27.43px] bg-white"></div>
        <div className="absolute left-[276.80px] top-[157.45px] transform rotate-[-8deg] w-[26.28px] h-[7.27px] bg-white"></div>
        <div className="absolute left-[308.33px] top-[143.50px] transform rotate-[-8deg] w-[29.06px] h-[27.03px] bg-white"></div>

        {/* "DOWNLOAD" text elements */}
        <div className="absolute left-[75.46px] top-[123.02px] transform rotate-[-8deg] w-[26.69px] h-[35px] bg-white"></div>
        <div className="absolute left-[105.40px] top-[118.79px] transform rotate-[-8deg] w-[14.75px] h-[35.34px] bg-white"></div>
        <div className="absolute left-[123.10px] top-[116.74px] transform rotate-[-8deg] w-[28.67px] h-[35.42px] bg-white"></div>
        <div className="absolute left-[154.95px] top-[111.87px] transform rotate-[-8deg] w-[23.24px] h-[35.14px] bg-white"></div>
        <div className="absolute left-[182.70px] top-[108.25px] transform rotate-[-8deg] w-[28.24px] h-[34.84px] bg-white"></div>
        <div className="absolute left-[223.89px] top-[102.78px] transform rotate-[-8deg] w-[40.44px] h-[34.70px] bg-white"></div>
        <div className="absolute left-[266.07px] top-[105.77px] transform rotate-[-8deg] w-[22.08px] h-[26.79px] bg-white"></div>
        <div className="absolute left-[290.76px] top-[91.36px] transform rotate-[-8deg] w-[7.17px] h-[36.73px] bg-white"></div>
        <div className="absolute left-[302.41px] top-[89.72px] transform rotate-[-8deg] w-[7.17px] h-[36.73px] bg-white"></div>
        <div className="absolute left-[315.07px] top-[98.33px] transform rotate-[-8deg] w-[24.14px] h-[27.17px] bg-white"></div>
        <div className="absolute left-[339.71px] top-[88.68px] transform rotate-[-8deg] w-[19.22px] h-[32.74px] bg-white"></div>
        <div className="absolute left-[368.40px] top-[90.59px] transform rotate-[-8deg] w-[22.85px] h-[28.20px] bg-white"></div>

        {/* Large decorative elements */}
        <div className="absolute left-[156.24px] top-[53.26px] transform rotate-[-8deg] w-[44.79px] h-[44.05px] bg-white"></div>
        <div className="absolute left-[208.99px] top-[46.50px] transform rotate-[-8deg] w-[35.79px] h-[42.91px] bg-white"></div>
        <div className="absolute left-[259.92px] top-[40.29px] transform rotate-[-8deg] w-[33.77px] h-[41px] bg-white"></div>

        {/* Bottom text bar */}
        <div className="absolute left-[41.58px] top-[153.38px] transform rotate-[-14deg] w-[398.38px] h-[130.37px] bg-white"></div>
      </div>
    </section>
  );
}
