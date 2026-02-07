import React, { useEffect } from 'react';

const Areas: React.FC = () => {
  const areas = [
    'Rossendale', 'Bury', 'Rochdale', 'Burnley', 'Blackburn',
    'Accrington', 'Haslingden', 'Rawtenstall', 'Bacup', 'Ramsbottom'
  ];

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="areas" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16 lg:gap-20">
        <div className="w-full lg:w-1/2 space-y-6 sm:space-y-8 md:space-y-12">
          <div className="space-y-3 sm:space-y-4 text-center lg:text-left animate-on-scroll animate-fade-in-up">
             <span className="text-orange-500 font-mono text-[10px] sm:text-xs font-bold tracking-wider">COVERAGE</span>
             <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black uppercase tracking-tighter">Areas We Cover</h2>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-500 font-light leading-relaxed text-center lg:text-left animate-on-scroll animate-fade-in-up delay-200">
            We are based in <span className="text-white font-bold">Rossendale</span> and serve homeowners and businesses across the North West.
          </p>
          <div className="p-5 sm:p-6 md:p-8 border-l-2 border-orange-500 bg-white/[0.02] animate-on-scroll animate-fade-in-up delay-300">
            <p className="text-[10px] sm:text-xs font-mono text-gray-600 uppercase tracking-widest">Fast Response</p>
            <p className="text-base sm:text-lg font-bold mt-2">Local engineers ready to help across the Valley.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2.5 sm:gap-3 md:gap-4">
          {areas.map((area, index) => (
            <div key={area} className="p-4 sm:p-5 md:p-6 lg:p-8 border border-white/5 glass-panel group hover:bg-orange-600 transition-all duration-300 cursor-default animate-on-scroll animate-scale-in hover:scale-105 active:scale-100" style={{ animationDelay: `${index * 0.05}s` }}>
              <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                 <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-orange-500 group-hover:bg-white flex-shrink-0"></div>
                 <span className="text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-widest group-hover:text-white transition-colors">{area}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;