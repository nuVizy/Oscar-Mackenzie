import React, { useEffect } from 'react';

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "D. HAWORTH",
      date: "FEB 2025",
      text: "Oscar did a fantastic job installing our new Worcester Bosch boiler. He was punctual, explained everything clearly, and the pipework is like a work of art. Highly recommend for anyone in the Valley."
    },
    {
      name: "SARAH P.",
      date: "JAN 2025",
      text: "We had a persistent leak that two other plumbers couldn't find. Oscar traced it in 20 minutes and fixed it on the spot. Very professional and reasonably priced."
    },
    {
      name: "JAMES RITSON",
      date: "DEC 2024",
      text: "Full bathroom renovation completed to an incredibly high standard. Oscar manages the whole process brilliantly. The finish is showroom quality."
    },
    {
      name: "MRS. GREGSON",
      date: "NOV 2024",
      text: "Annual boiler service was carried out thoroughly. It's great to have a local engineer who is actually reliable and leaves the house tidy."
    }
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
    <section id="reviews" className="bg-white/[0.01] border-y border-white/5 py-16 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-12">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16 lg:gap-20">
          <div className="lg:col-span-4 space-y-6 sm:space-y-8 md:space-y-12 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4 animate-on-scroll animate-fade-in-up">
              <span className="text-orange-500 font-mono text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest block">Customer Testimonials</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black uppercase tracking-tighter leading-none italic">Verified Reviews</h2>
            </div>

            <div className="flex flex-col items-center lg:items-start space-y-3 sm:space-y-4 animate-on-scroll animate-fade-in-up delay-200">
              <div className="flex text-orange-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-[10px] sm:text-xs font-mono text-gray-500 tracking-widest uppercase">Excellent 5.0 Rating</span>
            </div>

            <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed max-w-xs mx-auto lg:mx-0 animate-on-scroll animate-fade-in-up delay-300">
              Honest feedback from local residents in the Rossendale Valley and surrounding areas.
            </p>
          </div>

          <div className="lg:col-span-8 space-y-5 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
              {reviews.map((rev, i) => (
                <div key={i} className="p-6 sm:p-8 md:p-10 bg-black border border-white/5 group hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden animate-on-scroll animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="absolute top-0 left-0 w-1 h-0 bg-orange-500 group-hover:h-full transition-all duration-500"></div>

                  <div className="flex justify-between items-start mb-4 sm:mb-6">
                    <div className="space-y-1">
                      <span className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-white group-hover:text-orange-500 transition-colors">{rev.name}</span>
                      <div className="flex text-orange-500/50 scale-75 origin-left">
                        {[...Array(5)].map((_, starI) => (
                          <svg key={starI} className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                      </div>
                    </div>
                    <span className="text-[8px] sm:text-[9px] font-mono text-gray-700">{rev.date}</span>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base font-light text-gray-400 leading-relaxed italic">
                    "{rev.text}"
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-6 sm:pt-8 flex justify-center lg:justify-end animate-on-scroll animate-fade-in-up delay-400">
              <a
                href="https://www.google.com/search?q=O+Mackenzie+Services+Rossendale+reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 sm:space-x-4 px-6 sm:px-8 py-3 sm:py-4 border border-white/10 hover:border-orange-500 text-[9px] sm:text-[10px] font-black uppercase tracking-widest transition-all group active:scale-95"
              >
                <span>Read More on Google</span>
                <svg className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;