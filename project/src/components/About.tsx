import { useReveal } from '../hooks/useReveal';
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

  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="section-reveal">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-4">
                <span className="w-8 h-px bg-sky-400" />
                About Me
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Bridging AI Innovation
                <br />
                <span className="text-gradient">with Market Reality</span>
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
                    className="px-3 py-1.5 rounded-full text-xs font-medium text-slate-300 glass border border-white/8"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {traits.map((trait, i) => {
                const Icon = trait.icon;
                return (
                  <div
                    key={trait.title}
                    className="glass rounded-xl p-5 card-hover"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-sky-400" />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2">{trait.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{trait.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}