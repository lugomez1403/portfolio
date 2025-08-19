"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import emailjs from "@emailjs/browser"

// Inicializar EmailJS
if (typeof window !== 'undefined') {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "I-Zq9xxK6ddg762ub")
}

export function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("idle")

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      
      if (!serviceId || !templateId) {
        throw new Error('EmailJS configuration missing')
      }

      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        email: "l.e.g.p.031192@gmail.com",
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      )

      console.log("EmailJS Success:", result)
      setStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("EmailJS Error:", error)
      setStatus("error")
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("contact.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("contact.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-foreground">{t("contact.info.title")}</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t("contact.info.email")}</p>
                      <a
                        href="mailto:l.e.g.p.031192@gmail.com"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        l.e.g.p.031192@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t("contact.info.phone")}</p>
                      <span className="text-muted-foreground">+52 933-129-6126</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{t("contact.info.location")}</p>
                      <p className="text-muted-foreground">Cancún, Quintana Roo, México</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">{t("contact.social.title")}</h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/lugomez1403"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:bg-primary/10 hover:border-primary/20 transition-colors"
                  >
                    <Github className="h-6 w-6 text-muted-foreground hover:text-primary" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/luis-enrique-gómez-pérez-3b8924203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card border border-border rounded-lg hover:bg-primary/10 hover:border-primary/20 transition-colors"
                  >
                    <Linkedin className="h-6 w-6 text-muted-foreground hover:text-primary" />
                  </a>
                </div>
              </div>

              <Card className="bg-accent/10 border-accent/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageCircle className="h-6 w-6 text-accent" />
                    <h4 className="text-lg font-semibold text-foreground">{t("contact.response.title")}</h4>
                  </div>
                  <p className="text-muted-foreground">{t("contact.response.desc")}</p>
                </CardContent>
              </Card>
            </div>

            {/* Formulario de contacto */}
            <Card className="bg-card border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-foreground">{t("contact.form.title")}</h3>

                {status === "success" && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <p className="text-green-700 dark:text-green-400">¡Mensaje enviado exitosamente!</p>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-3">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <p className="text-red-700 dark:text-red-400">Error al enviar el mensaje. Inténtalo de nuevo.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        {t("contact.form.name")} *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 bg-input border-border focus:border-primary focus:ring-primary"
                        placeholder={t("contact.form.name.placeholder")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        {t("contact.form.email")} *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 bg-input border-border focus:border-primary focus:ring-primary"
                        placeholder={t("contact.form.email.placeholder")}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">
                      {t("contact.form.subject")} *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="mt-1 bg-input border-border focus:border-primary focus:ring-primary"
                      placeholder={t("contact.form.subject.placeholder")}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      {t("contact.form.message")} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="mt-1 bg-input border-border focus:border-primary focus:ring-primary resize-none"
                      placeholder={t("contact.form.message.placeholder")}
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        {t("contact.form.send")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
