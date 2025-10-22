import type { NextPage } from 'next';
import Image from 'next/image';

// Image assets - using actual character layer images from public folder
const imgFurDefault = "/character-layers/fur-default.png";
const imgClothesRedTee = "/character-layers/clothes-red-tee.png";
const imgEyes1 = "/character-layers/eyes-1.png";
const imgMouthOpen3 = "/character-layers/mouth-open-3.png";
const imgHatCapUfo = "/character-layers/hat-cap-ufo.png";
const imgVector1 = "/character-layers/vector-1.svg";
const imgWhatIsNft = "/character-layers/what-is-nft-rainbow.svg";
const imgQuestion1 = "/character-layers/question-mark-1.svg";
const imgQuestion2 = "/character-layers/question-mark-2.svg";

const NFTTitle: NextPage = () => {
  return (
    <div data-layer="Group 5288" className="Group5288" style={{width: '100%', height: '100%', position: 'relative'}}>
      <Image 
        src="/background/colorful-stars.jpg"
        alt="Background"
        fill
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1
        }}
      />
      <div data-layer="img" className="Img" style={{width: 400, height: 339, left: 69, top: 96, position: 'absolute', background: '#2295ED', outline: '15px #A7E6FF solid'}} />
      <div data-layer="img" className="Img" style={{width: 400, height: 351, left: 69, top: 96, position: 'absolute', background: '#2295ED'}} />
      <div data-layer="Fur/Default" className="FurDefault" style={{width: 288.02, height: 288.02, left: 122, top: 130, position: 'absolute'}}>
        <Image 
          data-layer="Fur/Default" 
          className="FurDefault" 
          src={imgFurDefault}
          alt="Fur"
          width={288}
          height={288}
          style={{position: 'absolute', left: 0, top: 0}}
        />
      </div>
      <div data-layer="Clothes/Red Tee" className="ClothesRedTee" style={{width: 288.02, height: 288.02, left: 122, top: 130, position: 'absolute'}}>
        <Image 
          data-layer="Clothes/Red Tee" 
          className="ClothesRedTee" 
          src={imgClothesRedTee}
          alt="Clothes"
          width={288}
          height={288}
          style={{position: 'absolute', left: 0, top: 0}}
        />
      </div>
      <div data-layer="Eyes/1" className="Eyes1" style={{width: 288.02, height: 288.02, left: 122, top: 130, position: 'absolute'}}>
        <Image 
          data-layer="Eyes/1" 
          className="Eyes1" 
          src={imgEyes1}
          alt="Eyes"
          width={288}
          height={288}
          style={{position: 'absolute', left: 0, top: 0}}
        />
      </div>
      <div data-layer="Mouth/Open 3" className="MouthOpen3" style={{width: 288.02, height: 288.02, left: 122, top: 130, position: 'absolute'}}>
        <Image 
          data-layer="Mouth/Open 3" 
          className="MouthOpen3" 
          src={imgMouthOpen3}
          alt="Mouth"
          width={288}
          height={288}
          style={{position: 'absolute', left: 0, top: 0}}
        />
      </div>
      <div data-layer="Hat/Cap UFO" className="HatCapUfo" style={{width: 288.02, height: 288.02, left: 122, top: 130, position: 'absolute'}}>
        <Image 
          data-layer="Hat/Cap UFO" 
          className="HatCapUfo" 
          src={imgHatCapUfo}
          alt="Hat"
          width={288}
          height={288}
          style={{position: 'absolute', left: 0, top: 0}}
        />
        <Image 
          data-layer="Vector 1" 
          className="Vector1" 
          src={imgVector1}
          alt="Vector"
          width={109}
          height={57}
          unoptimized
          style={{position: 'absolute', left: 88.5, top: 252}}
        />
        <div data-layer="じせだい" style={{left: 90.02, top: 251.07, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 25, fontFamily: 'RocknRoll One', fontWeight: '400', lineHeight: 35, letterSpacing: 0.25, wordWrap: 'break-word'}}>じせだい</div>
        <Image 
          data-layer="what is nft?" 
          className="WhatIsNft" 
          src={imgWhatIsNft}
          alt="What is NFT?"
          width={180}
          height={69}
          unoptimized
          style={{position: 'absolute', left: -4.15, top: -20.81}}
        />
        <Image 
          data-layer="?" 
          src={imgQuestion1}
          alt="Question mark 1"
          width={34}
          height={46}
          unoptimized
          style={{position: 'absolute', left: 273.16, top: 160.15}}
        />
        <Image 
          data-layer="?" 
          src={imgQuestion2}
          alt="Question mark 2"
          width={34}
          height={46}
          unoptimized
          style={{position: 'absolute', left: -21.29, top: 121.78}}
        />
      </div>
      <div data-layer="img" className="Img" style={{width: 400, height: 339, left: 69, top: 96, position: 'absolute', outline: '15px #A7E6FF solid'}} />
      <div data-layer="NFTってなんだ？" className="Nft" style={{left: 0, top: 101.20, position: 'absolute', transform: 'rotate(-15deg)', transformOrigin: 'top left', textAlign: 'center', color: 'black', fontSize: 48, fontFamily: 'Mplus 1p', fontWeight: '900', lineHeight: '67.20px', letterSpacing: 0.48, wordWrap: 'break-word', textShadow: '7px 0 0 #fff, 0 7px 0 #fff, -7px 0 0 #fff, 0 -7px 0 #fff'}}>NFTってなんだ？</div>
    </div>
  );
};

export default NFTTitle;
