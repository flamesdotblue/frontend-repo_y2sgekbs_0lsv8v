import React from 'react';
import { Tooth, Sparkles, ShieldCheck, Smile, HeartPulse } from 'lucide-react';

const services = [
  {
    icon: Tooth,
    title: 'Preventative Care',
    desc: 'Comprehensive exams, cleanings, and digital X-rays to keep your smile healthy.',
  },
  {
    icon: Sparkles,
    title: 'Cosmetic Dentistry',
    desc: 'Whitening, veneers, and bonding designed to elevate your smile with precision.',
  },
  {
    icon: ShieldCheck,
    title: 'Restorative Solutions',
    desc: 'Crowns, bridges, and implants using premium materials for long-term strength.',
  },
  {
    icon: HeartPulse,
    title: 'Comfort & Sedation',
    desc: 'Anxiety-free visits with gentle sedation options and a calming environment.',
  },
  {
    icon: Smile,
    title: 'Invisalign & Ortho',
    desc: 'Discreet alignment plans tailored to you for a confident, balanced smile.',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Care, Crafted to You</h2>
          <p className="mt-3 text-slate-600">We combine advanced technology with a spa-like experience for the very best in modern dentistry.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-lg transition">
              <div className="h-12 w-12 rounded-xl bg-sky-50 text-sky-700 grid place-items-center group-hover:bg-sky-100 transition">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{desc}</p>
              <div className="mt-4 text-sm font-medium text-sky-700">Learn more →</div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-gradient-to-r from-sky-600 to-sky-500 p-6 text-white flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold">New Patient Special</h3>
            <p className="text-white/90">Exam, X-rays, and cleaning — everything you need for a fresh start.</p>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-4 py-2 font-medium ring-1 ring-white/30 hover:bg-white/20 transition">
            Book your spot
          </a>
        </div>
      </div>
    </section>
  );
}
