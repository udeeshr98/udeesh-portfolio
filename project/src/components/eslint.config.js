import { useReveal } from '../hooks/useReveal';
import { GraduationCap, Calendar, Award } from 'lucide-react';

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  cgpa: string;
  honor: string;
  current?: boolean;
}

const educationData: EducationItem[] = [
  {
    degree: 'M.B.A (HR & Operations)',
    institution: 'SRM Valliammai Engineering College',
    year: '2024',
    cgpa: 'CGPA: 9.3',
    honor: 'Gold Medalist – First Class with Distinction',
  },
  {
    degree: 'B.E (Electronics & Communication Engineering)',
    institution: 'Jeppiaar Engineering College',
    year: '2019',
    cgpa: 'CGPA: 8.37',
    honor: 'First Class',
  },
];

export default function Education() {
  const sectionRef = useReveal();

  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="section-reveal">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-sky-400" />
              Education
              <span className="w-8 h-px bg-sky-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Academic Background</h2>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/60 via-sky-500/20 to-transparent" />

            <div className="space-y-10">
              {educationData.map((item, index) => (
                <div key={index} className="relative pl-16">
                  <div className="absolute left-0 top-4 flex items-center justify-center">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 shadow-[0_0_20px_rgba(14,165,233,0.25)] backdrop-blur-sm">
                      <GraduationCap size={18} className="text-sky-400" />
                    </div>
                  </div>

                  <div className="group glass rounded-2xl border border-sky-500/10 p-6 md:p-7 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-sky-400/25 hover:shadow-[0_18px_45px_rgba(14,165,233,0.12)]">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold text-white leading-snug transition-colors duration-300 group-hover:text-sky-100">
                          {item.degree}
                        </h3>
                        <p className="text-sky-400 font-medium mt-1">{item.institution}</p>
                      </div>

                      <div className="flex flex-wrap items-center gap-2 md:justify-end">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                          <Calendar size={12} />
                          {item.year}
                        </span>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-500/10 border border-sky-500/20 text-sky-300">
                          {item.cgpa}
                        </span>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/5">
                      <div className="inline-flex items-start gap-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-sm text-emerald-300">
                        <Award size={16} className="mt-0.5 flex-shrink-0" />
                        <span>{item.honor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}