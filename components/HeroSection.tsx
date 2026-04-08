'use client'

import { ArrowRight, Code2, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4 py-24 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl w-full text-center space-y-8">
        {/* Badge */}
        <div className="animate-fade-in-up inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-medium">
          <Sparkles size={16} />
          Crafting innovative digital solutions
        </div>

        {/* Main Title */}
        <h1 className="animate-fade-in-up text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" style={{ animationDelay: '100ms' }}>
          <span className="gradient-text block mb-2">Anirudh Reddy Mosra</span>
          <span className="text-foreground">Full Stack Developer</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up section-subtitle max-w-3xl mx-auto" style={{ animationDelay: '200ms' }}>
          Building intelligent systems across agriculture technology, interactive gaming, AI-powered tools, and data science. I transform complex problems into elegant, scalable solutions through code and creativity.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center pt-6" style={{ animationDelay: '300ms' }}>
          <a
            href="#projects"
            className="button-primary inline-flex items-center gap-2 justify-center group text-base"
          >
            Explore My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="button-secondary inline-flex items-center gap-2 justify-center text-base">
            <Code2 size={20} />
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up grid grid-cols-3 gap-4 md:gap-8 pt-16 max-w-2xl mx-auto" style={{ animationDelay: '400ms' }}>
          <div className="text-center p-4 glassmorphism-light rounded-xl">
            <div className="text-3xl md:text-4xl font-bold gradient-text block mb-1">4</div>
            <p className="text-xs md:text-sm text-foreground/60">Featured Projects</p>
          </div>
          <div className="text-center p-4 glassmorphism-light rounded-xl">
            <div className="text-3xl md:text-4xl font-bold gradient-text block mb-1">5+</div>
            <p className="text-xs md:text-sm text-foreground/60">Tech Stacks</p>
          </div>
          <div className="text-center p-4 glassmorphism-light rounded-xl">
            <div className="text-3xl md:text-4xl font-bold gradient-text block mb-1">100%</div>
            <p className="text-xs md:text-sm text-foreground/60">Open Source</p>
          </div>
        </div>
      </div>
    </section>
  )
}
