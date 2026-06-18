import { useState } from 'react'

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] backdrop-blur-md bg-bg-dark/75 border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 flex justify-between items-center h-[70px]">
        <div className="font-heading text-[22px] font-extrabold tracking-tight">
          <span className="text-slate-100">Soumyadeep Rakshit</span>
        </div>

        <button
          className="md:hidden bg-transparent border-none text-slate-100 cursor-pointer flex items-center gap-2 outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-6 flex items-center justify-center">
            {/* Hamburger Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className={`absolute transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></svg>
            {/* Close Icon (X) */}
            <svg xmlns="http://www.w3.org/2000/svg" className={`absolute transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </div>
          <span className="text-sm font-medium tracking-wide w-10 text-left">{mobileMenuOpen ? 'Close' : 'Menu'}</span>
        </button>

        <nav className="flex items-center">
          <ul className={`absolute md:static top-[70px] left-0 w-full md:w-auto bg-bg-dark md:bg-transparent border-b md:border-none border-white/5 p-6 md:p-0 flex flex-col md:flex-row gap-4 md:gap-8 list-none m-0 shadow-xl md:shadow-none transition-all duration-300 ease-in-out origin-top ${
            mobileMenuOpen 
              ? 'opacity-100 translate-y-0 visible pointer-events-auto' 
              : 'opacity-0 -translate-y-4 invisible pointer-events-none md:opacity-100 md:translate-y-0 md:visible md:pointer-events-auto'
          }`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-2 block w-max ${
                    activeSection === link.id
                      ? 'text-white after:w-full'
                      : 'text-slate-400 hover:text-white after:w-0'
                  } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-gradient-to-r after:from-emerald-400 after:to-amber-400 after:transition-all after:duration-300 hover:after:w-full`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
