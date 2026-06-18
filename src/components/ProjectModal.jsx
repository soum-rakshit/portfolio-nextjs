import { useEffect, useState } from 'react'

export default function ProjectModal({ project, onClose, onNext, onPrev }) {
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    // Disable document body scrolling when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      // Re-enable document body scrolling when modal is closed
      document.body.style.overflow = ''
    }
  }, [])

  if (!project) return null

  const handleClose = () => {
    setIsClosing(true)
    setTimeout(() => {
      onClose()
    }, 350)
  }

  return (
    <div 
      className={`fixed inset-0 w-full h-full bg-black/85 backdrop-blur-lg flex justify-center items-center z-[2000] p-6 ${
        isClosing ? 'animate-[fadeOut_0.35s_ease-in_forwards]' : 'animate-[fadeIn_0.3s_ease-out]'
      }`} 
      onClick={handleClose}
    >
      {/* Floating Close Button */}
      <button 
        className="fixed top-6 right-6 md:top-8 md:right-8 bg-bg-dark/80 border border-white/10 text-white w-12 h-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-500 transition-all duration-300 z-[2100] font-bold shadow-lg" 
        onClick={handleClose} 
        aria-label="Close modal"
      >
        ✕
      </button>

      {/* Left Arrow Button */}
      {onPrev && (
        <button 
          className="fixed left-2 md:left-8 top-1/2 -translate-y-1/2 bg-bg-dark/80 border border-white/10 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300 z-[2100] font-bold shadow-lg text-xl"
          onClick={(e) => { e.stopPropagation(); onPrev(); }}
          aria-label="Previous project"
        >
          ←
        </button>
      )}

      {/* Right Arrow Button */}
      {onNext && (
        <button 
          className="fixed right-2 md:right-8 top-1/2 -translate-y-1/2 bg-bg-dark/80 border border-white/10 text-white w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center cursor-pointer hover:bg-emerald-500/20 hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-300 z-[2100] font-bold shadow-lg text-xl"
          onClick={(e) => { e.stopPropagation(); onNext(); }}
          aria-label="Next project"
        >
          →
        </button>
      )}

      <div 
        className={`bg-[#0b0c14] border border-emerald-500/20 rounded-[20px] max-w-[800px] w-full max-h-[90vh] overflow-y-auto relative shadow-[0_25px_50px_-12px_rgba(16,185,129,0.25)] ${
          isClosing 
            ? 'animate-[slideOutDown_0.35s_cubic-bezier(0.165,0.84,0.44,1)_forwards]' 
            : 'animate-[slideInUp_0.4s_cubic-bezier(0.165,0.84,0.44,1)]'
        }`} 
        onClick={(e) => e.stopPropagation()}
      >

        <div className="w-full h-[250px] bg-gradient-to-r from-emerald-500/15 to-cyan-500/15 relative flex justify-center items-center overflow-hidden border-b border-white/5">
          <div className="text-[80px] text-emerald-500/30">
            <i className={project.iconClass || "devicon-react-original"}></i>
          </div>
          <div className="absolute bottom-4 right-4 bg-bg-dark/60 px-3 py-1 rounded-full text-xs border border-white/8 text-slate-300">
            Project Specs
          </div>
        </div>

        <div className="p-8 md:p-10 text-left">
          <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-sm font-semibold text-amber-400 mb-6">{project.subtitle}</p>
          
          <div className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
            <p className="mb-6">{project.longDescription}</p>
            {project.features && (
              <>
                <h4 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Key Highlights</h4>
                <ul className="list-none pl-0 space-y-2 mb-6">
                  {project.features.map((feat, idx) => (
                    <li key={idx} className="text-slate-400 text-sm md:text-[15px] flex gap-2">
                      <span className="text-emerald-400">✓</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          <h4 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Technologies Used</h4>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((techItem, index) => (
              <span key={index} className="bg-white/5 border border-white/10 px-3 py-1 rounded-full text-xs text-slate-300 flex items-center gap-1.5">
                {techItem.icon && <i className={techItem.icon}></i>} {techItem.name}
              </span>
            ))}
          </div>

          {project.demoMedia && (
            <>
              <h4 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Demo Media</h4>
              <div className="w-full h-[240px] bg-slate-950 border border-white/5 rounded-xl flex flex-col justify-center items-center gap-3 text-slate-400 mb-8 overflow-hidden">
                {project.demoMedia.type === 'video' ? (
                  <video src={project.demoMedia.url} className="w-full h-full object-cover" controls muted autoPlay loop />
                ) : project.demoMedia.type === 'photo' ? (
                  <img src={project.demoMedia.url} alt="Project Demo" className="w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="text-3xl text-emerald-400">
                      <i className="devicon-telegram-plain"></i>
                    </div>
                    <p className="text-xs tracking-wider uppercase font-semibold text-slate-500">Interactive demo preview simulation</p>
                  </>
                )}
              </div>
            </>
          )}

          <div className="flex gap-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-xs md:text-sm font-semibold rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-slate-400 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
                <i className="devicon-github-original text-base"></i> GitHub Repo
              </a>
            )}
            {project.deployed && (
              <a href={project.deployed} target="_blank" rel="noopener noreferrer" className="px-6 py-3 text-xs md:text-sm font-semibold rounded-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white hover:shadow-lg hover:shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
                Live Demo <i className="devicon-telegram-plain text-base"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
