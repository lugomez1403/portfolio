"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Experience() {
  const { t } = useLanguage()

  const experiences = [
    {
      company: "Royal Vacations",
      position: t("experience.royal.title"),
      location: "Cancún, Q. Roo",
      period: t("experience.royal.period"),
      description:
        t("experience.royal.desc1") + ". " + t("experience.royal.desc2") + " para crear CRM y APIs robustas.",
      technologies: ["PHP", "Symfony", "Laravel", "MariaDB", "SOLID", "Arquitectura Hexagonal"],
    },
    {
      company: "DaCodes",
      position: t("experience.dacodes.title"),
      location: "Mérida, Yucatán",
      period: t("experience.dacodes.period"),
      description: t("experience.dacodes.desc1") + " y " + t("experience.dacodes.desc2") + ".",
      technologies: ["Backend Development", "Database Administration", "API Development"],
    },
    {
      company: "Palace Resorts",
      position: t("experience.palace.title"),
      location: "Cancún, Q. Roo",
      period: t("experience.palace.period"),
      description:
        t("experience.palace.desc1") +
        ". " +
        t("experience.palace.desc2") +
        " con " +
        t("experience.palace.desc3") +
        ".",
      technologies: ["PHP", "Node.js", "React.js", "Bootstrap", "MySQL", "API REST", "Full Stack"],
    },
    {
      company: "Sam's Club",
      position: "Capturista de Recibo",
      location: "Cozumel, Q. Roo",
      period: "2015",
      description:
        "Capturista en área de recibo, manejo de sistema interno para control de entrada y salida de mercancía.",
      technologies: ["Sistemas Internos", "Control de Inventario"],
    },
  ]

  return (
    <section id="experiencia" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("experience.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              8 años de trayectoria en desarrollo de software
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-bold text-foreground mb-1">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
