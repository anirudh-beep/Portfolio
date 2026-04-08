'use client'

import { ReactNode } from 'react'
import { ExternalLink, GitBranch } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  features: string[]
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  icon: ReactNode
  isFeatured?: boolean
}

export function ProjectCard({
  title,
  description,
  features,
  technologies,
  liveUrl,
  githubUrl,
  icon,
  isFeatured = false,
}: ProjectCardProps) {
  return (
    <div
      className={`
        glassmorphism-card rounded-2xl overflow-hidden flex flex-col h-full
        group transition-all duration-500 hover:shadow-2xl
        ${isFeatured ? 'lg:col-span-2 lg:flex-row' : ''}
      `}
    >
      {/* Icon Section */}
      <div className={`
        flex items-center justify-center flex-shrink-0
        ${isFeatured ? 'lg:w-64 w-full h-64 lg:h-auto' : 'w-full h-48'}
        bg-gradient-to-br from-primary/20 via-accent/10 to-primary/10
        group-hover:from-primary/30 group-hover:via-accent/20 group-hover:to-primary/20
        transition-all duration-500
      `}>
        <div className={`
          p-6 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30
          group-hover:from-primary/40 group-hover:to-accent/40
          transition-all duration-500
          ${isFeatured ? 'p-8' : ''}
        `}>
          <div className={`text-accent transition-transform duration-500 group-hover:scale-110 ${isFeatured ? 'w-16 h-16' : 'w-12 h-12'}`}>
            {icon}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className={`p-6 md:p-8 flex flex-col flex-grow ${isFeatured ? 'lg:flex-1' : ''}`}>
        {/* Header */}
        <div className="mb-6">
          {isFeatured && <div className="featured-badge mb-4">Featured Project</div>}
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:gradient-text transition-all duration-300">
            {title}
          </h3>
          <p className="text-foreground/70 text-base leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Features */}
        <div className="mb-8 flex-grow">
          <h4 className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 opacity-70">
            Key Features
          </h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {features.map((feature, idx) => (
              <li key={idx} className="text-sm text-foreground/80 flex items-start gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent mt-1.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 opacity-70">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span key={idx} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-card-border/0 via-card-border/50 to-card-border/0 mb-6" />

        {/* Buttons */}
        <div className="flex gap-3 flex-wrap">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary flex items-center gap-2 justify-center flex-1 min-w-max"
            >
              Live Demo
              <ExternalLink size={16} />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${liveUrl ? 'button-secondary' : 'button-primary'} flex items-center gap-2 justify-center flex-1 min-w-max`}
            >
              GitHub
              <GitBranch size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
