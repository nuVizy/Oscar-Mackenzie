import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Reviews from './components/Reviews';
import Areas from './components/Areas';
import Tips from './components/Tips';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-orange-500 selection:text-white">
      {/* Global Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-orange-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[20%] left-[5%] w-[30vw] h-[30vw] bg-orange-900/5 rounded-full blur-[100px]"></div>
        {/* Continuous Grid */}
        <div className="absolute inset-0 border-x border-white/[0.03] mx-auto max-w-[1600px]"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        <div className="relative border-y border-white/5 bg-white/[0.01]">
          <Services />
        </div>

        <div>
          <Process />
        </div>

        <div>
          <Reviews />
        </div>
        
        <div className="border-t border-white/5">
          <Areas />
        </div>

        <div>
          <Tips />
        </div>

        <div>
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;