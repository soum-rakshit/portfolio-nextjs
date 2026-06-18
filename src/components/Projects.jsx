import { useRef, useEffect, useState } from 'react'

export const projectsData = [
    {
      id: 'deckgen-ai',
      title: 'DeckGen - AI Presentation Generator',
      subtitle: 'AI Presentation Platform',
      iconClass: 'devicon-react-original colored',
      shortDescription: 'Built a full-stack AI presentation platform converting plain-text prompts into complete slide decks with titles, content, and speaker notes.',
      longDescription: 'Orchestrated async slide generation via Inngest background jobs; implemented OAuth (Google + GitHub) via Better Auth and one-click .pptx export via PptxGenJS using Gemini via the Vercel AI SDK.',
      features: [
        'AI slide deck generation from plain-text prompts',
        'Gemini integration via Vercel AI SDK with structured outputs',
        'Async background jobs orchestrated by Inngest',
        'One-click .pptx export via PptxGenJS'
      ],
      tech: [
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'React', icon: 'devicon-react-original colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'Prisma', icon: 'devicon-nodejs-plain colored' }
      ],
      github: 'https://github.com/soum-rakshit/deckgen-ai'
    },
    {
      id: 'lumina-planner',
      title: 'Lumina - AI-Powered Task Planner',
      subtitle: 'Full-Stack Task Planner',
      iconClass: 'devicon-nextjs-original',
      shortDescription: 'Full-stack task planner with interactive analytics, animated UI, and Clerk-managed auth with Next.js App Router.',
      longDescription: 'Features interactive analytics via Recharts and animated UI via Framer Motion. Architecting an AI Planning Assistant that analyzes goals and timeline to auto-generate personalized task plans.',
      features: [
        'Interactive data analytics with Recharts',
        'Animated UI components powered by Framer Motion',
        'Clerk-managed authentication with Next.js App Router',
        'AI Planning Assistant for auto-generated task plans'
      ],
      tech: [
        { name: 'Next.js', icon: 'devicon-nextjs-original' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'TailwindCSS', icon: 'devicon-tailwindcss-original colored' }
      ],
      github: 'https://github.com/soum-rakshit/lumina',
      deployed: 'https://lumina-wrfw-nine.vercel.app'
    },
    {
      id: 'ride-hailing',
      title: 'Ride-Hailing Platform',
      subtitle: 'Uber Clone',
      iconClass: 'devicon-nodejs-plain colored',
      shortDescription: 'End-to-end ride-booking platform with real-time GPS tracking via Google Maps API and Socket.io bidirectional events.',
      longDescription: 'Implemented real-time GPS tracking for route rendering, fare estimation, and dynamic ETA. Built JWT authentication with role-based flows for Rider and Captain, using a normalized MongoDB schema.',
      features: [
        'Real-time vehicle position tracking with Socket.io',
        'Optimized route rendering via Google Maps integration',
        'Custom dual-role JWT verification (driver vs. rider)',
        'Normalized MongoDB schemas with full RESTful API'
      ],
      tech: [
        { name: 'NodeJS', icon: 'devicon-nodejs-plain colored' },
        { name: 'Express', icon: 'devicon-express-original' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Socket.io', icon: 'devicon-socketio-original' }
      ],
      github: 'https://github.com/soum-rakshit/Uber'
    },
    {
      id: 'ide-agent',
      title: 'IDE Agent',
      subtitle: 'Autonomous AI Development Terminal',
      iconClass: 'devicon-javascript-plain colored',
      shortDescription: 'Terminal-based autonomous coding agent accepting a single prompt to plan, scaffold, write code, run verification, and self-correct.',
      longDescription: 'An LLM-driven software engineering agent that handles project setups, file edits, package installations, and builds. The engine features an execution sandbox that feeds terminal logs and error traces back into the correction cycle.',
      features: [
        'Iterative self-correction loop fed by terminal stdout/stderr',
        'Sandboxed task executing and setup scripts processing',
        'Automatic dependency management and package resolution',
        'Natural-language requirements mapping'
      ],
      tech: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
        { name: 'Shell Scripting', icon: 'devicon-bash-plain' },
        { name: 'OpenAI API', icon: 'devicon-react-original' }
      ],
      github: 'https://github.com/soum-rakshit'
    }
  ]

