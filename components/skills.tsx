"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Code, Database, Settings, Briefcase } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Skills() {
  const { t } = useLanguage()

  const skillCategories = [
    {
      title: "Lenguajes & Frameworks",
      icon: Code,
      skills: [
        "PHP",
        "Laravel",
        "Symfony",
        "Node.js",
        "Next.js",
        "Nest.js",
        "React.js",
        "Go",
        "JavaScript",
        "TypeScript",
      ],
    },
    {
      title: "Bases de Datos",
      icon: Database,
      skills: ["MySQL", "MariaDB", "SQL", "Firebase", "PostgreSQL"],
    },
    {
      title: "Herramientas",
      icon: Settings,
      skills: ["Git", "Jira", "Postman", "API REST", "Arquitectura Hexagonal", "SOLID"],
    },
    {
      title: "Habilidades Adicionales",
      icon: Briefcase,
      skills: [
        "Inglés Conversacional",
        "Comunicación",
        "Trabajo en Equipo",
        "Resolución de Problemas",
        "Liderazgo Técnico",
      ],
    },
  ]

  return (
    <section id="habilidades" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("skills.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tecnologías y herramientas con las que trabajo día a día
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="border-primary/20 text-foreground hover:bg-primary/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div id="certificados" className="mt-12 scroll-mt-24">
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Certificados</h3>
            <Card className="bg-card border-border max-w-2xl mx-auto overflow-hidden">
              <a href="/certificates/coursera-OU3SUO6NK8UR.pdf" target="_blank" rel="noopener noreferrer" className="block" aria-label="Abrir certificado Foundations: Data, Data, Everywhere en PDF (otra pestaña)">
                <img src="/certificates/coursera-OU3SUO6NK8UR.png" alt="Certificado de Google y Coursera: Foundations: Data, Data, Everywhere, otorgado a Luis Enrique Gomez Pérez" className="w-full h-auto" loading="lazy" />
              </a>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-3">Google · Coursera</Badge>
                <h4 className="text-xl font-semibold mb-3 text-foreground">Foundations: Data, Data, Everywhere</h4>
                <p className="text-muted-foreground mb-1">Luis Enrique Gomez Pérez</p>
                <p className="text-sm text-muted-foreground mb-5">Completado el <time dateTime="2025-09-18">18 de septiembre de 2025</time></p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild><a href="/certificates/coursera-OU3SUO6NK8UR.pdf" target="_blank" rel="noopener noreferrer">Ver certificado PDF</a></Button>
                  <Button asChild variant="outline"><a href="https://coursera.org/verify/OU3SUO6NK8UR" target="_blank" rel="noopener noreferrer">Verificar en Coursera</a></Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
