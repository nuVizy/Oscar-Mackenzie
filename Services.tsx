import React from 'react';

const ServiceModule: React.FC<{ 
  title: string; 
  desc: string; 
  tags: string[]; 
  image: string;
  isWide?: boolean;
}> = ({ title, desc, tags, image, isWide }) => (
  <div className={`group relative overflow-hidden border border-white/5 bg-black p-6 md:p-12 hover:border-blue-500/50 transition-all duration-500 ${isWide ? 'lg:col-span-2' : 'lg:col-span-1'}`}>
    <div className="relative z-10 space-y-6 md:space-y-8 h-full flex flex-col justify-between">
      <div className="space-y-4 md:space-y-6">
        <h3 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter leading-tight group-hover:text-blue-500 transition-colors">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
          {desc}
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/[0.03] border border-white/5 text-[8px] md:text-[9px] font-black tracking-widest uppercase text-gray-500 group-hover:text-blue-400 transition-colors">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="aspect-[16/9] overflow-hidden bg-gray-900 border border-white/5">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-700"
            onError={(e) => {
              e.currentTarget.src = 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=800';
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 px-6 md:px-12 max-w-[1600px] mx-auto">
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-blue-500 font-mono text-xs font-bold">OUR SERVICES</span>
            <div className="h-px w-20 bg-blue-500/30"></div>
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter">What We Do</h2>
        </div>
        <p className="text-sm md:text-base text-gray-500 max-w-sm">
          High-quality plumbing and heating for every part of your home.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ServiceModule 
          title="Boiler Services"
          desc="Expert installation and yearly servicing to keep your home warm. We are Gas Safe registered and specialists in Worcester Bosch and Ideal systems."
          tags={['Installation', 'Repair', 'Servicing']}
          image="https://images.pexels.com/photos/2310904/pexels-photo-2310904.jpeg"
          isWide
        />
        <ServiceModule 
          title="New Bathrooms"
          desc="Beautiful bathroom transformations. We handle everything from the initial plumbing to the final tiling and luxury fixtures."
          tags={['Design', 'Tiling', 'Full Reno']}
          image="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800"
        />
        <ServiceModule 
          title="General Plumbing"
          desc="No job is too small. We fix leaks, replace taps, repair toilets, and look after your home's water systems with care."
          tags={['Leaks', 'Taps', 'Repairs']}
          image="https://images.pexels.com/photos/586019/pexels-photo-586019.jpeg"
        />
        <ServiceModule 
          title="Heating Solutions"
          desc="Efficient underfloor heating and system cleaning (power flushing) to make your radiators hotter and save you money on bills."
          tags={['Underfloor', 'Power Flush', 'Radiators']}
          image="https://images.pexels.com/photos/6530539/pexels-photo-6530539.jpeg"
          isWide
        />
      </div>
    </section>
  );
};

export default Services;