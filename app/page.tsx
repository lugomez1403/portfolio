import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { FreelanceServices } from "@/components/freelance-services"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="relative">
        <Hero />

        {/* Asymmetric grid layout */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First row - About and Skills side by side */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="lg:col-span-2">
              <About />
            </div>
            <div className="lg:col-span-1">
              <Skills />
            </div>
          </div>

          {/* Second row - Experience full width */}
          <div className="mb-16">
            <Experience />
          </div>

          {/* Third row - Projects and Services asymmetric */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
            <div className="lg:col-span-3">
              <Projects />
            </div>
            <div className="lg:col-span-2">
              <FreelanceServices />
            </div>
          </div>

          {/* Fourth row - Contact centered */}
          <div className="max-w-4xl mx-auto mb-16">
            <Contact />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
