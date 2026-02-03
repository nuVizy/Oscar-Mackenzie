import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 bg-white/[0.01]">
      <div className="max-w-[1600px] mx-auto">
        <div className="max-w-2xl mx-auto">
          <div className="space-y-12 text-center">
            <div className="space-y-4">
              <span className="text-orange-500 font-mono text-[10px] font-black tracking-widest uppercase block">GET IN TOUCH</span>
              <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">Contact Us</h2>
            </div>

            <p className="text-base md:text-lg text-gray-400 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
              Need a quote or have an emergency? We're here to help you get things sorted quickly.
            </p>

            <div className="space-y-6">
              <a href="tel:07703620023" className="flex items-center justify-center lg:justify-start gap-6 group">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-orange-500 transition-colors flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div className="text-left">
                   <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">Call Us Now</span>
                   <span className="text-2xl font-black group-hover:text-orange-500 transition-colors tracking-tight">07703 620023</span>
                </div>
              </a>

              <a href="mailto:enquiries@omackenzieservices.co.uk" className="flex items-center justify-center lg:justify-start gap-6 group">
                <div className="w-16 h-16 border border-white/10 flex items-center justify-center group-hover:border-orange-500 transition-colors flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div className="text-left min-w-0">
                   <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">Send an Email</span>
                   <span className="text-base md:text-lg font-black group-hover:text-orange-500 transition-colors tracking-tight block truncate">enquiries@omackenzieservices.co.uk</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;