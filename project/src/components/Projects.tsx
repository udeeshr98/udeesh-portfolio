import { useEffect, useRef, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import {
  Building2,
  Layers,
  Globe,
  Cpu,
  Swords,
  UserSearch,
  Bot,
  Network,
  Search,
  FileText,
  ArrowRight,
  FileSearch,
  Layers3,
} from 'lucide-react';

interface IntelCard {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  image: string;
}

const intelCards: IntelCard[] = [
  { icon: Building2, title: 'Account Coverage', description: 'Conducted account-level research across 50+ target accounts to identify business priorities, growth signals, buying intent, and discovery opportunities for sales outreach.', image: '/logos/account-intelligence.png' },
  { icon: Layers, title: 'Service Line Trends', description: 'Delivered quarterly research on Data & AI, QE, and Product Engineering service lines, tracking emerging market trends, adoption patterns, competitive benchmarks, and best practices across leading organizations.', image: '/logos/service-line-intelligence.png' },
  { icon: Globe, title: 'Industry Shifts', description: 'Produced industry-wide research insights on evolving market trends, strategic shifts, and best-in-class practices adopted by peers on a quarterly basis.', image: '/logos/industry-intelligence.png' },
  { icon: Cpu, title: 'Technology Landscape', description: 'Researched technology landscapes across key domains to identify innovation trends, platform shifts, and enterprise adoption patterns relevant to GTM and solution positioning.', image: '/logos/technology-intelligence.png' },
  { icon: Swords, title: 'Competitive Benchmarking', description: 'Analyzed competitor tech stacks, market positioning, financial performance, strategic developments, and agentic AI adoption to support positioning, benchmarking, and account strategy.', image: '/logos/competitive-intelligence.png' },
  { icon: UserSearch, title: 'Persona & Prospect Mapping', description: 'Built a prospect database of 5,000+ profiles by analyzing company accounts, business context, financials, and decision-maker details including contact names, phone numbers, LinkedIn IDs, and email addresses to enable targeted sales outreach and segmentation.', image: '/logos/persona-intelligence.png' },
];

interface Project {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  outcomes: string[];
  status: 'Live' | 'Completed' | 'In Progress';
}

const projects: Project[] = [
  {
    icon: Bot,
    title: 'Agentic AI as an Exclusive Service Offering',
    description: 'Positioned Agentic AI as a differentiated, client-facing service offering by shaping the market narrative, sales storyline, and commercialization approach around enterprise use cases and strategic adoption.',
    outcomes: ['Drove 2x revenue growth for Indium.', 'Created a client-ready AI service narrative.'],
    status: 'Live',
  },
  {
    icon: Network,
    title: 'Proposal Assist',
    description: 'Drove GTM for an AI-powered proposal support solution designed to improve response quality, standardize enterprise proposals, and accelerate pre-sales execution across client opportunities.',
    outcomes: ['Improved adoption through stronger packaging.', 'Supported faster proposal conversations.'],
    status: 'Live',
  },
  {
    icon: Search,
    title: 'Investment Analyst Assistant',
    description: 'Led GTM positioning for an AI assistant aimed at accelerating market research and investment analysis, framing it as a decision-support solution for business and research teams.',
    outcomes: ["Expanded Indium's AI solution portfolio.", 'Opened new client advisory conversations.'],
    status: 'Completed',
  },
  {
    icon: FileText,
    title: 'Text-to-Insights',
    description: 'Commercialized Text-to-Insights as a generative AI use case that converts unstructured enterprise content into actionable business intelligence, with a focus on practical adoption and business value.',
    outcomes: ['Enabled stronger content-to-value positioning.', 'Improved enterprise sales readiness.'],
    status: 'In Progress',
  },
  {
    icon: FileSearch,
    title: 'Claims Appeal',
    description: 'Drove GTM for an AI-driven workflow solution built around claims review and appeal processing, positioning it as an efficiency-focused enterprise automation offering.',
    outcomes: ['Supported process-focused client pitches.', 'Enabled faster client adoption / shorter sales cycles.'],
    status: 'Completed',
  },
  {
    icon: Layers3,
    title: 'Intelligent Document Processing',
    description: 'Led GTM positioning for an intelligent document processing solution focused on automated extraction, classification, and processing of enterprise documents using AI and machine learning.',
    outcomes: ["Expanded Indium's document AI solution offering.", 'Improved client readiness for transformation discussions.'],
    status: 'In Progress',
  },
];

const statusColors = {
  Live: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/25',
  Completed: 'text-sky-400 bg-sky-400/10 border-sky-400/25',
  'In Progress': 'text-amber-400 bg-amber-400/10 border-amber-400/25',
};

/* ─── Scroll-hijack hook for the GTM section ─── */
function useScrollStep(total: number) {
  const [step, setStep] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      const el = wrapperRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const inView =
        rect.top < window.innerHeight * 0.65 && rect.bottom > window.innerHeight * 0.35;
      if (!inView) return;

      const goingDown = e.deltaY > 0;

      setStep((prev) => {
        const atFirst = prev === 0;
        const atLast = prev === total - 1;
        if ((goingDown && atLast) || (!goingDown && atFirst)) return prev;
        e.preventDefault();
        if (isScrolling.current) return prev;
        isScrolling.current = true;
        setTimeout(() => { isScrolling.current = false; }, 650);
        return Math.min(Math.max(prev + (goingDown ? 1 : -1), 0), total - 1);
      });
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [total]);

  return { step, setStep, wrapperRef };
}

