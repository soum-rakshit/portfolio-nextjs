export default function About() {
  return (
    <section id="about" className="py-24 border-b border-white/5 bg-bg-dark">
      <div className="container mx-auto px-6">
        <div className="reveal-on-scroll">
          <h2 className="text-[36px] font-heading font-extrabold text-center animated-heading">About Me</h2>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-[600px] mx-auto mb-16">
            A glimpse into my background, passions, and credentials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-left text-slate-400 space-y-5 text-base leading-relaxed reveal-on-scroll">
            <p>
              I am a Full Stack Developer currently working at Agrenix, where I focus on building reliable distributed systems and AI applications.
            </p>
            <p>
              Outside of work, I have a deep interest in building personal tools. I am developing Lumina, a personal AI planner that gamifies daily tasks based on user input, and DeckGen, a platform that produces high-quality presentation files tailored to user requirements.
            </p>
            <p>
              I am also passionate about algorithmic problem-solving, having solved over 400 DSA problems. During my time at NIT Agartala, I coordinated corporate recruitment drives, assisting with the placement of over 150 students.
            </p>
            <p>
              When I'm not coding, I enjoy traveling and taking photos. You can check out some of my work on my <a href="https://www.instagram.com/rakshit.explores/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors border-b border-emerald-400/30 hover:border-emerald-400 pb-0.5">photography blog on Instagram</a>.
            </p>
          </div>

          <div className="reveal-on-scroll space-y-6">
            <div className="bg-bg-card border border-white/5 p-6 rounded-2xl">
              <div className="flex justify-between items-baseline mb-3 flex-wrap gap-2">
                <span className="text-lg font-bold text-white">NIT Agartala</span>
                <span className="text-sm font-semibold text-amber-400">2021 — 2025</span>
              </div>
              <p className="text-slate-400 text-sm mb-2">B.Tech in Electrical Engineering</p>
              <p className="text-xs text-slate-500"><strong>CGPA:</strong> 8.1 / 10</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-bg-card border border-white/5 p-4 rounded-xl">
                <div className="text-xs text-amber-400 font-bold tracking-wider mb-1 uppercase">Class XII</div>
                <div className="text-lg font-extrabold text-white">86.2%</div>
                <div className="text-xs text-slate-500">CBSE (Hindi H.S.S)</div>
              </div>
              <div className="bg-bg-card border border-white/5 p-4 rounded-xl">
                <div className="text-xs text-emerald-400 font-bold tracking-wider mb-1 uppercase">Class X</div>
                <div className="text-lg font-extrabold text-white">93.6%</div>
                <div className="text-xs text-slate-500">ICSE (Holy Cross)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
