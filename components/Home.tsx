import React from 'react';
import Hero from './Hero';
import Services from './Services';
import Process from './Process';
import Reviews from './Reviews';
import Areas from './Areas';
import Tips from './Tips';
import Contact from './Contact';

export default function Home() {
  return (
    <main className="relative z-10">
      <Hero />

      <div className="relative border-y border-white/5 bg-white/[0.01]">
        <Services />
      </div>

      <div>
        <Process />
      </div>

      <div>
        <Reviews />
      </div>

      <div className="border-t border-white/5">
        <Areas />
      </div>

      <div>
        <Tips />
      </div>

      <div>
        <Contact />
      </div>
    </main>
  );
}
