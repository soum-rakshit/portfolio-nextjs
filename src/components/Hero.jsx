import portraitImg from '../assets/portrait.jpg'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-[100px] pb-16 overflow-hidden bg-bg-dark">
      {/* Rectangular blended background portrait */}
      <div className="home-bg-blend">
        <img 
          src={portraitImg.src} 
          alt="" 
          className="w-full h-full object-cover filter contrast-110 brightness-[85%] object-[center_60%]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-[700px] text-left reveal-on-scroll">
          <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider inline-block mb-6 uppercase">
            Full Stack Developer
          </div>
          
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-6">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-white via-slate-400 to-slate-800 bg-clip-text text-transparent inline-block">
              Soumyadeep Rakshit
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-slate-400 max-w-[580px] mb-10 leading-relaxed">
            I'm a Full Stack Developer with a deep interest in building AI applications. I enjoy engineering reliable software systems and creating personal tools that solve real-world problems.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-7 py-3 text-sm font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
              Let's Connect <i className="devicon-telegram-plain text-base"></i>
            </a>
            <a 
              href="https://drive.google.com/file/d/1jcmyUMObi93KMgpPMw96mQvsjPHOfQmE/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 text-sm font-semibold rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-slate-400 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2"
            >
              <i className="devicon-git-plain text-sm text-amber-400"></i>
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
