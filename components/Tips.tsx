import React from 'react';

const Tips: React.FC = () => {
  const tips = [
    { title: "Lower Your Bills", desc: "Setting your boiler flow to 60°C helps it run more efficiently and could save you up to 12% on your heating bills." },
    { title: "Keep It Running", desc: "A periodic system flush prevents sludge build-up, keeping your radiators hot and your boiler running smoothly for years." },
    { title: "Smart Control", desc: "Using a smart thermostat like Tado or Hive lets you control heating from your phone, stopping heat being wasted in empty rooms." }
  ];

  return (
    <section id="tips" className="bg-blue-600 py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="text-[15rem] md:text-[20rem] font-black text-black select-none leading-none tracking-tighter uppercase absolute -bottom-20 -left-20">SAVE</div>
      </div>
      
      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-end">
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/60">Expert Advice</span>
            <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter italic">Home Tips</h2>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, i) => (
              <div key={i} className="p-8 bg-black/20 backdrop-blur-md border border-white/10 space-y-4 group hover:bg-black/30 transition-colors">
                <span className="text-[10px] font-mono text-white/40 font-bold tracking-widest">TIP 0{i+1}</span>
                <h4 className="text-lg font-black uppercase text-white tracking-tight">{tip.title}</h4>
                <p className="text-sm text-white/70 leading-relaxed font-light">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tips;