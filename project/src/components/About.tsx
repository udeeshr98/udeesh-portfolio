import { useReveal } from '../hooks/useReveal';
import { useEffect, useState } from 'react';
import { Target, TrendingUp, Users, Lightbulb } from 'lucide-react';

const traits = [
  {
    icon: Target,
    title: 'Market Intelligence',
    desc: 'Conducting competitive analysis, industry research, and market watch reporting.',
  },
  {
    icon: TrendingUp,
    title: 'GTM Strategy',
    desc: 'Driving go-to-market planning for Data & AI, Databricks, Snowflake, and Product Analytics.',
  },
  {
    icon: Users,
    title: 'AI Solutions & Commercialization',
    desc: 'Supporting Agentic AI / Custom LLM solution positioning, sales readiness, and adoption.',
  },
  {
    icon: Lightbulb,
    title: 'Pre-Sales & Enablement',
    desc: 'Building proposals, battlecards, sales decks, and training material for enterprise teams.',
  },
];

export default function About() {
  const sectionRef = useReveal();
  const [activeBox, setActiveBox] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBox((prev) => (prev + 1) % traits.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 lg:py-32 relative" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="section-reveal">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: '#f97316' }}
              >
                <span className="w-8 h-px" style={{ backgroundColor: '#f97316' }} />
                About Me
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                <span className="text-white">Bridging AI Innovation</span>
                <br />
                <span style={{ color: '#f97316' }}>with Market Reality</span>
              </h2>

              <div className="space-y-4 text-slate-400 leading-relaxed">
                <p>
                  I'm a GTM strategist and research analyst specializing in enterprise AI adoption,
                  with over ~4 years of experience helping technology companies navigate the intersection
                  of cutting-edge AI capabilities and real-world business outcomes.
                </p>
                <p>
                  My work spans market intelligence, competitive positioning, sales enablement, and
                  agentic AI implementation — bringing a rare blend of technical fluency and commercial
                  acuity that accelerates go-to-market success.
                </p>
                <p>
                  At Indium Software, I work at the intersection of market intelligence, go-to-market strategy,
                  and AI solution commercialization. I help build strategic offerings, support enterprise pre-sales,
                  and turn market insights into business growth.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  'Chennai, India',
                  'Open to Opportunities',
                  'AI GTM Strategy',
                  'Enterprise AI Solutions',
                  'Agentic AI Commercialization',
                  'Cross-Functional Strategy',
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full text-xs font-medium"
                    style={{
                      color: '#9ca3af',
                      backgroundColor: '#1f1f1f',
                      border: '1px solid #374151',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, i) => {
                const Icon = trait.icon;
                const isActive = activeBox === i;
                return (
                  <div
                    key={trait.title}
                    className="trait-card rounded-xl p-5"
                    style={{
                      background: isActive
                        ? 'rgba(251, 146, 60, 0.22)'
                        : 'rgba(251, 146, 60, 0.08)',
                      border: isActive
                        ? '1px solid rgba(251, 146, 60, 0.65)'
                        : '1px solid rgba(251, 146, 60, 0.2)',
                      boxShadow: isActive
                        ? '0 20px 45px rgba(251, 146, 60, 0.25), 0 0 0 1px rgba(251, 146, 60, 0.15), inset 0 1px 0 rgba(255,255,255,0.06)'
                        : 'none',
                      transform: isActive ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                      transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      position: 'relative',
                      overflow: 'hidden',
                      cursor: 'default',
                    }}
                  >
                    {isActive && (
                      <div
                        style={{
                          position: 'absolute',
                          inset: 0,
                          background:
                            'radial-gradient(circle at 50% 0%, rgba(251, 146, 60, 0.22) 0%, transparent 70%)',
                          pointerEvents: 'none',
                        }}
                      />
                    )}

                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                      style={{
                        background: isActive
                          ? 'rgba(251, 146, 60, 0.32)'
                          : 'rgba(251, 146, 60, 0.15)',
                        border: isActive
                          ? '1px solid rgba(251, 146, 60, 0.55)'
                          : '1px solid rgba(251, 146, 60, 0.3)',
                        boxShadow: isActive ? '0 0 18px rgba(251, 146, 60, 0.45)' : 'none',
                        transform: isActive ? 'scale(1.15) rotate(6deg)' : 'scale(1) rotate(0deg)',
                        transition: 'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      }}
                    >
                      <Icon size={20} className="text-white" />
                    </div>

                    <h3
                      className="text-base font-semibold mb-2 transition-colors duration-300"
                      style={{ color: isActive ? '#ffffff' : '#e2e8f0' }}
                    >
                      {trait.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed transition-colors duration-300"
                      style={{ color: isActive ? '#cbd5e1' : '#94a3b8' }}
                    >
                      {trait.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .trait-card:hover {
          background: rgba(251, 146, 60, 0.22) !important;
          border-color: rgba(251, 146, 60, 0.65) !important;
          box-shadow: 0 20px 45px rgba(251, 146, 60, 0.25), 0 0 0 1px rgba(251, 146, 60, 0.15), inset 0 1px 0 rgba(255,255,255,0.06) !important;
          transform: translateY(-8px) scale(1.02) !important;
        }
      `}</style>
    </section>
  );
}