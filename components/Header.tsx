'use client'

import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glassmorphism">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold gradient-text">Portfolio</div>

        {/* Navigation */}
        <div className="hidden md:flex gap-8">
          <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">
            About
          </a>
          <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground/70 hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-card/80 backdrop-blur-md border-t border-card-border/30 md:hidden">
            <div className="flex flex-col gap-4 px-4 py-4">
              <a
                href="#projects"
                className="text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#about"
                className="text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground/70 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
