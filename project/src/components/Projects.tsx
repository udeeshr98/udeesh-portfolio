import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import {
  Building2, Layers, Globe, Cpu, Swords, UserSearch,
  Bot, Network, Search, FileText, ArrowRight, FileSearch, Layers3,
} from 'lucide-react';

interface IntelCard {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  image: string;
}

const intelCards: IntelCard[] = [
  {
    icon: Building2,
    title: 'Account Coverage',
    description:
      'Conducted account-level research across 50+ target accounts to identify business priorities, growth signals, buying intent, and discovery opportunities for sales outreach.',
    image: '/logos/account-intelligence.png',
  },
  {
    icon: Layers,
    title: 'Service Line Trends',
    description:
      'Delivered quarterly research on Data & AI, QE, and Product Engineering service lines, tracking emerging market trends, adoption patterns, competitive benchmarks, and best practices across leading organizations.',
    image: '/logos/service-line-intelligence.png',
  },
  {
    icon: Globe,
    title: 'Industry Shifts',
    description:
      'Produced industry-wide research insights on evolving market trends, strategic shifts, and best-in-class practices adopted by peers on a quarterly basis.',
    image: '/logos/industry-intelligence.png',
  },
  {
    icon: Cpu,
    title: 'Technology Landscape',
    description:
      'Researched technology landscapes across key domains to identify innovation trends, platform shifts, and enterprise adoption patterns relevant to GTM and solution positioning.',
    image: '/logos/technology-intelligence.png',
  },
  {
    icon: Swords,
    title: 'Competitive Benchmarking',
    description:
      'Analyzed competitor tech stacks, market positioning, financial performance, strategic developments, and agentic AI adoption to support positioning, benchmarking, and account strategy.',
    image: '/logos/competitive-intelligence.png',
  },
  {
    icon: UserSearch,
    title: 'Persona & Prospect Mapping',
    description:
      'Built a prospect database of 5,000+ profiles by analyzing company accounts, business context, financials, and decision-maker details including contact names, phone numbers, LinkedIn IDs, and email addresses to enable targeted sales outreach and segmentation.',
    image: '/logos/persona-intelligence.png',
  },
];

interface Project {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  outcomes: string[];
  status: 'Live' | 'Completed' | 'In Progress';
}

const projects: Project[] = [
  {
    icon: Bot,
    title: 'Agentic AI as an Exclusive Service Offering',
    subtitle: 'GTM Strategy · Commercialization',
    description:
      'Positioned Agentic AI as a differentiated, client-facing service offering by shaping the market narrative, sales storyline, and commercialization approach around enterprise use cases and strategic adoption.',
    outcomes: [
      'Drove 2x revenue growth for Indium.',
      'Created a client-ready AI service narrative.',
    ],
    status: 'Live',
  },
  {
    icon: Network,
    title: 'Proposal Assist',
    subtitle: 'AI-Powered Sales Support',
    description:
      'Drove GTM for an AI-powered proposal support solution designed to improve response quality, standardize enterprise proposals, and accelerate pre-sales execution across client opportunities.',
    outcomes: [
      'Improved adoption through stronger packaging.',
      'Supported faster proposal conversations.',
    ],
    status: 'Live',
  },
  {
    icon: Search,
    title: 'Investment Analyst Assistant',
    subtitle: 'Market Research · Decision Support',
    description:
      'Led GTM positioning for an AI assistant aimed at accelerating market research and investment analysis, framing it as a decision-support solution for business and research teams.',
    outcomes: [
      'Expanded Indium\'s AI solution portfolio.',
      'Opened new client advisory conversations.',
    ],
    status: 'Completed',
  },
  {
    icon: FileText,
    title: 'Text-to-Insights',
    subtitle: 'Generative AI · Business Intelligence',
    description:
      'Commercialized Text-to-Insights as a generative AI use case that converts unstructured enterprise content into actionable business intelligence, with a focus on practical adoption and business value.',
    outcomes: [
      'Enabled stronger content-to-value positioning.',
      'Improved enterprise sales readiness.',
    ],
    status: 'In Progress',
  },
  {
    icon: FileSearch,
    title: 'Claims Appeal',
    subtitle: 'AI Workflow · Enterprise Operations',
    description:
      'Drove GTM for an AI-driven workflow solution built around claims review and appeal processing, positioning it as an efficiency-focused enterprise automation offering.',
    outcomes: [
      'Supported process-focused client pitches.',
      'Enabled faster client adoption / shorter sales cycles.',
    ],
    status: 'Completed',
  },
  {
    icon: Layers3,
    title: 'Intelligent Document Processing',
    subtitle: 'AI Automation · Document Intelligence',
    description:
      'Led GTM positioning for an intelligent document processing solution focused on automated extraction, classification, and processing of enterprise documents using AI and machine learning.',
    outcomes: [
      'Expanded Indium\'s document AI solution offering.',
      'Improved client readiness for transformation discussions.',
    ],
    status: 'In Progress',
  },
];