export default function Projects({ onSelectProject }) {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)



  const totalItems = projectsData.length

  useEffect(() => {
    const sectionEl = sectionRef.current
    if (!sectionEl) return

    let lastScrollTime = 0

    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        const now = Date.now()
        // Throttle wheel inputs to transition slides one by one
        if (now - lastScrollTime < 180) {
          if ((e.deltaY > 0 && activeIndex < totalItems - 1) || (e.deltaY < 0 && activeIndex > 0)) {
            e.preventDefault()
          }
          return
        }

        // Scroll down: slide horizontally to the right
        if (e.deltaY > 0 && activeIndex < totalItems - 1) {
          e.preventDefault()
          setActiveIndex((prev) => prev + 1)
          lastScrollTime = now
        }
        // Scroll up: slide horizontally to the left
        else if (e.deltaY < 0 && activeIndex > 0) {
          e.preventDefault()
          setActiveIndex((prev) => prev - 1)
          lastScrollTime = now
        }
      }
    }

    sectionEl.addEventListener('wheel', handleWheel, { passive: false })
    return () => sectionEl.removeEventListener('wheel', handleWheel)
  }, [activeIndex, totalItems])

  const nextSlide = () => {
    if (activeIndex < totalItems - 1) setActiveIndex((prev) => prev + 1)
  }

  const prevSlide = () => {
    if (activeIndex > 0) setActiveIndex((prev) => prev - 1)
  }

  return (
    <section ref={sectionRef} id="projects" className="py-24 border-b border-white/5 bg-bg-dark overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="reveal-on-scroll">
          <h2 className="text-[36px] font-heading font-extrabold text-center animated-heading">Projects Gallery</h2>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-[600px] mx-auto mb-12">
            Click arrows to navigate, or scroll vertically over this section. Click center card for details.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full py-10 flex items-center justify-center reveal-on-scroll">
          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide}
            className={`absolute left-2 md:left-6 z-20 w-12 h-12 rounded-full bg-bg-card border border-white/10 text-white flex items-center justify-center transition-all duration-300 shadow-lg font-bold ${activeIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:scale-105 active:scale-95'}`}
            aria-label="Previous Project"
            disabled={activeIndex === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide}
            className={`absolute right-2 md:right-6 z-20 w-12 h-12 rounded-full bg-bg-card border border-white/10 text-white flex items-center justify-center transition-all duration-300 shadow-lg font-bold ${activeIndex === totalItems - 1 ? 'opacity-30 cursor-not-allowed' : 'cursor-pointer hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:scale-105 active:scale-95'}`}
            aria-label="Next Project"
            disabled={activeIndex === totalItems - 1}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>

          {/* Sliding Track Viewport */}
          <div className="w-full overflow-hidden py-4">
            <div 
              className="flex gap-8 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) w-max relative"
              style={{
                '--card-width': 'min(380px, calc(100vw - 96px))',
                '--card-gap': '32px',
                left: '50%',
                transform: `translate3d(calc(-${activeIndex} * (var(--card-width) + var(--card-gap)) - var(--card-width) / 2), 0, 0)`
              }}
            >
              {projectsData.map((project, idx) => {
                const isActive = idx === activeIndex
                return (
                  <div
                    key={project.id}
                    className={`flex-none bg-bg-card border rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${
                      isActive 
                        ? 'border-emerald-500/60 scale-105 shadow-[0_20px_40px_rgba(16,185,129,0.15)] opacity-100 z-10' 
                        : 'border-white/5 scale-95 opacity-35 z-0 pointer-events-auto'
                    }`}
                    style={{ width: 'var(--card-width)' }}
                    onClick={() => {
                      if (isActive) {
                        onSelectProject(project)
                      } else {
                        setActiveIndex(idx)
                      }
                    }}
                  >
                    <div className="p-8 flex flex-col h-full">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl">
                          <i className={project.iconClass}></i>
                        </span>
                        {isActive && (
                          <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                            Specs <i className="devicon-telegram-plain text-[10px]"></i>
                          </span>
                        )}
                      </div>
                      <h3 className="text-[22px] font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-xs text-amber-400 font-medium mb-3">
                        {project.subtitle}
                      </p>
                      <p className="text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.slice(0, 3).map((t, i) => (
                          <span key={i} className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-xs text-slate-400">
                            {t.name}
                          </span>
                        ))}
                        {project.tech.length > 3 && (
                          <span className="bg-white/5 border border-white/10 px-2.5 py-1 rounded-full text-xs text-slate-400">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
