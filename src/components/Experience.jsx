export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-white/5 bg-bg-dark">
      <div className="container mx-auto px-6">
        <div className="reveal-on-scroll">
          <h2 className="text-[36px] font-heading font-extrabold text-center animated-heading">Professional Experience</h2>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-[600px] mx-auto mb-16">
            Real-world production engineering and technical achievements.
          </p>
        </div>

        <div className="relative max-w-[800px] mx-auto">
          {/* Vertical line timeline */}
          <div className="absolute top-0 left-[32px] w-[2px] h-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent"></div>

          <div className="timeline-item pl-20 relative mb-12 reveal-on-scroll">
            <div className="absolute left-[20px] top-[6px] w-[26px] h-[26px] rounded-full bg-bg-dark border-4 border-emerald-500 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <div className="bg-bg-card border border-white/5 p-8 rounded-2xl hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.06)] hover:translate-x-1 transition-all duration-300">
              <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                <h3 className="text-xl font-bold text-white">Full Stack Engineer</h3>
                <span className="text-sm font-semibold text-emerald-400">Present</span>
              </div>
              <div className="text-base text-cyan-400 font-semibold mb-4">Agrenix</div>
              <ul className="list-none p-0 space-y-2.5">
                <li className="relative pl-5 text-slate-400 text-sm md:text-[15px] before:content-['▹'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">
                  Architected and built an enterprise-grade Unified Agent Registry & Audit System for high-frequency telemetry tracking.
                </li>
                <li className="relative pl-5 text-slate-400 text-sm md:text-[15px] before:content-['▹'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">
                  Implemented a Split-Write Strategy: routed structured agent metadata to PostgreSQL and high-volume audit logs to MongoDB using the Bucket Pattern.
                </li>
                <li className="relative pl-5 text-slate-400 text-sm md:text-[15px] before:content-['▹'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">
                  Built an Auto-Registration Engine that scans repositories to automatically detect agentic behavior.
                </li>
                <li className="relative pl-5 text-slate-400 text-sm md:text-[15px] before:content-['▹'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">
                  Integrated a bulk CSV ingestion pipeline and fuzzy search combining SQL (ILIKE) and NoSQL ($regex) filters.
                </li>
                <li className="relative pl-5 text-slate-400 text-sm md:text-[15px] before:content-['▹'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">
                  Designed a high-contrast React 19 + Vite + Tailwind frontend design system.
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item pl-20 relative mb-12 reveal-on-scroll">
            <div className="absolute left-[20px] top-[6px] w-[26px] h-[26px] rounded-full bg-bg-dark border-4 border-emerald-500 z-10 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
            <div className="bg-bg-card border border-white/5 p-8 rounded-2xl hover:border-emerald-500/40 hover:shadow-[0_10px_30px_rgba(16,185,129,0.06)] hover:translate-x-1 transition-all duration-300">
              <div className="flex justify-between items-baseline mb-2 flex-wrap gap-2">
                <h3 className="text-xl font-bold text-white">Assistant Manager</h3>
                <span className="text-sm font-semibold text-emerald-400">2025</span>
              </div>
              <div className="text-base text-cyan-400 font-semibold mb-4">Hindustan Zinc Limited (Electrical Engineer)</div>
              <ul className="list-none p-0 space-y-2.5">
                <li className="relative pl-5 text-slate-400 text-sm md:text-[15px] before:content-['▹'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">
                  Boosted solar plant yield to ~115,000 kWh/month by integrating a 320kW inverter and upgrading string connectors.
                </li>
                <li className="relative pl-5 text-slate-400 text-sm md:text-[15px] before:content-['▹'] before:absolute before:left-0 before:text-emerald-500 before:font-bold">
                  Led APFC relay installations at key substations to optimize power factor and achieve maximum electrical efficiency.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
