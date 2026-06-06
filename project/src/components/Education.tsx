import { useReveal } from '../hooks/useReveal';
import { GraduationCap, Award, BookOpen, Calendar, Zap, Medal, Trophy } from 'lucide-react';
import type { ComponentType } from 'react';

const education = [
  {
    degree: 'M.B.A (HR & Operations)',
    institution: 'SRM University',
    year: '2024',
    cgpa: 'CGPA: 9.3',
    honors: 'Gold Medalist – First Class with Distinction',
  },
  {
    degree: 'B.E (Electronics & Communication Engineering)',
    institution: 'Jeppiaar Engineering College',
    year: '2019',
    cgpa: 'CGPA: 8.37',
    honors: 'First Class',
  },
];

const certifications = [
  { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', year: '2024' },
  { name: 'Product Marketing Alliance Core', issuer: 'PMA', year: '2023' },
  { name: 'CFA Level I', issuer: 'CFA Institute', year: '2021' },
  { name: 'Google Analytics Certified', issuer: 'Google', year: '2023' },
  { name: 'Pragmatic Marketing Certified', issuer: 'Pragmatic Institute', year: '2022' },
  { name: 'LangChain AI Developer', issuer: 'LangChain Academy', year: '2024' },
];

interface Achievement {
  icon: ComponentType<{ size?: number; className?: string }>;
  metric: string;
  label: string;
  context: string;
  color: string;
}

const achievements: Achievement[] = [
  {
    icon: Trophy,
    metric: 'Rise & Shine',
    label: 'Award',
    context: 'Excellence in GTM Strategy & Project Management at Indium Software',
    color: 'from-sky-400/20 to-sky-600/5',
  },
  {
    icon: Zap,
    metric: 'Agility in Action',
    label: 'Recognition',
    context: 'Recognized for adaptability across strategic functions at Indium Software.',
    color: 'from-blue-400/20 to-blue-600/5',
  },
  {
    icon: Medal,
    metric: 'Gold Medalist',
    label: 'MBA Excellence',
    context: 'Gold Medalist in MBA from SRM University',
    color: 'from-cyan-400/20 to-cyan-600/5',
  },
  {
    icon: Award,
    metric: 'Best BDA',
    label: 'Award',
    context: 'Recognized for generating ₹60 Lakhs in revenue at BYJU’S',
    color: 'from-sky-300/20 to-sky-500/5',
  },
];

export default function Education() {
  const sectionRef = useReveal();

  return (
    <section id="education" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="section-reveal">
          {/* Education */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-sky-400" />
                Education
                <span className="w-8 h-px bg-sky-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Academic Background</h2>
            </div>

            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-sky-400/60 via-sky-500/20 to-transparent" />

              <div className="space-y-10">
                {education.map((edu) => (
                  <div key={edu.degree} className="relative pl-16">
                    <div className="absolute left-0 top-5 flex items-center justify-center">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 shadow-[0_0_20px_rgba(14,165,233,0.25)] backdrop-blur-sm">
                        <GraduationCap size={18} className="text-sky-400" />
                      </div>
                    </div>

                    <div className="glass rounded-2xl p-7 card-hover border border-sky-500/10">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-sky-400 text-sm font-medium">{edu.institution}</p>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 md:justify-end">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                            <Calendar size={12} />
                            {edu.year}
                          </span>
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-500/10 border border-sky-500/20 text-sky-300">
                            {edu.cgpa}
                          </span>
                        </div>
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/5">
                        <div className="inline-flex items-start gap-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 px-4 py-3 text-sm text-emerald-300">
                          <Award size={16} className="mt-0.5 flex-shrink-0" />
                          <span>{edu.honors}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Awards */}
          <div className="mb-20">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-sky-400" />
                Awards &amp; Recognition
                <span className="w-8 h-px bg-sky-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Industry Recognition
              </h2>
              <p className="text-slate-400 mt-3 max-w-xl mx-auto">
                A selection of awards and recognition that reflect leadership, adaptability, and impact across career stages.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {achievements.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label + item.metric}
                    className="relative glass rounded-2xl p-6 md:p-8 card-hover overflow-hidden group"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                    />
                    <div className="relative z-10">
                      <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center mb-4">
                        <Icon size={18} className="text-sky-400" />
                      </div>
                      <div className="text-xl md:text-2xl font-bold text-gradient mb-1">
                        {item.metric}
                      </div>
                      <div className="text-sm font-semibold text-white mb-2">{item.label}</div>
                      <p className="text-xs text-slate-500 leading-relaxed">{item.context}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-sky-400" />
                Certifications
                <span className="w-8 h-px bg-sky-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Certifications</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="glass rounded-xl p-5 card-hover flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/15 flex items-center justify-center flex-shrink-0">
                    <BookOpen size={14} className="text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white leading-tight">{cert.name}</h3>
                    <p className="text-xs text-sky-400 mt-0.5">{cert.issuer}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{cert.year}</p>
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