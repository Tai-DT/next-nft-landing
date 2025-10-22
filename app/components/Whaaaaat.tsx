import type { NextPage } from 'next';

const Whaaaaat: NextPage = () => {
  return (
    <div 
      className="w-[511px] h-28 rotate-[350.52deg] text-[80px] tracking-[0.8px] leading-[140%] font-black font-mplus-1p text-black"
      style={{
        textShadow: `
          3px 0 0 #fff, 0 3px 0 #fff, -3px 0 0 #fff, 0 -3px 0 #fff,
          3px 3px 0 #fff, -3px -3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff,
          9px 0 0 #050c9c, 0 9px 0 #050c9c, -9px 0 0 #050c9c, 0 -9px 0 #050c9c,
          9px 9px 0 #050c9c, -9px -9px 0 #050c9c, 9px -9px 0 #050c9c, -9px 9px 0 #050c9c
        `
      }}
    >
      Whaaaaat!?
    </div>
  );
};

export default Whaaaaat;
