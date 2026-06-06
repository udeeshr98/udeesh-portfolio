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
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-navy-800/20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-radial from-sky-500/4 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div ref={sectionRef} className="section-reveal">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-sky-400 text-xs font-semibold tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-sky-400" />
              Contact
              <span className="w-8 h-px bg-sky-400" />
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
              <div className="glass rounded-2xl p-7">
                <h3 className="text-base font-semibold text-white mb-5">Get in Touch</h3>

                <div className="space-y-4">
                  <a href="mailto:udeeshr98@gmail.com" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 border border-sky-500/15 flex items-center justify-center group-hover:bg-sky-500/20 transition-colors">
                      <Mail size={16} className="text-sky-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Email</div>
                      <div className="text-sm text-slate-300 group-hover:text-sky-400 transition-colors">
                        udeeshr98@gmail.com
                      </div>
                    </div>
                  </a>

                  <a href="tel:+919962135283" className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/15 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                      <Phone size={16} className="text-emerald-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Phone No</div>
                      <div className="text-sm text-slate-300 group-hover:text-emerald-400 transition-colors">
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
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/15 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                      <Linkedin size={16} className="text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">LinkedIn</div>
                      <div className="text-sm text-slate-300 group-hover:text-blue-400 transition-colors">
                        linkedin.com/in/udeesh-r-741241168/
                      </div>
                    </div>
                  </a>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-slate-500/10 border border-slate-500/15 flex items-center justify-center">
                      <MapPin size={16} className="text-slate-400" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 mb-0.5">Location</div>
                      <div className="text-sm text-slate-300">Chennai, India</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-7">
                <h3 className="text-sm font-semibold text-white mb-4">Availability</h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: CheckCircle,
                      text: 'Market Intelligence & Competitive Research',
                      color: 'text-emerald-400',
                    },
                    { icon: CheckCircle, text: 'AI Strategic Advisory', color: 'text-emerald-400' },
                    { icon: CheckCircle, text: 'GTM Consulting', color: 'text-emerald-400' },
                    { icon: CheckCircle, text: 'Sales Enablement', color: 'text-emerald-400' },
                    {
                      icon: CheckCircle,
                      text: 'Account Mining & Opportunity Discovery',
                      color: 'text-emerald-400',
                    },
                    {
                      icon: CheckCircle,
                      text: 'Presales & Product Marketing Support',
                      color: 'text-emerald-400',
                    },
                    { icon: Clock, text: 'Full-Time Roles', color: 'text-amber-400' },
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
              <div className="glass rounded-2xl p-7 md:p-10">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle size={32} className="text-emerald-400" />
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
                          className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/6 transition-all"
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
                          className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/6 transition-all"
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
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-sm text-slate-200 focus:outline-none focus:border-sky-500/50 focus:bg-white/6 transition-all appearance-none"
                        style={{ colorScheme: 'dark' }}
                      >
                        <option value="" className="bg-navy-900">
                          Select an option...
                        </option>
                        <option value="market-intelligence" className="bg-navy-900">
                          Market Intelligence & Competitive Research
                        </option>
                        <option value="advisory" className="bg-navy-900">
                          AI Strategic Advisory
                        </option>
                        <option value="gtm" className="bg-navy-900">
                          GTM Consulting
                        </option>
                        <option value="sales-enablement" className="bg-navy-900">
                          Sales Enablement
                        </option>
                        <option value="presales" className="bg-navy-900">
                          Presales & Product Marketing Support
                        </option>
                        <option value="fulltime" className="bg-navy-900">
                          Full-Time Opportunity
                        </option>
                        <option value="other" className="bg-navy-900">
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
                        className="w-full px-4 py-3 rounded-xl bg-white/4 border border-white/8 text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-sky-500/50 focus:bg-white/6 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:bg-sky-500/40 text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25 hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:translate-y-0"
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