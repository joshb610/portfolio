import { useState, useEffect } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_LINKS = [
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
]

const SECTION_IDS = ['about', 'experience', 'projects', 'education', 'contact']

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-900/95 backdrop-blur-md border-b border-indigo-500/10 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      {/* Desktop nav — fully centered */}
      <div className="hidden md:flex items-center justify-center gap-8 px-8 py-4">
        {NAV_LINKS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`nav-link text-sm font-medium transition-colors ${
              activeSection === id
                ? 'text-indigo-400 active'
                : 'text-slate-400 hover:text-slate-100'
            }`}
          >
            {label}
          </button>
        ))}
        <a
          href="https://github.com/joshb610"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline !py-2 !px-4 text-sm"
        >
          GitHub
        </a>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex items-center justify-between px-8 py-4">
        <span className="text-sm font-semibold text-slate-300">Menu</span>
        <button
          className="text-slate-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-slate-900/98 border-t border-slate-800 px-8 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => { scrollTo(id); setMenuOpen(false) }}
              className="text-left text-slate-300 hover:text-indigo-400 transition-colors font-medium"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
