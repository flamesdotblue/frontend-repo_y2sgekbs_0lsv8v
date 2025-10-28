import React from 'react';
import { Star, Award } from 'lucide-react';

const team = [
  {
    name: 'Dr. Amelia Hart, DDS',
    role: 'Cosmetic & Restorative',
    bio: 'Known for precision and artistry, Dr. Hart blends advanced techniques with a gentle touch.',
    avatar: 'https://images.unsplash.com/photo-1557296387-5358ad7997bb?q=80&w=680&auto=format&fit=crop',
  },
  {
    name: 'Dr. Leo Bennett, DMD',
    role: 'Implants & Surgery',
    bio: 'A leader in implantology with a focus on long-term function and aesthetics.',
    avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=680&auto=format&fit=crop',
  },
  {
    name: 'Dr. Priya Rao, DDS',
    role: 'Family & Preventative',
    bio: 'Beloved by families, Dr. Rao makes dentistry approachable for all ages.',
    avatar: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=680&auto=format&fit=crop',
  },
];

export default function Team() {
  return (
    <section id="team" className="relative w-full py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900">Meet Your Care Team</h2>
          <p className="mt-3 text-slate-600">Experience, empathy, and results—our clinicians are dedicated to your comfort and confidence.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((m) => (
            <div key={m.name} className="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
              <div className="h-52 w-full overflow-hidden">
                <img src={m.avatar} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-slate-900">{m.name}</h3>
                  <div className="flex items-center gap-1 text-amber-500">
                    <Star size={16} fill="#f59e0b" className="text-amber-500" />
                    <Star size={16} fill="#f59e0b" className="text-amber-500" />
                    <Star size={16} fill="#f59e0b" className="text-amber-500" />
                    <Star size={16} fill="#f59e0b" className="text-amber-500" />
                    <Star size={16} fill="#f59e0b" className="text-amber-500" />
                  </div>
                </div>
                <p className="text-sky-700 font-medium mt-1">{m.role}</p>
                <p className="text-slate-600 text-sm mt-2">{m.bio}</p>
                <div className="mt-4 inline-flex items-center gap-2 text-xs text-slate-500"><Award size={14}/> Board certified</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
