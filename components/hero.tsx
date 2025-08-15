"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"
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
    <section
      id="inicio"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted pt-20"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <img
              src="/images/luis-profile.png"
              alt="Luis Enrique Gomez Perez"
              className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-primary/20 shadow-lg object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">Luis Enrique Gomez Perez</h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">{t("hero.title")}</h2>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-8">
            <MapPin className="h-5 w-5" />
            <span>Cancún, Quintana Roo, México</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90" onClick={() => scrollToSection("contacto")}>
              <Mail className="mr-2 h-5 w-5" />
              {t("hero.cta.contact")}
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("proyectos")}>
              {t("hero.cta.projects")}
            </Button>
          </div>

          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/lugomez1403"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/luis-enrique-gómez-pérez-3b8924203/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:l.e.g.p.031192@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
