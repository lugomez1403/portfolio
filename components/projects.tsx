"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Code } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Projects() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "Sistema CRM - Royal Vacations",
      description:
        "Desarrollo de un sistema CRM completo para gestión de clientes y ventas, implementando arquitectura hexagonal y principios SOLID.",
      technologies: ["PHP", "Laravel", "Symfony", "MariaDB", "API REST"],
      type: "Backend",
      image: "/crm-dashboard-interface.png",
    },
    {
      title: "API REST - Palace Resorts",
      description:
        "Creación de APIs REST para sistemas de información hotelera, integrando múltiples servicios y bases de datos.",
      technologies: ["Node.js", "React.js", "MySQL", "API REST", "Bootstrap"],
      type: "Full Stack",
      image: "/api-documentation-interface.png",
    },
    {
      title: "Aplicación Web Moderna",
      description:
        "Desarrollo de aplicación web moderna con interfaz intuitiva y funcionalidades avanzadas para gestión empresarial.",
      technologies: ["React.js", "Node.js", "MySQL", "API REST", "Responsive Design"],
      type: "Full Stack",
      image: "/modern-web-app-interface.png",
    },
  ]

  return (
    <section id="proyectos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("projects.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Algunos de los proyectos más importantes en los que he trabajado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="outline" className="border-primary/20 text-primary">
                      {project.type}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                      <Code className="mr-2 h-4 w-4" />
                      Ver Detalles
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => window.open("https://github.com/lugomez1403", "_blank")}>
              <Github className="mr-2 h-5 w-5" />
              Ver más proyectos en GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
