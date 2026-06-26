'use client'

import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#sobre-mi', label: 'SOBRE MÍ' },
  { href: '#servicios', label: 'SERVICIOS' },
  { href: '#clases', label: 'CLASES' },
  { href: '#eventos', label: 'EVENTOS' },
  { href: '#contacto', label: 'CONTACTO' },
]

const WA_NUMBER = '5492617204957'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={`w-full fixed top-0 left-0 z-50 border-b border-surface-variant flex justify-between items-center px-4 md:px-16 transition-all duration-300 ${scrolled ? 'py-2 bg-background' : 'py-4 bg-background/80 backdrop-blur-md'}`}>
        {/* Logo */}
        <div className="font-display text-xl md:text-2xl font-black tracking-tighter text-primary leading-none">
          DANI ALV
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="font-mono text-[10px] tracking-[0.2em] font-bold text-on-surface-variant hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary-container text-on-primary px-5 py-2 font-mono text-[10px] tracking-[0.2em] font-bold hover:bg-primary transition-colors"
          >
            BOOK NOW
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-primary p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="font-display text-3xl font-black tracking-tight text-on-surface-variant hover:text-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
        <a
          href={`https://wa.me/${WA_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-primary-container text-on-primary px-10 py-4 font-mono text-[10px] tracking-[0.2em] font-bold"
        >
          BOOK NOW
        </a>
      </div>
    </>
  )
}
