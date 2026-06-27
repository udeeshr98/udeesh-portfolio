import { useEffect, useRef, useState } from 'react';
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
      { name: 'Product Adoption & Customer Lifecycle Management', level: 97 },
      { name: 'Discovery Workshops & Needs Analysis', level: 96 },
      { name: 'Executive Stakeholder Management & Customer Engagement/Advisory', level: 99 },
      { name: 'Market Intelligence & Competitive Insights', level: 90 },
      { name: 'Account Mining & Opportunity Discovery', level: 95 },
      { name: 'Strategic Sales Enablement & Capability Building', level: 90 },
      { name: 'AI Thought Leadership & AI Strategic Advisory', level: 85 },
      { name: 'GTM Strategy & Solution Commercialization', level: 90 },
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

function SkillBar({ level, visible }: { level: number; visible: boolean }) {
  return (
    <div className="h-0.5 w-full bg-white/5 rounded-full overflow-hidden mt-1">
      <div
        className="h-full"
        style={{
          width: visible ? `${level}%` : '0%',
          background: 'linear-gradient(90deg, #F97316 0%, #FB923C 100%)',
          boxShadow: '0 0 12px rgba(249, 115, 22, 0.35)',
          transition: 'width 0.9s ease',
        }}
      />
    </div>
  );
}

export default function Skills() {
  const sectionRef = useReveal();
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const total = skillGroups.reduce((acc, group) => acc + group.skills.length, 0);
    let i = 0;

    const interval = setInterval(() => {
      i += 1;
      setVisibleCount(i);
      if (i >= total) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="skills" className="py-24 lg:py-32 relative" style={{ backgroundColor: '#000000' }}>
      <div className="absolute inset-0 bg-gradient-radial from-orange-500/3 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="section-reveal">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4"
              style={{ color: '#F97316' }}
            >
              <span className="w-8 h-px" style={{ backgroundColor: '#F97316' }} />
              Core Competencies
              <span className="w-8 h-px" style={{ backgroundColor: '#F97316' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Skills &amp; Expertise
            </h2>
          </div>

          <div className="grid md:grid-cols-1 gap-6 mb-12">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl p-6 card-hover"
                style={{
                  backgroundColor: '#000000',
                  border: '1px solid rgba(249, 115, 22, 0.15)',
                }}
              >
                <h3
                  className="text-sm font-semibold uppercase tracking-widest mb-6"
                  style={{ color: '#F97316' }}
                >
                  {group.category}
                </h3>

                <div className="grid md:grid-cols-2 gap-5">
                  {group.skills.map((skill, i) => {
                    const visible = visibleCount > i;
                    return (
                      <div
                        key={skill.name}
                        style={{
                          opacity: visible ? 1 : 0,
                          transform: visible ? 'translateY(0)' : 'translateY(14px)',
                          transition: 'opacity 0.5s ease, transform 0.5s ease',
                        }}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-slate-300 font-medium">{skill.name}</span>
                          <span className="text-xs font-medium" style={{ color: '#FB923C' }}>
                            {skill.level}%
                          </span>
                        </div>
                        <SkillBar level={skill.level} visible={visible} />
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div
            className="rounded-2xl p-6"
            style={{
              backgroundColor: '#000000',
              border: '1px solid rgba(249, 115, 22, 0.15)',
            }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest mb-5" style={{ color: '#F97316' }}>
              Tools &amp; Platforms
            </h3>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default"
                  style={{
                    color: '#E4E4E7',
                    backgroundColor: '#18181B',
                    border: '1px solid #3F3F46',
                  }}
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .bg-gradient-radial {
          background-image: radial-gradient(circle at top, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
}