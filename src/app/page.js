"use client"
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects, { projectsData } from '@/components/Projects'
import ProjectModal from '@/components/ProjectModal'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export default function Home() {

  const [message, setMessage] = useState("")

  useEffect(() => {
    // In Next.js, API routes are on the same domain, so we can just use the relative path.
    fetch(`/api/message`)
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.log("Error fetching message", err))
  }, []) // Added empty dependency array so it doesn't fetch on every render

  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)

  const handleNextProject = () => {
    if (!selectedProject) return
    const currentIndex = projectsData.findIndex(p => p.id === selectedProject.id)
    if (currentIndex !== -1) {
      const nextIndex = (currentIndex + 1) % projectsData.length
      setSelectedProject(projectsData[nextIndex])
    }
  }

  const handlePrevProject = () => {
    if (!selectedProject) return
    const currentIndex = projectsData.findIndex(p => p.id === selectedProject.id)
    if (currentIndex !== -1) {
      const prevIndex = (currentIndex - 1 + projectsData.length) % projectsData.length
      setSelectedProject(projectsData[prevIndex])
    }
  }

  // Initialize scroll-triggered animations
  useScrollReveal()

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar activeSection={activeSection} />
      
      {/* <h2 className="text-center text-3xl font-bold mb-4 mt-50">{message}</h2> */}
      
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Experience />
        <Projects onSelectProject={setSelectedProject} />
        <Skills />
        <Contact />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNext={handleNextProject}
          onPrev={handlePrevProject}
        />
      )}
    </>
  )
}
