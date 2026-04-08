'use client'

import { ReactNode } from 'react'
import { ExternalLink, Github } from 'lucide-react'

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
        glassmorphism-light rounded-2xl p-6 flex flex-col
        ${isFeatured ? 'md:col-span-2 lg:row-span-2' : ''}
        card-hover group
      `}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div className="flex-1">
          {isFeatured && <div className="featured-badge mb-3">Featured</div>}
          <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
            {title}
          </h3>
          <p className="text-sm text-foreground/70">{description}</p>
        </div>
        <div className="ml-4 p-3 rounded-lg bg-accent/10 text-accent flex-shrink-0">
          {icon}
        </div>
      </div>

      {/* Features */}
      <div className="mb-6 flex-grow">
        <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-wider mb-3">
          Features
        </h4>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm text-foreground/80 flex items-start">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent mr-2 mt-1.5 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mb-6">
        <h4 className="text-xs font-semibold text-primary/70 uppercase tracking-wider mb-3">
          Tech Stack
        </h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, idx) => (
            <span key={idx} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 pt-4 border-t border-card-border/30">
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary flex items-center gap-2 flex-1 justify-center"
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
            className={`${liveUrl ? 'button-secondary' : 'button-primary'} flex items-center gap-2 flex-1 justify-center`}
          >
            GitHub
            <Github size={16} />
          </a>
        )}
      </div>
    </div>
  )
}
