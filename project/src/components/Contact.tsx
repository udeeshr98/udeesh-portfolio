import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import {
  Mail,
  Linkedin,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  Clock,
} from 'lucide-react';

export default function Contact() {
  const sectionRef = useReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(249,115,22,0.08),transparent_38%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div ref={sectionRef} className="section-reveal">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-orange-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-orange-400" />
              Contact
              <span className="w-8 h-px bg-orange-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-slate-400 mt-3 max-w-xl mx-auto">
              Open to market intelligence, strategic advisory, GTM consulting engagements,
              and full-time opportunities.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <div className="rounded-2xl p-7 border border-orange-500/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] shadow-[0_0_30px_rgba(249,115,22,0.08)] backdrop-blur-sm">
                <h3 className="text-base font-semibold text-white mb-5">Get in Touch</h3>

                <div className="space-y-4">
                  <a href="mailto:udeeshr98@gmail.com" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <Mail size={16} className="text-orange-300" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Email</div>
                      <div className="text-sm text-slate-300 group-hover:text-orange-300 transition-colors">
                        udeeshr98@gmail.com
                      </div>
                    </div>
                  </a>

                  <a href="tel:+919962135283" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <Phone size={16} className="text-orange-300" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Phone No</div>
                      <div className="text-sm text-slate-300 group-hover:text-orange-300 transition-colors">
                        9962135283
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/udeesh-r-741241168/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                      <Linkedin size={16} className="text-orange-300" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">LinkedIn</div>
                      <div className="text-sm text-slate-300 group-hover:text-orange-300 transition-colors break-all">
                        linkedin.com/in/udeesh-r-741241168/
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                      <MapPin size={16} className="text-orange-300" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Location</div>
                      <div className="text-sm text-slate-300">Chennai, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-7 border border-orange-500/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] shadow-[0_0_30px_rgba(249,115,22,0.08)] backdrop-blur-sm">
                <h3 className="text-sm font-semibold text-white mb-4">Availability</h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: CheckCircle,
                      text: 'Client Discovery & Strategic Advisory',
                      color: 'text-orange-300',
                    },
                    { icon: CheckCircle, text: 'AI Solution Strategy & Commercialization', color: 'text-orange-300' },
                    { icon: CheckCircle, text: 'Market Intelligence & Competitive Insights', color: 'text-orange-300' },
                    { icon: CheckCircle, text: 'GTM Planning & Sales Enablement', color: 'text-orange-300' },
                    {
                      icon: CheckCircle,
                      text: 'Customer Adoption & Enablement',
                      color: 'text-orange-300',
                    },
                    {
                      icon: CheckCircle,
                      text: 'Presales, Collateral & Case Study Development',
                      color: 'text-orange-300',
                    },
                    { icon: Clock, text: 'Full-Time Roles & Strategic Opportunities', color: 'text-amber-300' },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.text} className="flex items-center gap-2.5">
                        <Icon size={14} className={item.color} />
                        <span className="text-sm text-slate-300">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="rounded-2xl p-7 md:p-10 border border-orange-500/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))] shadow-[0_0_35px_rgba(249,115,22,0.08)] backdrop-blur-sm">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-orange-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent</h3>
                    <p className="text-slate-400 text-sm">
                      Thanks for reaching out. I&apos;ll get back to you within 1-2 business days.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Jane Smith"
                          className="w-full px-4 py-3 rounded-xl bg-white/4 border border-orange-500/15 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-orange-400/50 focus:bg-white/6 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-slate-400 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="jane@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-white/4 border border-orange-500/15 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-orange-400/50 focus:bg-white/6 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">
                        Engagement Type
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-orange-500/15 text-sm text-slate-200 focus:outline-none focus:border-orange-400/50 focus:bg-white/6 transition-all appearance-none"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" className="bg-black">
                          Select an option...
                        </option>
                        <option value="market-intelligence" className="bg-black">
                          Market Intelligence & Competitive Research
                        </option>
                        <option value="advisory" className="bg-black">
                          AI Strategic Advisory
                        </option>
                        <option value="gtm" className="bg-black">
                          GTM Consulting
                        </option>
                        <option value="sales-enablement" className="bg-black">
                          Sales Enablement
                        </option>
                        <option value="presales" className="bg-black">
                          Presales & Product Marketing Support
                        </option>
                        <option value="fulltime" className="bg-black">
                          Full-Time Opportunity
                        </option>
                        <option value="other" className="bg-black">
                          Other
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-400 mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell me about your project, goals, or how I can help..."
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-orange-500/15 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-orange-400/50 focus:bg-white/6 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-400 disabled:bg-orange-500/40 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}