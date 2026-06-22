import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { GraduationCap, Award, Calendar, Zap, Medal, Trophy } from 'lucide-react';
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


interface Achievement {
  icon: ComponentType<{ size?: number; className?: string }>;
  metric: string;
  label: string;
  context: string;
}


const achievements: Achievement[] = [
  {
    icon: Trophy,
    metric: 'Rise & Shine',
    label: 'Award',
    context: 'Excellence in GTM Strategy & Project Management at Indium Software',
  },
  {
    icon: Zap,
    metric: 'Agility in Action',
    label: 'Recognition',
    context: 'Recognized for adaptability across strategic functions at Indium Software.',
  },
  {
    icon: Award,
    metric: 'Best BDA',
    label: 'Award',
    context: 'Recognized for generating ₹60 Lakhs in revenue at BYJU'S',
  },
  {
    icon: Medal,
    metric: 'Gold Medalist',
    label: 'MBA Excellence',
    context: 'Gold Medalist in MBA from SRM University',
  },
];


export default function Education() {
  const sectionRef = useReveal();
  const [activeAward, setActiveAward] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAward((prev) => (prev + 1) % achievements.length);
    }, 3000);


    return () => clearInterval(interval);
  }, []);


  const activeItem = achievements[activeAward];
  const ActiveIcon = activeItem.icon;


  return (
    <section id="education" className="py-24 lg:py-32 relative bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="section-reveal">
          {/* Education */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-orange-400" />
                Education
                <span className="w-8 h-px bg-orange-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Academic Background</h2>
            </div>


            <div className="max-w-4xl mx-auto relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-orange-400/60 via-orange-500/20 to-transparent" />


              <div className="space-y-10">
                {education.map((edu) => (
                  <div key={edu.degree} className="relative pl-16">
                    <div className="absolute left-0 top-5 flex items-center justify-center">
                      <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-orange-400/30 bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.28)] backdrop-blur-sm">
                        <GraduationCap size={18} className="text-orange-300" />
                      </div>
                    </div>


                    <div className="rounded-2xl p-7 border border-orange-500/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] shadow-[0_0_30px_rgba(249,115,22,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_38px_rgba(249,115,22,0.12)]">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-lg md:text-xl font-semibold text-white mb-1">
                            {edu.degree}
                          </h3>
                          <p className="text-orange-300 text-sm font-medium">{edu.institution}</p>
                        </div>


                        <div className="flex flex-wrap items-center gap-2 md:justify-end">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300">
                            <Calendar size={12} />
                            {edu.year}
                          </span>
                          <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-orange-500/10 border border-orange-500/20 text-orange-200">
                            {edu.cgpa}
                          </span>
                        </div>
                      </div>


                      <div className="mt-5 pt-4 border-t border-white/5">
                        <div className="inline-flex items-start gap-2.5 rounded-xl bg-orange-500/10 border border-orange-400/20 px-4 py-3 text-sm text-orange-200">
                          <Award size={16} className="mt-0.5 flex-shrink-0 text-orange-300" />
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
          <div>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-orange-400" />
                Awards &amp; Recognition
                <span className="w-8 h-px bg-orange-400" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Industry Recognition
              </h2>
              <p className="text-slate-400 mt-3 max-w-xl mx-auto">
                A selection of awards and recognition that reflect leadership, adaptability, and impact across my career stages.
              </p>
            </div>


            <div className="rounded-[32px] border border-orange-500/10 bg-black px-6 py-10 md:px-10 lg:px-12 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-center">
                <div className="flex items-center justify-center">
                  <img
                    src="/logos/awards.png"
                    alt="Awards visual"
                    className="w-[380px] md:w-[500px] lg:w-[620px] max-w-full object-contain drop-shadow-[0_0_70px_rgba(249,115,22,0.14)]"
                  />
                </div>


                <div className="relative min-h-[320px] flex items-center justify-center">
                  <div
                    key={activeAward}
                    className="w-full max-w-[360px] rounded-[28px] border border-orange-300/20 bg-[rgba(255,255,255,0.06)] backdrop-blur-xl px-6 py-6 shadow-[0_0_40px_rgba(249,115,22,0.14)] animate-awardFade"
                  >
                    <div className="w-11 h-11 rounded-2xl bg-orange-500/15 border border-orange-300/20 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(249,115,22,0.12)]">
                      <ActiveIcon size={18} className="text-orange-300" />
                    </div>


                    <div className="text-2xl font-bold text-white leading-tight mb-1">
                      {activeItem.metric}
                    </div>
                    <div className="text-sm font-semibold text-orange-200/90 mb-3">
                      {activeItem.label}
                    </div>
                    <p className="text-sm text-slate-200/75 leading-relaxed">
                      {activeItem.context}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <style>{`
            @keyframes awardFade {
              0% {
                opacity: 0;
                transform: translateY(16px) scale(0.98);
              }
              100% {
                opacity: 1;
                transform: translateY(0) scale(1);
              }
            }


            .animate-awardFade {
              animation: awardFade 0.6s ease-out;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}