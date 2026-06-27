import { useReveal } from '../hooks/useReveal';
import { MapPin, Calendar, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface Role {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  logo: string;
  current?: boolean;
}

const roles: Role[] = [
  {
  title: 'Analyst - Sales Strategy, GTM & Growth Professional',
  company: 'Indium Software (Strategy Office)',
  period: 'July 2024 — Present',
  location: 'Chennai, India',
  logo: '/logos/indium.png',
  current: true,
  description:
    'Served as a strategic advisor to clients and leadership teams, conducting market intelligence, competitive benchmarking, and discovery workshops to identify business needs and delivering actionable recommendations for AI adoption.',
  highlights: [
    'Drove market and competitor intelligence to identify high-potential opportunities refine sales strategic plays,  identify customer needs, buying signals, and growth opportunities and GTM execution.',
    'Partnered with sales, product, delivery, and leadership teams to support the full commercial lifecycle from lead generation, solution positioning and opportunity discovery to customer onboarding, product adoption, post-sales growth & value realization.',
    'Built customer success roadmaps, enablement assets, and AI solution narratives that improved time-to-value and strengthened customer relationships thereby improving customer health and expansion',
    'Delivered executive-ready insights & reports, thought leadership, and strategic recommendations to support growth, retention, and scalable business decisions.',
  ],
},
  {
  title: 'Senior Business Development Associate - Customer Success, Product Adoption & Advisory Specialist',
  company: "BYJU'S (Think & Learn Pvt. Ltd.)",
  period: 'June 2019 — May 2021',
  location: 'Bangalore, India',
  logo: '/logos/byjus.png',
  description:
    "Managed the end-to-end customer lifecycle for 50+ customers per month, leading consultative discovery, product demonstrations, onboarding, and post-sales engagement to understand customer needs, recommended tailored learning solutions, and achieve an average conversion rate of ~60%.",
  highlights: [
    "Delivered personalized product demonstrations that communicated product value, addressed customer concerns, and enabled informed purchasing decisions.",
    "Facilitated onboarding and customer enablement sessions by sharing platform best practices, usage governance, and adoption techniques, encouraging key users to champion product adoption and maximize long-term value.",
    "Facilitated customer onboarding and enablement sessions by educating users on platform best practices, effective usage governance, and adoption techniques while encouraging key users to champion product adoption, helping customers maximize value and long-term engagement.",
    "Strengthening customer satisfaction & retention through proactive bi-weekly follow-ups, resolving product usage challenges, driving feature adoption, and serving as a trusted advisor throughout the customer journey.",
    "Leveraged Lead Squared CRM manages customer interactions, track engagement across the customer lifecycle, maintain accurate account records, and support data-driven sales and customer engagement activities.",
    "Collaborated with marketing teams to create targeted customer communication materials while analyzing customer feedback, market trends, and buying behavior to improve customer engagement and support development initiatives.",
  ],
},
];

export default function Experience() {
  const sectionRef = useReveal();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-24 lg:py-32 relative" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div ref={sectionRef} className="section-reveal">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase mb-4" style={{ color: '#F97316' }}>
              <span className="w-8 h-px" style={{ backgroundColor: '#F97316' }} />
              Work Experience
              <span className="w-8 h-px" style={{ backgroundColor: '#F97316' }} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Career Journey</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {roles.map((role, index) => {
              const isExpanded = expandedIndex === index;

              return (
                <div
                  key={role.company + role.period}
                  className={`group rounded-2xl border overflow-hidden transform transition-all duration-500 ease-out ${
                    isExpanded
                      ? 'border-orange-500/30 -translate-y-2 scale-[1.02] shadow-[0_22px_50px_rgba(249,115,22,0.18)]'
                      : 'border-orange-500/15 hover:-translate-y-3 hover:scale-[1.04] hover:border-orange-500/35 hover:shadow-[0_24px_60px_rgba(249,115,22,0.2)]'
                  }`}
                  style={{
                    background: 'linear-gradient(135deg, #7c2d12 0%, #431407 48%, #000000 100%)',
                    boxShadow: isExpanded
                      ? '0 18px 45px rgba(249,115,22,0.14)'
                      : '0 10px 30px rgba(0,0,0,0.35)',
                  }}
                >
                  <div className="p-5 md:p-6 cursor-pointer" onClick={() => toggleCard(index)}>
                    <div className="flex items-start gap-5">
                      <div className="w-28 h-28 md:w-32 md:h-32 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                        <img
                          src={role.logo}
                          alt={`${role.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-1 min-w-0 pt-1">
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div>
                            <h3 className="text-sm md:text-base font-semibold text-white leading-snug mb-1 transition-colors duration-300 group-hover:text-orange-100">
                              {role.title}
                            </h3>
                            <p className="text-sm text-orange-300 font-medium">{role.company}</p>
                          </div>

                          {role.current && (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.3)] flex-shrink-0">
                              Current
                            </span>
                          )}
                        </div>

                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                          <div className="flex items-center gap-1.5 text-xs text-slate-300/70">
                            <Calendar size={12} />
                            {role.period}
                          </div>
                          <div className="flex items-center gap-1.5 text-xs text-slate-300/70">
                            <MapPin size={12} />
                            {role.location}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 pt-4 border-t border-white/10 flex justify-end">
                      <button
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                          isExpanded
                            ? 'text-orange-300 bg-orange-500/10 border border-orange-500/25'
                            : 'text-orange-300 hover:text-orange-200 hover:bg-orange-500/10 border border-transparent hover:border-orange-500/20'
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(index);
                        }}
                      >
                        {isExpanded ? 'Hide Details' : 'View My Work'}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    </div>
                  </div>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-5" />

                      <p className="text-sm text-slate-300 leading-relaxed mb-4">
                        {role.description}
                      </p>

                      <ul className="space-y-2.5">
                        {role.highlights.map((highlight, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-2.5 text-sm text-slate-300 leading-relaxed"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0 mt-2" />
                            {highlight}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 pt-4 border-t border-white/10 flex justify-end">
                        <button
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-orange-300 bg-orange-500/10 border border-orange-500/25 transition-all duration-300 hover:bg-orange-500/15 hover:text-orange-200"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleCard(index);
                          }}
                        >
                          Hide Details
                          <ChevronDown
                            size={14}
                            className="transition-transform duration-300 rotate-180"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}