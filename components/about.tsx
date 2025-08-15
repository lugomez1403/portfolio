"use client"

import { Card, CardContent } from "@/components/ui/card"
import { User, Calendar, Heart, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="sobre-mi" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("about.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("about.description")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <User className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Información Personal</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Edad:</span> 32 años
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Estado Civil:</span> Casado
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Ubicación:</span> Cancún, Quintana Roo
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Teléfono:</span> 933-129-6126
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Idiomas:</span> Español (Nativo), Inglés
                    (Conversacional)
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h3 className="text-xl font-semibold">Trayectoria</h3>
                </div>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Experiencia:</span> 8 años en desarrollo
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Educación:</span> Ing. en Sistemas Computacionales
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Especialización:</span> Full Stack Development
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Enfoque:</span> Backend & APIs
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold">Pasiones</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{t("about.text1")}</p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-accent" />
                  <h3 className="text-xl font-semibold">Objetivos</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{t("about.text2")}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
