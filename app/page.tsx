import Hero from './components/Hero';
import Header from './components/Header';
import WhatIsNFT from './components/WhatIsNFT';
import NFTEvolution from './components/NFTEvolution';
import Series from './components/Series';
import Download from './components/Download';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import TracouHunter from './components/TracouHunter';
import DotPattern from './components/DotPattern';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#050c9c]">
      {/* Background Pattern */}
      <DotPattern />
      
      <Header />
      <Hero />
      <WhatIsNFT />
      <NFTEvolution />
      <Series />
      <Download />
      <TracouHunter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
