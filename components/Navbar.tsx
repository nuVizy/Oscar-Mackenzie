import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
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
                  src="/Logo/oscar_mackenzie_-_logo.png"
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4 md:space-x-12">
            <div className="flex items-center space-x-8">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="group flex flex-col items-center"
                >
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-gray-500 group-hover:text-orange-500 transition-colors">
                    {item.name}
                  </span>
                  <div className="w-0 h-[1px] bg-orange-500 mt-1 transition-all group-hover:w-full"></div>
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex flex-col items-end mr-4">
                <span className="text-[8px] font-mono text-gray-600 uppercase tracking-tighter">Emergency Call</span>
                <span className="text-[12px] md:text-[14px] font-bold text-white tracking-widest">+44 7356 080627</span>
              </div>
              <a
                href="https://wa.me/447356080627"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 md:h-14 px-4 md:px-8 bg-[#25D366] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#20BA5A] transition-all shadow-[0_0_30px_rgba(37,211,102,0.3)] active:scale-95 flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-zinc-950 z-[70] transform transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <div className="flex items-center gap-3">
              <img
                src="/Logo/oscar_mackenzie_-_logo.png"
                alt="O Mackenzie Logo"
                className="h-8 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-wider text-white">O MACKENZIE</span>
                <span className="text-[10px] font-semibold text-zinc-500">Plumbing & Heating</span>
              </div>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center hover:bg-white/5 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Navigation Items */}
          <div className="flex-1 overflow-y-auto">
            <div className="p-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="group block py-4 border-b border-zinc-800 hover:border-orange-500 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-white group-hover:text-orange-500 transition-colors">
                      {item.name}
                    </span>
                    <svg
                      className="w-5 h-5 text-zinc-600 group-hover:text-orange-500 group-hover:translate-x-1 transition-all"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="p-6 space-y-4 border-t border-zinc-800 bg-zinc-900">
            <a
              href="tel:+447356080627"
              className="flex items-center justify-center gap-3 w-full bg-orange-500 hover:bg-orange-400 text-white px-6 py-4 text-sm font-semibold uppercase tracking-wide transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <span>Call: +44 7356 080627</span>
            </a>

            <a
              href="https://wa.me/447356080627"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full border-2 border-[#25D366] bg-[#25D366] hover:bg-[#20BA5A] hover:border-[#20BA5A] text-white px-6 py-4 text-sm font-semibold uppercase tracking-wide transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Message on WhatsApp</span>
            </a>

            <div className="pt-4 text-center">
              <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Available 24/7 for Emergencies</p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <p className="text-sm font-semibold text-white">Open Now</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
