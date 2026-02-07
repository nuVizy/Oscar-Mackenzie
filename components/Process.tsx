import React, { useEffect } from 'react';

const steps = [
  { num: '01', title: 'Get in Touch', desc: 'Call or message us for a friendly chat about what you need fixed or installed.' },
  { num: '02', title: 'Clear Pricing', desc: 'We provide a fair, honest quote with no hidden extras, so you know exactly what to expect.' },
  { num: '03', title: 'Expert Work', desc: 'Our qualified engineer carries out the job with precision, safety, and respect for your home.' },
  { num: '04', title: 'Clean & Tidy', desc: 'We test everything thoroughly and always leave your space exactly as we found it.' }
];

const StepCard: React.FC<{ num: string; title: string; desc: string; index: number }> = ({ num, title, desc, index }) => (
  <div className="bg-black p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8 group hover:bg-white/[0.02] transition-colors relative overflow-hidden flex-shrink-0 w-[80vw] snap-start lg:w-auto lg:flex-shrink border border-white/5 lg:border-0 animate-on-scroll animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="absolute -right-2 sm:-right-4 -bottom-2 sm:-bottom-4 text-6xl sm:text-7xl md:text-[8rem] font-black text-white/[0.02] group-hover:text-orange-500/[0.05] transition-colors leading-none select-none pointer-events-none">
      {num}
    </div>
    <div className="space-y-3 sm:space-y-4 relative z-10">
      <span className="text-orange-500 font-mono text-[9px] sm:text-[10px] font-black tracking-widest">STEP {num}</span>
      <h3 className="text-lg sm:text-xl md:text-2xl font-display font-black uppercase tracking-tight">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">{desc}</p>
    </div>
    <div className="w-6 sm:w-8 h-[1px] bg-orange-500/30 group-hover:w-full transition-all duration-500"></div>
  </div>
);

const Process: React.FC = () => {
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
    <section id="process" className="py-16 sm:py-20 md:py-28 lg:py-32 max-w-[1600px] mx-auto border-t border-white/5">
      <div className="mb-10 sm:mb-12 md:mb-16 lg:mb-20 px-4 sm:px-6 md:px-12 animate-on-scroll animate-fade-in-up">
        <span className="text-orange-500 font-mono text-[9px] sm:text-[10px] font-black tracking-widest uppercase block mb-3 sm:mb-4">How We Work</span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tighter">Simple & Reliable</h2>
      </div>

      {/* Mobile: Horizontal scroll with snap */}
      <div className="lg:hidden">
        <div className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-4 sm:px-6 scrollbar-hide">
          {steps.map((step, index) => (
            <StepCard key={step.num} {...step} index={index} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-orange-500/60 mt-4">
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-widest">SWIPE TO EXPLORE</span>
          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden lg:grid grid-cols-4 gap-px bg-white/5 border border-white/5 mx-8 lg:mx-12">
        {steps.map((step, index) => (
          <div key={step.num} className="bg-black p-8 lg:p-10 space-y-8 group hover:bg-white/[0.02] transition-colors relative overflow-hidden animate-on-scroll animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
            <div className="absolute -right-4 -bottom-4 text-[8rem] font-black text-white/[0.02] group-hover:text-orange-500/[0.05] transition-colors leading-none select-none pointer-events-none">
              {step.num}
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-orange-500 font-mono text-[10px] font-black tracking-widest">STEP {step.num}</span>
              <h3 className="text-xl lg:text-2xl font-display font-black uppercase tracking-tight">{step.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{step.desc}</p>
            </div>
            <div className="w-8 h-[1px] bg-orange-500/30 group-hover:w-full transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;
