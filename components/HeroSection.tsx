'use client'

import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in-up">
        {/* Main Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
          <span className="gradient-text">Build</span> the Future
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
          Innovative solutions in agriculture technology, interactive gaming, AI systems,
          and data intelligence. Crafted with precision and passion.
        </p>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#projects"
            className="button-primary inline-flex items-center gap-2 justify-center group"
          >
            Explore Projects
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="button-secondary inline-flex items-center gap-2 justify-center">
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 pt-16 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">4+</div>
            <p className="text-sm text-foreground/60 mt-2">Featured Projects</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">100%</div>
            <p className="text-sm text-foreground/60 mt-2">Open Source</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text">5+</div>
            <p className="text-sm text-foreground/60 mt-2">Tech Stacks</p>
          </div>
        </div>
      </div>
    </section>
  )
}
