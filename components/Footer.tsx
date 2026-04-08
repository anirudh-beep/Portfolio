'use client'

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-card-border/30 py-16 px-4 mt-24">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gradient-text mb-4">Portfolio</h3>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Showcasing innovative projects and technical excellence across
              multiple domains.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#projects" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Projects
                </a>
              </li>
              <li>
                <a href="#about" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-foreground/60 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/anirudh-beep"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-card/50 hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 rounded-lg bg-card/50 hover:bg-primary/10 text-foreground/70 hover:text-primary transition-all"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-card-border/20 mb-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/50">
          <p>&copy; {currentYear} Anirudh&apos;s Portfolio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
