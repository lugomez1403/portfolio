"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Luis Enrique Gomez Perez</h3>
              <p className="text-background/80 mb-4">
                Desarrollador Full Stack con 8 años de experiencia, especializado en crear soluciones tecnológicas
                innovadoras.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/lugomez1403"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/luis-enrique-gómez-pérez-3b8924203/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:l.e.g.p.031192@gmail.com"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-background/80">
                <li>Desarrollo Backend</li>
                <li>Desarrollo Full Stack</li>
                <li>Consultoría Técnica</li>
                <li>Mantenimiento & Soporte</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Tecnologías</h4>
              <ul className="space-y-2 text-background/80">
                <li>PHP • Laravel • Symfony</li>
                <li>Node.js • React.js • Next.js</li>
                <li>MySQL • MariaDB • PostgreSQL</li>
                <li>Git • GCP • API REST</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 pt-8 text-center">
            <p className="text-background/80 flex items-center justify-center gap-2">
              © {currentYear} Luis Enrique Gomez Perez. Desde Cancún, México
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
