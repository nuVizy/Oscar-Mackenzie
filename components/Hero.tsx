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

  return (
    <section id="home" className="relative min-h-[100svh] flex items-end md:items-center bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-950/40 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-transparent to-transparent z-10"></div>

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="w-full h-full object-cover opacity-40"
          aria-hidden="true"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-mechanical-parts-of-a-clock-close-up-4801-large.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 pb-20 sm:pb-24 pt-28 sm:pt-32 md:py-0">
        <div className="max-w-4xl">
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3 sm:space-y-4 animate-fade-in-up">
              <p className="text-orange-500 text-xs sm:text-sm md:text-base font-semibold tracking-wide uppercase">
                Lancashire's Trusted Experts
              </p>

              <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] tracking-tight">
                Professional Plumbing
                <span className="block text-orange-500">&amp; Heating Services</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed max-w-xl animate-fade-in-up delay-200">
              Over 15 years of hands-on experience delivering reliable plumbing and heating solutions across Lancashire. Available 24/7 for emergencies.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 animate-fade-in-up delay-300">
              <a
                href="https://wa.me/447356080627"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 active:scale-95"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="whitespace-nowrap">Message on WhatsApp</span>
              </a>

              <a
                href="tel:+447356080627"
                className="inline-flex items-center justify-center gap-2 sm:gap-3 border border-zinc-700 hover:border-zinc-500 text-white px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-white/5 active:scale-95"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="whitespace-nowrap">+44 7356 080627</span>
              </a>
            </div>

            <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 xs:gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-zinc-800 animate-fade-in-up delay-400">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">24/7 Emergency</p>
                  <p className="text-zinc-500 text-[10px] sm:text-xs">Fast response times</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-orange-500/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">Fully Insured</p>
                  <p className="text-zinc-500 text-[10px] sm:text-xs">Peace of mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-pointer animate-fade-in delay-600"
        onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
        aria-label="Scroll to services"
      >
        <span className="text-xs font-medium text-zinc-400 uppercase tracking-widest">Scroll</span>
        <div className="w-5 h-8 border border-zinc-600 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-orange-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
