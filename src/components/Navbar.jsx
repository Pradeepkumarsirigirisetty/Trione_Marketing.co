import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Why Trione', href: '#why' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/95 backdrop-blur-md shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <img
              src="/logo_no.png"
              alt="Trione Marketing.co"
              className="h-9 w-auto object-contain"
            />
            <span className="text-xl font-bold gradient-text tracking-tight">Trione Marketing.co</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-sm px-4 py-2 rounded-lg bg-violet-600 hover:bg-violet-500 transition-colors duration-200 font-medium btn-glow"
            >
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-navy-800/98 backdrop-blur-md border-t border-white/5 px-4 pb-4 pt-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-white/70 hover:text-white border-b border-white/5 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="block mt-4 text-center py-2 rounded-lg bg-violet-600 hover:bg-violet-500 text-sm font-medium transition-colors"
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  )
}
