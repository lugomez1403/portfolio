"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSelector } from "./language-selector"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary min-w-[100px]">Portfolio</div>

          <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t("nav.experience")}
              </button>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t("nav.skills")}
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t("nav.projects")}
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-foreground hover:text-primary transition-colors whitespace-nowrap text-sm font-medium"
              >
                {t("nav.services")}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 min-w-[140px] justify-end">
            {/* Language Selector - Desktop */}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>

            {/* Contact Button - Desktop */}
            <Button
              onClick={() => scrollToSection("contacto")}
              className="hidden lg:flex bg-primary hover:bg-primary/90 text-sm px-4"
            >
              {t("nav.contact")}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden flex-shrink-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 border-t border-border bg-background/95 backdrop-blur-sm rounded-lg">
            {/* Language Selector - Mobile */}
            <div className="mb-6 flex justify-center">
              <LanguageSelector />
            </div>

            <div className="flex flex-col space-y-3 px-2">
              <button
                onClick={() => scrollToSection("inicio")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
              >
                {t("nav.home")}
              </button>
              <button
                onClick={() => scrollToSection("sobre-mi")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
              >
                {t("nav.about")}
              </button>
              <button
                onClick={() => scrollToSection("experiencia")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
              >
                {t("nav.experience")}
              </button>
              <button
                onClick={() => scrollToSection("habilidades")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
              >
                {t("nav.skills")}
              </button>
              <button
                onClick={() => scrollToSection("proyectos")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
              >
                {t("nav.projects")}
              </button>
              <button
                onClick={() => scrollToSection("servicios")}
                className="text-left text-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-muted"
              >
                {t("nav.services")}
              </button>
              <Button
                onClick={() => scrollToSection("contacto")}
                className="w-full bg-primary hover:bg-primary/90 mt-4"
              >
                {t("nav.contact")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
