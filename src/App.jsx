import React from 'react';
import Hero3D from './components/Hero3D';
import Services from './components/Services';
import Team from './components/Team';
import ContactChat from './components/ContactChat';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero3D />
      <Services />
      <Team />
      <ContactChat />
      <footer className="border-t border-slate-200 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
          <div>© {new Date().getFullYear()} DiamondCare Dental. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#team" className="hover:text-slate-900">Team</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
