import React from 'react';
import Spline from '@splinetool/react-spline';
import { Phone, CalendarDays, MapPin, Star } from 'lucide-react';

export default function Hero3D() {
  return (
    <section className="relative min-h-[90vh] w-full bg-gradient-to-b from-sky-50 via-white to-white overflow-hidden">
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-sky-600 text-white grid place-items-center font-bold">DC</div>
            <span className="text-lg font-semibold tracking-tight">DiamondCare Dental</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#team" className="hover:text-slate-900">Our Team</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="tel:+1234567890" className="hidden sm:flex items-center gap-2 text-sky-700 font-medium">
              <Phone size={18} /> (123) 456-7890
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-4 py-2 text-white shadow-sm hover:bg-sky-700 transition">
              <CalendarDays size={18} /> Book Now
            </a>
          </div>
        </div>
      </header>

      <div className="relative z-10 pt-28 md:pt-36">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-1 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-800 ring-1 ring-sky-200">
              <Star size={14} className="text-amber-500" /> Top-rated clinic • Gentle care guaranteed
            </div>
            <h1 className="mt-5 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Bright Smiles, Gentle Care — A Luxury Dental Experience
            </h1>
            <p className="mt-4 text-slate-600 text-base md:text-lg">
              From preventative care to cosmetic excellence, our award-winning team crafts confident smiles
              with the latest technology and a soothing, spa-like atmosphere.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-sky-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-sky-700 transition">
                Reserve Your Visit
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sky-700 font-medium ring-1 ring-slate-200 hover:ring-sky-200 hover:text-sky-800 transition">
                Explore Services
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2"><MapPin size={16} className="text-sky-600"/> 123 Smile Ave, Suite A</div>
              <div className="flex items-center gap-2"><CalendarDays size={16} className="text-sky-600"/> Mon–Sat, 8am–7pm</div>
            </div>
          </div>
          <div className="relative h-[380px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg ring-1 ring-slate-100">
            <Spline scene="https://prod.spline.design/IiR0B3xB8iY9y-Ll/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-sky-100/40"/>
          </div>
        </div>
      </div>
    </section>
  );
}
