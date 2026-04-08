'use client'

import { GitBranch, Linkedin, Mail, ArrowRight, Code2 } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-card-border/10 mt-32 pt-20 pb-10 px-4 md:px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & CTA */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Code2 size={28} className="text-primary" />
              <span className="text-xl font-bold gradient-text">ARM</span>
            </div>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Building innovative solutions that span across agriculture, gaming, AI, and data science.
            </p>
            <a href="mailto:contact@example.com" className="button-secondary inline-flex items-center gap-2 text-sm group">
              Let&apos;s Work Together
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wide opacity-70">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#projects" className="text-foreground/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wide opacity-70">Follow</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://github.com/anirudh-beep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                aria-label="GitHub"
              >
                <GitBranch size={18} />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-foreground/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group"
                aria-label="Email"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-sm uppercase tracking-wide opacity-70">More</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Resume
                </a>
              </li>
              <li>
                <a href="#" className="text-foreground/70 hover:text-primary transition-colors text-sm inline-flex items-center gap-2 group">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-card-border/0 via-card-border/50 to-card-border/0 my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-foreground/50">
          <p>&copy; {currentYear} Anirudh Reddy Mosra. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground/70 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground/70 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
