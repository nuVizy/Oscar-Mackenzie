import React from 'react';

const steps = [
  { num: '01', title: 'Get in Touch', desc: 'Call or message us for a friendly chat about what you need fixed or installed.' },
  { num: '02', title: 'Clear Pricing', desc: 'We provide a fair, honest quote with no hidden extras, so you know exactly what to expect.' },
  { num: '03', title: 'Expert Work', desc: 'Our qualified engineer carries out the job with precision, safety, and respect for your home.' },
  { num: '04', title: 'Clean & Tidy', desc: 'We test everything thoroughly and always leave your space exactly as we found it.' }
];

const StepCard: React.FC<{ num: string; title: string; desc: string }> = ({ num, title, desc }) => (
  <div className="bg-black p-8 md:p-10 space-y-8 group hover:bg-white/[0.02] transition-colors relative overflow-hidden flex-shrink-0 w-[80vw] snap-start lg:w-auto lg:flex-shrink border border-white/5 lg:border-0">
    <div className="absolute -right-4 -bottom-4 text-7xl md:text-[8rem] font-black text-white/[0.02] group-hover:text-orange-500/[0.05] transition-colors leading-none select-none">
      {num}
    </div>
    <div className="space-y-4 relative z-10">
      <span className="text-orange-500 font-mono text-[10px] font-black tracking-widest">STEP {num}</span>
      <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-tight">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed font-light">{desc}</p>
    </div>
    <div className="w-8 h-[1px] bg-orange-500/30 group-hover:w-full transition-all duration-500"></div>
  </div>
);

const Process: React.FC = () => {
  return (
    <section id="process" className="py-20 md:py-32 max-w-[1600px] mx-auto border-t border-white/5">
      <div className="mb-12 md:mb-20 px-6 md:px-12">
        <span className="text-orange-500 font-mono text-[10px] font-black tracking-widest uppercase block mb-4">How We Work</span>
        <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">Simple & Reliable</h2>
      </div>

      {/* Mobile: Horizontal scroll with snap */}
      <div className="lg:hidden relative">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-6 scrollbar-hide">
          {steps.map((step) => (
            <StepCard key={step.num} {...step} />
          ))}
        </div>
        <div className="absolute right-0 top-0 bottom-4 w-24 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none flex items-center justify-end pr-4">
          <div className="flex items-center gap-2 text-orange-500/60">
            <span className="text-[10px] font-mono font-bold tracking-widest">SWIPE</span>
            <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden lg:grid grid-cols-4 gap-px bg-white/5 border border-white/5 mx-12">
        {steps.map((step) => (
          <div key={step.num} className="bg-black p-10 space-y-8 group hover:bg-white/[0.02] transition-colors relative overflow-hidden">
            <div className="absolute -right-4 -bottom-4 text-[8rem] font-black text-white/[0.02] group-hover:text-orange-500/[0.05] transition-colors leading-none select-none">
              {step.num}
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-orange-500 font-mono text-[10px] font-black tracking-widest">STEP {step.num}</span>
              <h3 className="text-2xl font-display font-black uppercase tracking-tight">{step.title}</h3>
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
