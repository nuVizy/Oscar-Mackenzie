import React from 'react';

const Areas: React.FC = () => {
  const areas = [
    'Rossendale', 'Bury', 'Rochdale', 'Burnley', 'Blackburn', 
    'Accrington', 'Haslingden', 'Rawtenstall', 'Bacup', 'Ramsbottom'
  ];

  return (
    <section id="areas" className="py-20 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
        <div className="w-full lg:w-1/2 space-y-8 md:space-y-12">
          <div className="space-y-4 text-center lg:text-left">
             <span className="text-orange-500 font-mono text-xs font-bold">COVERAGE</span>
             <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter">Areas We Cover</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed text-center lg:text-left">
            We are based in <span className="text-white font-bold">Rossendale</span> and serve homeowners and businesses across the North West.
          </p>
          <div className="p-6 md:p-8 border-l border-orange-500 bg-white/[0.02]">
            <p className="text-xs font-mono text-gray-600 uppercase tracking-widest">Fast Response</p>
            <p className="text-lg font-bold mt-2">Local engineers ready to help across the Valley.</p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 md:gap-4">
          {areas.map(area => (
            <div key={area} className="p-6 md:p-8 border border-white/5 glass-panel group hover:bg-orange-600 transition-all duration-300">
              <div className="flex items-center space-x-3 md:space-x-4">
                 <div className="w-1.5 h-1.5 bg-orange-500 group-hover:bg-white"></div>
                 <span className="text-[10px] md:text-xs font-black uppercase tracking-widest group-hover:text-white transition-colors">{area}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Areas;