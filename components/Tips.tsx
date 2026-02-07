import React, { useEffect } from 'react';

const Tips: React.FC = () => {
  const tips = [
    { title: "Lower Your Bills", desc: "Setting your boiler flow to 60°C helps it run more efficiently and could save you up to 12% on your heating bills." },
    { title: "Keep It Running", desc: "A periodic system flush prevents sludge build-up, keeping your radiators hot and your boiler running smoothly for years." },
    { title: "Smart Control", desc: "Using a smart thermostat like Tado or Hive lets you control heating from your phone, stopping heat being wasted in empty rooms." }
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
    <section id="tips" className="bg-orange-600 py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="text-[10rem] sm:text-[15rem] md:text-[20rem] font-black text-black select-none leading-none tracking-tighter uppercase absolute -bottom-10 sm:-bottom-20 -left-10 sm:-left-20">SAVE</div>
      </div>

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-end">
          <div className="lg:col-span-5 space-y-4 sm:space-y-6 text-center lg:text-left animate-on-scroll animate-fade-in-up">
            <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Expert Advice</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-black text-white uppercase tracking-tighter italic">Home Tips</h2>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {tips.map((tip, i) => (
              <div key={i} className="p-6 sm:p-7 md:p-8 bg-black/20 backdrop-blur-md border border-white/10 space-y-3 sm:space-y-4 group hover:bg-black/30 transition-colors animate-on-scroll animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <span className="text-[9px] sm:text-[10px] font-mono text-white/40 font-bold tracking-widest">TIP 0{i+1}</span>
                <h4 className="text-base sm:text-lg font-black uppercase text-white tracking-tight">{tip.title}</h4>
                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-light">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;