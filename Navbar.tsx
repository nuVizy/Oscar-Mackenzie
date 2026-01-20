import React from 'react';

const Navbar: React.FC = () => {
  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'How We Work', id: 'process' },
    { name: 'Reviews', id: 'reviews' },
    { name: 'Areas', id: 'areas' },
    { name: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-12 py-4 md:py-8 pointer-events-none">
      <div className="max-w-[1600px] mx-auto flex items-center justify-between pointer-events-auto">
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 md:space-x-6">
          <button 
            onClick={scrollToTop}
            className="group relative focus:outline-none flex items-center"
          >
            <div className="h-10 md:h-16 w-auto">
              <img 
                src="https://www.omackenzieservices.co.uk/oscar_mackenzie_-_logo.png" 
                alt="O Mackenzie Logo" 
                className="h-full w-auto object-contain brightness-0 invert"
              />
            </div>
          </button>
          
          <div className="hidden xl:flex flex-col border-l border-white/10 pl-6">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white">O MACKENZIE</span>
            <span className="text-[8px] font-bold uppercase tracking-[0.3em] text-gray-500">Plumbing & Heating Specialist</span>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="flex items-center space-x-4 md:space-x-12">
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <a 
                key={item.name} 
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="group flex flex-col items-center"
              >
                <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-blue-500 transition-colors">
                  {item.name}
                </span>
                <div className="w-0 h-[1px] bg-blue-500 mt-1 transition-all group-hover:w-full"></div>
              </a>
            ))}
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="hidden sm:flex flex-col items-end mr-2 md:mr-4">
              <span className="text-[8px] font-mono text-gray-600 uppercase tracking-tighter">Emergency Call</span>
              <span className="text-[12px] md:text-[14px] font-bold text-white tracking-widest">07703 620023</span>
            </div>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="h-10 md:h-14 px-4 md:px-8 bg-blue-600 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] hover:bg-white hover:text-black transition-all shadow-[0_0_30px_rgba(59,130,246,0.3)] active:scale-95 flex items-center"
            >
              Get A Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;