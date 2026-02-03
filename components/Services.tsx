import React from 'react';

const ServiceCard: React.FC<{
  title: string;
  desc: string;
  tags: string[];
  image: string;
  isWide?: boolean;
}> = ({ title, desc, tags, image, isWide }) => (
  <div className={`group relative overflow-hidden border border-white/5 bg-black p-6 md:p-12 hover:border-orange-500/50 transition-all duration-500 flex-shrink-0 w-[85vw] snap-start lg:w-auto lg:flex-shrink ${isWide ? 'lg:col-span-2' : 'lg:col-span-1'}`}>
    <div className="relative z-10 space-y-6 md:space-y-8 h-full flex flex-col justify-between">
      <div className="space-y-4 md:space-y-6">
        <h3 className="text-2xl md:text-4xl font-display font-black uppercase tracking-tighter leading-tight group-hover:text-orange-500 transition-colors">
          {title}
        </h3>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed font-light">
          {desc}
        </p>
      </div>

      <div className="space-y-4 md:space-y-6">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-white/[0.03] border border-white/5 text-[8px] md:text-[9px] font-black tracking-widest uppercase text-gray-500 group-hover:text-orange-400 transition-colors">
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

const services = [
  {
    title: "Boiler Services",
    desc: "Expert installation and yearly servicing to keep your home warm. We are Gas Safe registered and specialists in Worcester Bosch and Ideal systems.",
    tags: ['Installation', 'Repair', 'Servicing'],
    image: "https://images.pexels.com/photos/6530539/pexels-photo-6530539.jpeg",
    isWide: true
  },
  {
    title: "Heating Maintenance & Servicing",
    desc: "Regular boiler and heating system maintenance to ensure reliability. Extend the life of your system.",
    tags: ['Maintenance', 'Servicing', 'Reliability'],
    image: "https://images.pexels.com/photos/8961157/pexels-photo-8961157.jpeg"
  },
  {
    title: "Radiator Installation & Repair",
    desc: "Central heating radiator installation, repair, and maintenance. Keep your home warm and efficient.",
    tags: ['Installation', 'Repair', 'Maintenance'],
    image: "https://images.pexels.com/photos/5797903/pexels-photo-5797903.jpeg"
  },
  {
    title: "Heating Solutions",
    desc: "Efficient underfloor heating and system cleaning (power flushing) to make your radiators hotter and save you money on bills.",
    tags: ['Underfloor', 'Power Flush', 'Radiators'],
    image: "https://images.pexels.com/photos/2431653/pexels-photo-2431653.jpeg",
    isWide: true
  },
  {
    title: "New Bathrooms",
    desc: "Beautiful bathroom transformations. We handle everything from the initial plumbing to the final tiling and luxury fixtures.",
    tags: ['Design', 'Tiling', 'Full Reno'],
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&q=80&w=800",
    isWide: true
  },
  {
    title: "Tap & Fitting Replacements",
    desc: "Modern tap and fitting replacements to update your kitchen or bathroom. We install quality fixtures that last.",
    tags: ['Taps', 'Fittings', 'Installation'],
    image: "https://images.pexels.com/photos/7061662/pexels-photo-7061662.jpeg"
  },
  {
    title: "Toilet Installation & Repair",
    desc: "Complete toilet services including repairs, replacements, and installations. Same-day fixes for common issues.",
    tags: ['Installation', 'Repair', 'Replacement'],
    image: "https://images.pexels.com/photos/7031608/pexels-photo-7031608.jpeg"
  },
  {
    title: "Leak Detection & Repair",
    desc: "Expert leak detection and repair services to prevent water damage and save on your bills. We find hidden leaks fast.",
    tags: ['Detection', 'Repair', 'Prevention'],
    image: "https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg",
    isWide: true
  },
  {
    title: "Plumbing Repairs",
    desc: "Professional plumbing repair services for all types of issues. From minor drips to major water damage, we diagnose and fix problems quickly.",
    tags: ['Repairs', 'Diagnostics', 'Water Damage'],
    image: "https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg"
  },
  {
    title: "General Plumbing Services",
    desc: "Full range of plumbing services including renovations, new installations, and system upgrades.",
    tags: ['Renovations', 'Installations', 'Upgrades'],
    image: "https://images.pexels.com/photos/4792509/pexels-photo-4792509.jpeg"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 max-w-[1600px] mx-auto">
      <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 px-6 md:px-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <span className="text-orange-500 font-mono text-xs font-bold">OUR SERVICES</span>
            <div className="h-px w-20 bg-orange-500/30"></div>
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter">What We Do</h2>
        </div>
        <p className="text-sm md:text-base text-gray-500 max-w-sm">
          High-quality plumbing and heating for every part of your home.
        </p>
      </div>

      {/* Mobile: Horizontal scroll with snap */}
      <div className="lg:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 px-6 scrollbar-hide">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="flex items-center justify-center gap-2 text-orange-500/60 mt-4">
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[10px] font-mono font-bold tracking-widest">SWIPE TO EXPLORE</span>
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Desktop: Grid layout */}
      <div className="hidden lg:grid grid-cols-3 gap-6 px-12">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
