import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ServerError from './components/ServerError';
import Forbidden from './components/Forbidden';
import Maintenance from './components/Maintenance';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="relative min-h-screen bg-[#050505] selection:bg-orange-500 selection:text-white">
          <div className="fixed inset-0 z-0 pointer-events-none">
            <div className="absolute top-[20%] right-[10%] w-[40vw] h-[40vw] bg-orange-600/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-[20%] left-[5%] w-[30vw] h-[30vw] bg-orange-900/5 rounded-full blur-[100px]"></div>
            <div className="absolute inset-0 border-x border-white/[0.03] mx-auto max-w-[1600px]"></div>
          </div>

          <Routes>
            <Route path="/500" element={<ServerError />} />
            <Route path="/403" element={<Forbidden />} />
            <Route path="/503" element={<Maintenance />} />
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <div className="pt-[88px] md:pt-[104px]">
                    <Home />
                    <Footer />
                  </div>
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;