import { useRef, useEffect, useState } from 'react'

export default function Skills() {
  const sectionRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const skillCategories = [
    {
      title: 'Languages',
      icon: 'devicon-javascript-plain colored',
      skills: [
        { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
        { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },
        { name: 'Python', icon: 'devicon-python-plain colored' },
        { name: 'Java', icon: 'devicon-java-plain colored' },
        { name: 'C++', icon: 'devicon-cplusplus-plain colored' }
      ]
    },
    {
      title: 'Frontend Frameworks',
      icon: 'devicon-react-original colored',
      skills: [
        { name: 'React 19', icon: 'devicon-react-original colored' },
        { name: 'Next.js', icon: 'devicon-nextjs-original' },
        { name: 'TanStack Start', icon: 'devicon-react-original colored' },
        { name: 'React Native', icon: 'devicon-react-original colored' },
        { name: 'TailwindCSS v4', icon: 'devicon-tailwindcss-original colored' },
        { name: 'Framer Motion', icon: 'devicon-react-original colored' }
      ]
    },
    {
      title: 'Backend / APIs',
      icon: 'devicon-nodejs-plain colored',
      skills: [
        { name: 'NodeJS', icon: 'devicon-nodejs-plain colored' },
        { name: 'Bun', icon: 'devicon-bun-plain colored' },
        { name: 'FastAPI', icon: 'devicon-fastapi-plain colored' },
        { name: 'Express.js', icon: 'devicon-express-original' },
        { name: 'Flask', icon: 'devicon-flask-original' },
        { name: 'Socket.io', icon: 'devicon-socketio-original' }
      ]
    },
    {
      title: 'Databases / ORM',
      icon: 'devicon-postgresql-plain colored',
      skills: [
        { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored' },
        { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
        { name: 'Redis', icon: 'devicon-redis-plain colored' },
        { name: 'Prisma', icon: 'devicon-nodejs-plain colored' },
        { name: 'Supabase', icon: 'devicon-supabase-plain colored' }
      ]
    },
    {
      title: 'Auth / DevOps',
      icon: 'devicon-docker-plain colored',
      skills: [
        { name: 'Docker', icon: 'devicon-docker-plain colored' },
        { name: 'Kubernetes', icon: 'devicon-kubernetes-plain colored' },
        { name: 'GitHub Actions', icon: 'devicon-github-original' },
        { name: 'Vercel', icon: 'devicon-vercel-original' },
        { name: 'OAuth 2.0', icon: 'devicon-nodejs-plain colored' }
      ]
    },
    {
      title: 'AI / Event-Driven',
      icon: 'devicon-google-plain colored',
      skills: [
        { name: 'OpenAI API', icon: 'devicon-nodejs-plain colored' },
        { name: 'Gemini AI SDK', icon: 'devicon-google-plain colored' },
        { name: 'Agentic Systems', icon: 'devicon-python-plain colored' },
        { name: 'RAG Pipelines', icon: 'devicon-python-plain colored' },
        { name: 'Inngest', icon: 'devicon-javascript-plain colored' }
      ]
    }
  ]

  const totalItems = skillCategories.length

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
    setActiveIndex((prev) => (prev + 1) % totalItems)
  }

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems)
  }

  return (
    <section ref={sectionRef} id="skills" className="py-24 border-b border-white/5 bg-bg-dark overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="reveal-on-scroll">
          <h2 className="text-[36px] font-heading font-extrabold text-center animated-heading">Technical Skills</h2>
          <p className="text-center text-slate-400 text-sm md:text-base max-w-[600px] mx-auto mb-12">
            Click arrows to navigate infinitely, or scroll vertically over this section to slide horizontally.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full py-10 flex items-center justify-center reveal-on-scroll">
          {/* Left Arrow Button */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-6 z-20 w-12 h-12 rounded-full bg-bg-card border border-white/10 hover:border-emerald-500/40 text-white flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:bg-emerald-500/10 hover:scale-105 active:scale-95 text-lg font-bold"
            aria-label="Previous Skill Category"
          >
            ←
          </button>

          {/* Right Arrow Button */}
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-6 z-20 w-12 h-12 rounded-full bg-bg-card border border-white/10 hover:border-emerald-500/40 text-white flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg hover:bg-emerald-500/10 hover:scale-105 active:scale-95 text-lg font-bold"
            aria-label="Next Skill Category"
          >
            →
          </button>

          {/* Sliding Track Viewport */}
          <div className="w-full overflow-hidden py-4">
            <div 
              className="flex gap-8 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) w-max relative"
              style={{
                '--card-width': 'min(340px, calc(100vw - 96px))',
                '--card-gap': '32px',
                left: '50%',
                transform: `translate3d(calc(-${activeIndex} * (var(--card-width) + var(--card-gap)) - var(--card-width) / 2), 0, 0)`
              }}
            >
              {skillCategories.map((category, idx) => {
                const isActive = idx === activeIndex
                return (
                  <div
                    key={idx}
                    className={`flex-none bg-bg-card border rounded-2xl overflow-hidden transition-all duration-500 ${
                      isActive 
                        ? 'border-emerald-500/60 scale-105 shadow-[0_20px_40px_rgba(16,185,129,0.12)] opacity-100 z-10' 
                        : 'border-white/5 scale-95 opacity-35 z-0'
                    }`}
                    style={{ width: 'var(--card-width)' }}
                    onClick={() => setActiveIndex(idx)}
                  >
                    <div className="p-8 flex flex-col h-full">
                      <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                        <i className={category.icon}></i> {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-2.5">
                        {category.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full text-[13px] text-slate-300 flex items-center gap-2 hover:bg-emerald-500/15 hover:border-emerald-500/40 hover:text-white hover:scale-105 transition-all duration-300"
                          >
                            <i className={skill.icon}></i> {skill.name}
                          </span>
                        ))}
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
