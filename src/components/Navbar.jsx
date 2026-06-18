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
          className="md:hidden bg-transparent border-none text-slate-100 text-2xl cursor-pointer flex items-center gap-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <i className={mobileMenuOpen ? 'devicon-git-plain' : 'devicon-github-original'}></i>
          <span className="text-sm font-medium">Menu</span>
        </button>

        <nav className="flex items-center">
          <ul className={`md:flex gap-8 list-none m-0 p-0 ${mobileMenuOpen ? 'absolute top-[70px] left-0 w-full bg-bg-dark border-b border-white/5 p-6 flex flex-col gap-4' : 'hidden'}`}>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-2 block ${
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
