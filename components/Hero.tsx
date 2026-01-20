import React, { useEffect, useRef } from 'react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Autoplay was prevented:", error);
      });
    }
  }, []);

  const handleScrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-12 px-6 md:px-12 overflow-hidden bg-black">
      {/* Background Video Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-10 opacity-95"></div>
        <div className="absolute inset-0 bg-black/60 z-10 md:bg-black/40"></div>
        
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          poster="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="w-full h-full object-cover opacity-20 md:opacity-50 transition-opacity duration-1000 scale-[1.05]"
          aria-hidden="true"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-mechanical-parts-of-a-clock-close-up-4801-large.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Background Branding Large Text */}
      <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="text-[25vw] font-display font-black text-white/[0.01] select-none leading-none tracking-tighter uppercase whitespace-nowrap hidden lg:block translate-y-20">
          MECHANICAL
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="flex flex-col items-center space-y-8 md:space-y-16">
          
          <header className="space-y-6 md:space-y-10 w-full">
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-3 px-6 py-2 border border-white/10 bg-white/[0.03] backdrop-blur-xl rounded-full mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white">Available in Rossendale</span>
              </div>
            </div>

            <h1 className="flex flex-col items-center max-w-[95%] md:max-w-6xl mx-auto text-center">
              <span className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-display font-black leading-[1.1] md:leading-[0.85] tracking-tight lg:tracking-[-0.05em] uppercase text-white px-2">
                Rossendale's local
              </span>
              <div className="flex flex-col lg:flex-row items-center justify-center gap-y-2 lg:gap-x-8 mt-2 lg:mt-6">
                <span className="text-2xl sm:text-4xl md:text-6xl lg:text-[5.5rem] font-display font-bold text-blue-600 uppercase tracking-tighter">
                  Plumbing & Heating
                </span>
                <span className="text-3xl sm:text-5xl md:text-7xl lg:text-[7.5rem] font-display font-black text-white uppercase tracking-tight lg:tracking-[-0.05em] italic">
                  Engineer
                </span>
              </div>
            </h1>
            
            <div className="max-w-2xl mx-auto space-y-6 pt-4 px-6 text-center">
              <p className="text-base sm:text-lg md:text-2xl text-gray-400 font-light leading-relaxed">
                Professional, reliable service for your home or business. We handle everything from <span className="text-white font-semibold">boiler repairs</span> to luxury <span className="text-white font-semibold">bathroom installations</span>.
              </p>
            </div>
          </header>

          {/* Call to Action Container */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 pt-6 md:pt-4 w-full px-6">
            <button 
              onClick={handleScrollToContact}
              className="group relative w-full sm:w-auto h-16 md:h-20 px-10 md:px-16 bg-blue-600 flex items-center justify-center overflow-hidden transition-all active:scale-95 shadow-[0_20px_50px_rgba(59,130,246,0.3)] hover:shadow-[0_25px_60px_rgba(59,130,246,0.4)]"
            >
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
              <div className="relative flex items-center space-x-4">
                <span className="text-white group-hover:text-black text-[11px] md:text-[13px] font-black uppercase tracking-[0.3em] transition-colors duration-300">Book a Visit</span>
                <svg className="w-5 h-5 text-white group-hover:text-black transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </button>
            
            <div className="flex flex-col items-center sm:items-start group">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mb-1">Call Oscar Directly</span>
              <a href="tel:07703620023" className="text-2xl md:text-3xl font-black text-white hover:text-blue-500 transition-colors tracking-tighter">07703 620023</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-4 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group" 
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to services"
      >
        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/80 group-hover:text-blue-400 transition-colors">Discover Services</span>
        <div className="relative w-[1px] h-16 bg-white/10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-500 animate-[scroll-down_3s_infinite_ease-in-out]"></div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-down {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;