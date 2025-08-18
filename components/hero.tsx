"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, ArrowDown } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Hero() {
  const { t } = useLanguage()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Image and social links */}
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-start">
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl transform scale-110"></div>
                <img
                  src="/images/luis-profile.png"
                  alt="Luis Enrique Gomez Perez"
                  className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-primary/30 shadow-2xl object-cover"
                />
              </div>

              <div className="flex justify-center lg:justify-start gap-6 mb-6">
                <a
                  href="https://github.com/lugomez1403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary/10 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://www.linkedin.com/in/luis-enrique-gómez-pérez-3b8924203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-card hover:bg-primary/10 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="mailto:l.e.g.p.031192@gmail.com"
                  className="p-3 bg-card hover:bg-primary/10 rounded-full text-muted-foreground hover:text-primary transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                >
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>

            {/* Right column - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground leading-tight">
                Luis Enrique
                <span className="block text-primary">Gomez Perez</span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 font-medium">{t("hero.title")}</h2>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed">
                {t("hero.subtitle")}
              </p>

              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-8">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="font-medium">Cancún, Quintana Roo, México</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection("contacto")}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  {t("hero.cta.contact")}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300 bg-transparent"
                  onClick={() => scrollToSection("proyectos")}
                >
                  {t("hero.cta.projects")}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary/60" />
      </div>
    </section>
  )
}
