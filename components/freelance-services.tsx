"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Code, Globe, Settings, CheckCircle, Clock, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function FreelanceServices() {
  const { t } = useLanguage()

  const services = [
    {
      title: t("services.backend.title"),
      description: t("services.backend.desc"),
      icon: Code,
      technologies: ["PHP", "Laravel", "Symfony", "Node.js", "Nest.js", "API REST"],
      price: "Desde $800 USD",
      duration: "2-4 semanas",
    },
    {
      title: t("services.fullstack.title"),
      description: t("services.fullstack.desc"),
      icon: Globe,
      technologies: ["React.js", "Next.js", "Node.js", "PHP", "MySQL"],
      price: "Desde $1,200 USD",
      duration: "3-6 semanas",
    },
    {
      title: t("services.consulting.title"),
      description: t("services.consulting.desc"),
      icon: Settings,
      technologies: ["Arquitectura", "SOLID", "Code Review", "Optimización"],
      price: "Desde $100 USD/hora",
      duration: "Flexible",
    },
    {
      title: "Mantenimiento & Soporte",
      description: "Mantenimiento continuo, actualizaciones y soporte técnico para proyectos existentes.",
      icon: Users,
      technologies: ["Mantenimiento", "Debugging", "Actualizaciones", "Soporte"],
      price: "Desde $400 USD/mes",
      duration: "Continuo",
    },
  ]

  const benefits = [
    "8 años de experiencia comprobada",
    "Comunicación fluida en español e inglés",
    "Metodologías ágiles y entregas puntuales",
    "Código limpio y documentado",
    "Soporte post-entrega incluido",
    "Precios competitivos",
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("services.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("services.subtitle")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-primary/20 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4 text-accent" />
                      <span className="text-muted-foreground">{service.duration}</span>
                    </div>
                    <div className="text-lg font-semibold text-primary">{service.price}</div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90" onClick={scrollToContact}>
                    {t("services.cta")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-muted/50 rounded-lg p-8">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-foreground">¿Por qué elegir mis servicios?</h3>

              <div className="grid md:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={scrollToContact}>
                  Comenzar Proyecto
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
