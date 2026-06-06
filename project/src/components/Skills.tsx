import { useEffect, useRef } from 'react';
import { useReveal } from '../hooks/useReveal';

interface Skill {
  name: string;
  level: number;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const skillGroups: SkillGroup[] = [
  {
    category: 'Core Competencies',
    skills: [
      { name: 'Go-to-Market (GTM) Strategy', level: 97 },
      { name: 'AI Solution Commercialization', level: 96 },
      { name: 'Market Intelligence & Competitive Analysis', level: 99 },
      { name: 'Presales & Proposal Development', level: 90 },
      { name: 'Account Mining & Opportunity Discovery', level: 95 },
      { name: 'Sales Enablement & Capability Building', level: 90 },
      { name: 'AI Thought Leadership', level: 85 },
      { name: 'Executive Stakeholder Management', level: 90 },
    ],
  },
];

const tools = [
  'Microsoft Copilot Studio',
  'Microsoft PowerPoint',
  'Microsoft Excel (Advanced)',
  'Basics of Power BI, Tableau, Python',
  'ZoomInfo',
  'Lusha',
  'Apollo.io',
];

function SkillBar({ level, delay = 0 }: { level: number; delay?: number }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('animate'), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden mt-1">
      <div
        ref={barRef}
  className="skill-bar h-full"
  style={{
    width: `${level}%`,
    background: 'linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%)',
    boxShadow: '0 0 12px rgba(56, 189, 248, 0.35)',
  }}
      />
    </div>
  );
}

export default function Skills() {
  const sectionRef = useReveal();

  return (
    <section id="skills" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-radial from-sky-500/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="section-reveal">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-sky-400" />
              Core Competencies
              <span className="w-8 h-px bg-sky-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Skills &amp; Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-12">
            {skillGroups.map((group) => (
              <div key={group.category} className="glass rounded-2xl p-6 card-hover">
                <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-6">
                  {group.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-5">
                  {group.skills.map((skill, i) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                        <span className="text-xs text-slate-500">{skill.level}%</span>
                      </div>
                      <SkillBar level={skill.level} delay={i * 120} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="glass rounded-2xl p-6">
            <h3 className="text-sm font-semibold text-sky-400 uppercase tracking-widest mb-5">
              Tools &amp; Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium text-slate-300 bg-white/4 border border-white/8 hover:border-sky-500/30 hover:text-sky-300 transition-all duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}