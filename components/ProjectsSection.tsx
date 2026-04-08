'use client'

import { Sprout, Gamepad2, Brain, Database } from 'lucide-react'
import { ProjectCard } from './ProjectCard'

const projects = [
  {
    id: 'farmx',
    title: 'FarmX',
    subtitle: 'Smart Agriculture Web Application',
    description:
      'A data-driven agriculture web application that helps farmers make better decisions using soil data and environmental inputs.',
    features: [
      'Soil-based crop recommendation system',
      'Fertilizer suggestions based on soil composition',
      'Location-based weather forecasting',
      'User-submitted crop recommendations',
    ],
    technologies: ['React', 'Node.js', 'Python', 'PostgreSQL'],
    liveUrl: 'https://farmx-demo.vercel.app',
    githubUrl: 'https://github.com/anirudh-beep/farmx',
    icon: <Sprout size={24} />,
    isFeatured: true,
  },
  {
    id: 'game3d',
    title: '3D Adventure Game',
    subtitle: 'Unity-Based Exploration Game',
    description:
      'A 3D exploration game where players collect hidden codes across levels to locate and rescue the queen.',
    features: [
      'Exploration-based gameplay',
      'Code collection mechanics',
      'Level progression system',
      'Dynamic puzzle solving',
    ],
    technologies: ['Unity', 'C#', 'HLSL'],
    githubUrl: 'https://github.com/anirudh-beep/3d-adventure-game',
    icon: <Gamepad2 size={24} />,
  },
  {
    id: 'pdf-rag',
    title: 'PDF RAG Reader',
    subtitle: 'AI-Powered Document Q&A',
    description:
      'An AI-powered tool that allows users to upload PDFs and ask questions using Retrieval-Augmented Generation.',
    features: [
      'Context-aware Q&A system',
      'Semantic document search',
      'Fast retrieval mechanism',
      'Multi-document support',
    ],
    technologies: ['Python', 'LangChain', 'OpenAI', 'FAISS'],
    liveUrl: 'https://pdf-rag-reader.vercel.app',
    githubUrl: 'https://github.com/anirudh-beep/pdf-rag-reader',
    icon: <Brain size={24} />,
  },
  {
    id: 'scraper',
    title: 'Web Data Scraper',
    subtitle: 'Automated Web Data Extraction',
    description:
      'A tool that extracts and structures data from websites automatically with intelligent parsing and cleaning.',
    features: [
      'Automated scraping workflows',
      'Multi-site support',
      'Data cleaning and structuring',
      'Schedule-based execution',
    ],
    technologies: ['Python', 'BeautifulSoup', 'Scrapy', 'Celery'],
    githubUrl: 'https://github.com/anirudh-beep/web-data-scraper',
    icon: <Database size={24} />,
  },
]

export function ProjectsSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Featured Projects
          </h1>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Innovative solutions across agriculture, gaming, AI, and data science.
            Each project demonstrates technical excellence and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`animate-fade-in-up`}
              style={{
                animationDelay: `${idx * 100}ms`,
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                features={project.features}
                technologies={project.technologies}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
                icon={project.icon}
                isFeatured={project.isFeatured}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
