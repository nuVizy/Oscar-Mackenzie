import React from 'react';

const Footer: React.FC = () => {
  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 md:py-24 px-6 md:px-12 border-t border-white/5 bg-black overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6 max-w-sm">
            <img 
              src="https://www.omackenzieservices.co.uk/oscar_mackenzie_-_logo.png" 
              alt="O Mackenzie Logo" 
              className="h-16 md:h-20 w-auto brightness-0 invert"
            />
            <p className="text-sm text-gray-500 leading-relaxed font-light">
              Professional plumbing and heating solutions for your home in Rossendale and the North West. Gas Safe registered and fully insured.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 text-[10px] font-mono font-bold tracking-[0.2em] uppercase">
            <div className="space-y-4">
              <p className="text-orange-500">Links</p>
              <div className="flex flex-col space-y-3">
                <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="hover:text-white text-gray-600 transition-colors">Home</a>
                <a href="#services" onClick={(e) => handleScroll(e, 'services')} className="hover:text-white text-gray-600 transition-colors">Services</a>
                <a href="#process" onClick={(e) => handleScroll(e, 'process')} className="hover:text-white text-gray-600 transition-colors">How We Work</a>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-orange-500">Service</p>
              <div className="flex flex-col space-y-3">
                <a href="#areas" onClick={(e) => handleScroll(e, 'areas')} className="hover:text-white text-gray-600 transition-colors">Areas Covered</a>
                <a href="#tips" onClick={(e) => handleScroll(e, 'tips')} className="hover:text-white text-gray-600 transition-colors">Helpful Tips</a>
                <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hover:text-white text-gray-600 transition-colors">Contact Us</a>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-orange-500">Trust</p>
              <div className="flex flex-col space-y-3">
                <span className="text-gray-600">Gas Safe: 583167</span>
                <span className="text-gray-600">Rossendale Local</span>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[9px] font-mono text-gray-700 tracking-widest uppercase italic text-center md:text-left">© 2025 O MACKENZIE SERVICES // ALL RIGHTS RESERVED</span>
          <div className="flex items-center space-x-6">
            <span className="text-[9px] font-black tracking-widest text-gray-800 uppercase">Rossendale, Lancashire</span>
            <div className="w-8 h-[1px] bg-white/10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;