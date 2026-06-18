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



  const [activeSection, setActiveSection] = useState('home')
  const [selectedProject, setSelectedProject] = useState(null)
  const [modalAnimation, setModalAnimation] = useState('up')

  const handleNextProject = () => {
    if (!selectedProject) return
    const currentIndex = projectsData.findIndex(p => p.id === selectedProject.id)
    if (currentIndex !== -1 && currentIndex < projectsData.length - 1) {
      setModalAnimation('left')
      setSelectedProject(projectsData[currentIndex + 1])
    }
  }

  const handlePrevProject = () => {
    if (!selectedProject) return
    const currentIndex = projectsData.findIndex(p => p.id === selectedProject.id)
    if (currentIndex > 0) {
      setModalAnimation('right')
      setSelectedProject(projectsData[currentIndex - 1])
    }
  }

  const currentIndex = selectedProject ? projectsData.findIndex(p => p.id === selectedProject.id) : -1;
  const hasNext = currentIndex !== -1 && currentIndex < projectsData.length - 1;
  const hasPrev = currentIndex !== -1 && currentIndex > 0;

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
        <Projects onSelectProject={(p) => { setModalAnimation('up'); setSelectedProject(p); }} />
        <Skills />
        <Contact />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          projects={projectsData}
          initialProjectId={selectedProject.id}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
