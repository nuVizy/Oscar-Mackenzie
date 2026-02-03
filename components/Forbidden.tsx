import React from 'react';
import { Link } from 'react-router-dom';

export default function Forbidden() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 mb-4" style={{ fontFamily: 'Syncopate, sans-serif' }}>
            403
          </h1>
          <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-8"></div>
        </div>

        <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Syncopate, sans-serif' }}>
          Access Forbidden
        </h2>

        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
          You don't have permission to access this page. If you believe this is an error, please contact us.
        </p>

        <div className="space-y-6">
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,140,0,0.5)]"
          >
            Return Home
          </Link>

          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider" style={{ fontFamily: 'Syncopate, sans-serif' }}>
              Contact Us
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:07877593436"
                className="text-orange-400 hover:text-orange-300 transition-colors duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                07877 593436
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
