import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <section id="projects">
        <ProjectsSection />
      </section>
      <Footer />
    </main>
  )
}
