'use client'

import { Menu, X, Code2 } from 'lucide-react'
import { useState } from 'react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 glassmorphism border-b border-card-border/10">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Code2 size={28} className="text-primary" />
          <span className="text-xl font-bold gradient-text hidden sm:inline">ARM</span>
        </div>

        {/* Navigation */}
        <div className="hidden md:flex gap-1">
          <a href="#projects" className="button-ghost">
            Projects
          </a>
          <a href="#about" className="button-ghost">
            About
          </a>
          <a href="#contact" className="button-ghost">
            Contact
          </a>
        </div>

        {/* CTA Button and Mobile Menu */}
        <div className="flex items-center gap-3">
          <a href="mailto:contact@example.com" className="hidden sm:block button-secondary text-sm">
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/70 hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 glassmorphism border-t border-card-border/10 md:hidden animate-fade-in">
            <div className="flex flex-col gap-2 px-4 py-4">
              <a
                href="#projects"
                className="button-ghost justify-start"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </a>
              <a
                href="#about"
                className="button-ghost justify-start"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              <a
                href="#contact"
                className="button-ghost justify-start"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              <a
                href="mailto:contact@example.com"
                className="button-secondary justify-center mt-2"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
