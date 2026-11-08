import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ActiveDevPreview } from './pages/ActiveDevPreview';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] text-[#141413]">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/guides/:cityId" element={<ActiveDevPreview />} />
            <Route path="/mission" element={<ActiveDevPreview section="mission" />} />
            <Route path="/membership" element={<ActiveDevPreview section="membership" />} />
            <Route path="/badges" element={<ActiveDevPreview section="badges" />} />
            <Route path="/faqs" element={<ActiveDevPreview section="faqs" />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;