export default function Projects() {
  const sectionRef = useReveal();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCard = intelCards[activeIndex];
  const ActiveIcon = activeCard.icon;

  const { step: projectIndex, setStep: setProjectIndex, wrapperRef } = useScrollStep(projects.length);
  const activeProject = projects[projectIndex];
  const ProjectIcon = activeProject.icon;

  return (
    <section id="projects" className="py-24 lg:py-32 relative" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="section-reveal">

          {/* ── SECTION 1: Market Intelligence (UNCHANGED) ── */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#F97316' }}>
              <span className="w-8 h-px" style={{ backgroundColor: '#F97316' }} />
              My Expertise
              <span className="w-8 h-px" style={{ backgroundColor: '#F97316' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Market Intelligence &amp; Competitive Research
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
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
                    className={`group w-full h-full min-h-[170px] rounded-2xl p-5 border transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center text-center ${
                      isActive
                        ? 'border-orange-400/50 bg-orange-500/15 shadow-[0_0_35px_rgba(249,115,22,0.18)]'
                        : 'border-orange-500/20'
                    }`}
                    style={{
                      background: isActive
                        ? 'linear-gradient(135deg, rgba(251,146,60,0.22) 0%, rgba(255,183,77,0.18) 48%, rgba(0,0,0,0.96) 100%)'
                        : 'linear-gradient(135deg, rgba(255,183,77,0.18) 0%, rgba(255,204,128,0.10) 50%, rgba(0,0,0,0.96) 100%)',
                      boxShadow: isActive
                        ? '0 18px 40px rgba(249,115,22,0.18)'
                        : '0 10px 24px rgba(0,0,0,0.35)',
                    }}
                  >
                    <div className="flex flex-col items-center justify-center gap-3 w-full">
                      <h3 className={`text-lg md:text-xl font-bold leading-tight tracking-tight transition-colors duration-300 max-w-[170px] ${isActive ? 'text-white' : 'text-orange-200 group-hover:text-white'}`}>
                        {card.title}
                      </h3>
                      <div className="flex items-center gap-1 text-xs font-medium text-orange-200 group-hover:text-white transition-colors">
                        <span>Explore</span>
                        <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div
              className="rounded-3xl border border-orange-500/15 overflow-hidden h-full shadow-2xl"
              style={{ background: 'linear-gradient(135deg, #7c2d12 0%, #431407 48%, #000000 100%)' }}
            >
              <div className="relative h-56 sm:h-64 lg:h-[360px] overflow-hidden">
                <img
                  key={activeIndex}
                  src={activeCard.image}
                  alt={activeCard.title}
                  className="w-full h-full object-cover animate-fadeIn"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute bottom-5 left-6 right-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-300/30 flex items-center justify-center">
                      <ActiveIcon size={18} className="text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{activeCard.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6 lg:p-8" style={{ background: 'linear-gradient(135deg, #431407 0%, #1f0a06 52%, #000000 100%)' }}>
                <p key={`desc-${activeIndex}`} className="text-sm sm:text-base text-slate-200 leading-relaxed animate-fadeIn">
                  {activeCard.description}
                </p>
              </div>
            </div>
          </div>

          {/* ── SECTION 2: GTM Scroll-Driven Reveal ── */}
          <div className="mt-28 text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#F97316' }}>
              <span className="w-8 h-px" style={{ backgroundColor: '#F97316' }} />
              AI SOLUTION STRATEGY, COMMERCIALIZATION &amp; ADOPTION
              <span className="w-8 h-px" style={{ backgroundColor: '#F97316' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Bringing AI Solutions from Discovery to Market
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Leading client discovery, solution shaping, cross-functional coordination, commercialization assets, and adoption enablement to turn AI use cases into market-ready business outcomes
            </p>
          </div>

          {/* Scroll-hijack wrapper */}
          <div ref={wrapperRef} className="relative">
            <div className="grid lg:grid-cols-[300px_1fr] gap-8 lg:gap-12 items-start">

              {/* Left sticky nav — all 6 titles always visible */}
              <div className="lg:sticky lg:top-24 self-start space-y-3">
                {projects.map((project, index) => {
                  const isActive = projectIndex === index;
                  return (
                    <button
                      key={project.title}
                      onClick={() => setProjectIndex(index)}
                      className={`w-full text-left rounded-2xl px-5 py-4 border transition-all duration-300 ${
                        isActive
                          ? 'border-orange-400/60 bg-orange-500/15 shadow-[0_0_30px_rgba(249,115,22,0.16)]'
                          : 'border-orange-500/15 bg-white/5 hover:bg-orange-500/8'
                      }`}
                    >
                      <div className={`text-sm md:text-base font-semibold transition-colors leading-snug ${isActive ? 'text-white' : 'text-orange-100'}`}>
                        {project.title}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Right panel — only active card, slides in on each scroll step */}
              <div className="lg:sticky lg:top-24 self-start" style={{ minHeight: '380px' }}>
                <div
                  key={projectIndex}
                  className="w-full rounded-3xl border p-7 md:p-8 animate-slideIn"
                  style={{
                    borderColor: 'rgba(249,115,22,0.45)',
                    background:
                      'linear-gradient(135deg, rgba(255,183,77,0.18) 0%, rgba(255,204,128,0.10) 50%, rgba(0,0,0,0.96) 100%)',
                    boxShadow: '0 18px 40px rgba(249,115,22,0.16)',
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-orange-500/20 border border-orange-300/30 flex items-center justify-center flex-shrink-0">
                        <ProjectIcon size={22} className="text-white" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{activeProject.title}</h3>
                    </div>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full border whitespace-nowrap ${statusColors[activeProject.status]}`}>
                      {activeProject.status}
                    </span>
                  </div>
                  <p className="text-slate-200 text-base leading-relaxed mb-6">
                    {activeProject.description}
                  </p>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-3">Impact</div>
                    <ul className="space-y-2">
                      {activeProject.outcomes.map((o, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                          <ArrowRight size={14} className="text-orange-300 flex-shrink-0 mt-1" />
                          {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Progress dots */}
                <div className="flex justify-center gap-2 mt-6">
                  {projects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setProjectIndex(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === projectIndex
                          ? 'w-6 h-2 bg-orange-400'
                          : 'w-2 h-2 bg-orange-400/30 hover:bg-orange-400/60'
                      }`}
                      aria-label={`Go to ${projects[i].title}`}
                    />
                  ))}
                </div>
                <p className="text-center text-xs text-slate-500 mt-3 flex items-center justify-center gap-1">
                  <span>↕</span> Scroll or click a title to navigate
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out both; }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-slideIn { animation: slideIn 0.45s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>
    </section>
  );
}