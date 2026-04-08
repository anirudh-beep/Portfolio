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
    <section className="py-32 px-4 md:px-6 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="mb-20 text-center animate-fade-in-up">
          <h2 className="section-title gradient-text mb-6">
            Featured Projects
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            A curated selection of innovative solutions spanning agriculture technology, interactive gaming, AI systems, and data intelligence. Each project showcases technical excellence and creative problem-solving.
          </p>
        </div>

        {/* Projects Grid - Featured First, Then 3-column Grid */}
        <div className="space-y-8">
          {/* Featured Project */}
          {projects.find(p => p.isFeatured) && (
            <div className="animate-fade-in-up">
              <ProjectCard
                title={projects.find(p => p.isFeatured)!.title}
                description={projects.find(p => p.isFeatured)!.description}
                features={projects.find(p => p.isFeatured)!.features}
                technologies={projects.find(p => p.isFeatured)!.technologies}
                liveUrl={projects.find(p => p.isFeatured)!.liveUrl}
                githubUrl={projects.find(p => p.isFeatured)!.githubUrl}
                icon={projects.find(p => p.isFeatured)!.icon}
                isFeatured={true}
              />
            </div>
          )}

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.isFeatured).map((project, idx) => (
              <div
                key={project.id}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
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
                  isFeatured={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
