import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-white/[0.01]">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-20">
          <div className="space-y-8 md:space-y-12 text-center lg:text-left">
            <div className="space-y-4">
              <span className="text-blue-500 font-mono text-[10px] md:text-xs font-bold">GET IN TOUCH</span>
              <h2 className="text-5xl md:text-9xl font-display font-black uppercase tracking-tighter leading-none">Contact Us</h2>
            </div>
            
            <p className="text-lg md:text-2xl text-gray-400 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              Need a quote or have an emergency? We're here to help you get things sorted quickly.
            </p>

            <div className="space-y-4 md:space-y-8">
              <a href="tel:07703620023" className="flex items-center justify-center lg:justify-start space-x-6 group">
                <div className="w-16 h-16 md:w-20 md:h-20 border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors flex-shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                   <span className="text-[10px] font-mono text-gray-600 block mb-1">Call Us Now</span>
                   <span className="text-xl md:text-3xl font-black group-hover:text-blue-500 transition-colors tracking-tighter uppercase">07703 620023</span>
                </div>
              </a>

              <a href="mailto:enquiries@omackenzieservices.co.uk" className="flex items-center justify-center lg:justify-start space-x-6 group">
                <div className="w-16 h-16 md:w-20 md:h-20 border border-white/10 flex items-center justify-center group-hover:border-blue-500 transition-colors flex-shrink-0">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="min-w-0">
                   <span className="text-[10px] font-mono text-gray-600 block mb-1">Send an Email</span>
                   <span className="text-sm md:text-2xl font-black group-hover:text-blue-500 transition-colors tracking-tighter lowercase block truncate">enquiries@omackenzieservices.co.uk</span>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-panel p-6 md:p-16 space-y-6 md:space-y-8">
            <h3 className="text-xl md:text-2xl font-display font-bold uppercase">Send a Message</h3>
            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:outline-none focus:border-blue-500 text-sm placeholder:text-gray-800" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" placeholder="07xxx xxxxxx" className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:outline-none focus:border-blue-500 text-sm placeholder:text-gray-800" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">How can we help?</label>
                <textarea placeholder="Tell us about your project or repair..." className="w-full bg-transparent border-b border-white/10 py-3 md:py-4 focus:outline-none focus:border-blue-500 text-sm resize-none h-24 md:h-32 placeholder:text-gray-800"></textarea>
              </div>
              <button className="w-full py-5 md:py-6 bg-white text-black text-[11px] md:text-xs font-black uppercase tracking-[0.4em] hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl">
                Get Your Free Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;