import React from 'react';

const Process: React.FC = () => {
  const steps = [
    { num: '01', title: 'Get in Touch', desc: 'Call or message us for a friendly chat about what you need fixed or installed.' },
    { num: '02', title: 'Clear Pricing', desc: 'We provide a fair, honest quote with no hidden extras, so you know exactly what to expect.' },
    { num: '03', title: 'Expert Work', desc: 'Our qualified engineer carries out the job with precision, safety, and respect for your home.' },
    { num: '04', title: 'Clean & Tidy', desc: 'We test everything thoroughly and always leave your space exactly as we found it.' }
  ];

  return (
    <section id="process" className="py-20 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto border-t border-white/5">
      <div className="mb-12 md:mb-20">
         <span className="text-orange-500 font-mono text-[10px] font-black tracking-widest uppercase block mb-4">How We Work</span>
         <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">Simple & Reliable</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {steps.map((step) => (
          <div key={step.num} className="glass-card p-8 md:p-10 space-y-8 group relative overflow-hidden rounded-xl">
            <div className="absolute -right-4 -bottom-4 text-7xl md:text-[8rem] font-black text-white/[0.02] group-hover:text-orange-500/[0.05] transition-colors leading-none select-none">
              {step.num}
            </div>
            <div className="space-y-4 relative z-10">
              <span className="text-orange-500 font-mono text-[10px] font-black tracking-widest">STEP {step.num}</span>
              <h3 className="text-xl md:text-2xl font-display font-black uppercase tracking-tight">{step.title}</h3>
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