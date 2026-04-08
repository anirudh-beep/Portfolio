import { Header } from '@/components/Header'
import { HeroSection } from '@/components/HeroSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <HeroSection />
        <section id="projects">
          <ProjectsSection />
        </section>
      </main>
      <Footer />
    </>
  )
}