const statusColors = {
  Live: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
  Completed: 'text-sky-400 bg-sky-400/10 border-sky-400/25',
  'In Progress': 'text-amber-400 bg-amber-400/10 border-amber-400/25',
};

export default function Projects() {
  const sectionRef = useReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = intelCards[activeIndex];
  const ActiveIcon = activeCard.icon;

  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="section-reveal">

          {/* ── Market Intelligence Section ── */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-sky-400" />
              Market Intelligence &amp; Competitive Research
              <span className="w-8 h-px bg-sky-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market Intelligence &amp; Competitive Research
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
              I specialize in transforming raw market data into actionable intelligence that supports
              account strategy, GTM planning, competitive positioning, and persona-based sales execution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr items-stretch">
              {intelCards.map((card, index) => {
                const Icon = card.icon;
                const isActive = activeIndex === index;
                return (
                  <button
                    key={card.title}
                    onClick={() => setActiveIndex(index)}
                    className={`group w-full h-full min-h-[170px] rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-0.5 flex flex-col items-center justify-center text-center ${
                      isActive
                        ? 'glass border-sky-500/35 shadow-lg shadow-sky-500/15 bg-sky-500/8'
                        : 'glass border-white/5 hover:border-sky-500/20 hover:bg-sky-500/4'
                    }`}
                  >
                    <div className="flex flex-col items-center justify-center gap-3 w-full">
                      <h3 className={`text-lg md:text-xl font-bold leading-tight tracking-tight transition-colors duration-300 max-w-[170px] ${
                        isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'
                      }`}>
                        {card.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-medium text-sky-400 group-hover:text-sky-300 transition-colors">
                        <span>Explore</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="glass rounded-3xl border border-sky-500/10 overflow-hidden h-full shadow-2xl">
              <div className="relative h-56 sm:h-64 lg:h-[360px] overflow-hidden">
                <img
                  key={activeIndex}
                  src={activeCard.image}
                  alt={activeCard.title}
                  className="w-full h-full object-cover animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/95 via-navy-950/35 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
                      <ActiveIcon size={18} className="text-sky-400" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {activeCard.title}
                    </h3>
                  </div>
                </div>
              </div>
              <div className="p-6 lg:p-8">
                <p
                  key={`desc-${activeIndex}`}
                  className="text-sm sm:text-base text-slate-300 leading-relaxed animate-fadeIn"
                >
                  {activeCard.description}
                </p>
              </div>
            </div>
          </div>

          {/* ── GTM Projects Section ── */}
          <div className="mt-28 text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-sky-400" />
              GTM Driven Agentic AI Solutions &amp; Commercialization Initiatives
              <span className="w-8 h-px bg-sky-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Driving Market Activation &amp; Commercialization
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Strategic initiatives across Agentic AI, Data &amp; AI offerings, and enterprise adoption.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="glass rounded-2xl p-7 card-hover flex flex-col group"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500/20 to-blue-600/10 border border-sky-500/20 flex items-center justify-center">
                      <Icon size={22} className="text-sky-400" />
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${statusColors[project.status]}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-xs font-medium text-sky-400 uppercase tracking-wide mb-4">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">
                    {project.description}
                  </p>
                  <div className="mb-1">
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Impact
                    </div>
                    <ul className="space-y-1.5">
                      {project.outcomes.map((o, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                          <ArrowRight size={12} className="text-sky-400 flex-shrink-0 mt-0.5" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out both;
        }
      `}</style>
    </section>
  );
}