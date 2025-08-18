"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { LanguageSelector } from "./language-selector"
import { ThemeToggle } from "./theme-toggle"
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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary min-w-[100px]">Portfolio</div>

            <div className="hidden lg:flex items-center justify-center flex-1 max-w-2xl mx-8">
              <div className="flex items-center space-x-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 px-6 py-3 rounded-full border border-primary/20 backdrop-blur-sm">
                <button
                  onClick={() => scrollToSection("inicio")}
                  className="text-foreground hover:text-primary transition-all duration-300 whitespace-nowrap text-sm font-medium hover:scale-105 px-3 py-1 rounded-full hover:bg-primary/10"
                >
                  {t("nav.home")}
                </button>
                <button
                  onClick={() => scrollToSection("sobre-mi")}
                  className="text-foreground hover:text-primary transition-all duration-300 whitespace-nowrap text-sm font-medium hover:scale-105 px-3 py-1 rounded-full hover:bg-primary/10"
                >
                  {t("nav.about")}
                </button>
                <button
                  onClick={() => scrollToSection("experiencia")}
                  className="text-foreground hover:text-primary transition-all duration-300 whitespace-nowrap text-sm font-medium hover:scale-105 px-3 py-1 rounded-full hover:bg-primary/10"
                >
                  {t("nav.experience")}
                </button>
                <button
                  onClick={() => scrollToSection("habilidades")}
                  className="text-foreground hover:text-primary transition-all duration-300 whitespace-nowrap text-sm font-medium hover:scale-105 px-3 py-1 rounded-full hover:bg-primary/10"
                >
                  {t("nav.skills")}
                </button>
                <button
                  onClick={() => scrollToSection("proyectos")}
                  className="text-foreground hover:text-primary transition-all duration-300 whitespace-nowrap text-sm font-medium hover:scale-105 px-3 py-1 rounded-full hover:bg-primary/10"
                >
                  {t("nav.projects")}
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="text-foreground hover:text-primary transition-all duration-300 whitespace-nowrap text-sm font-medium hover:scale-105 px-3 py-1 rounded-full hover:bg-primary/10"
                >
                  {t("nav.services")}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3 min-w-[140px] justify-end">
              <div className="flex items-center gap-2 bg-muted/50 rounded-full p-1 border border-border/50">
                <ThemeToggle />
              </div>

              {/* Language Selector - Desktop */}
              <div className="hidden md:block">
                <div className="bg-muted/50 rounded-full p-1 border border-border/50">
                  <LanguageSelector />
                </div>
              </div>

              {/* Contact Button - Desktop */}
              <Button
                onClick={() => scrollToSection("contacto")}
                className="hidden lg:flex bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-sm px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
        </div>
      </header>

      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Mobile Menu */}
          <div className="fixed top-[88px] left-0 right-0 z-50 lg:hidden">
            <div className="mx-4 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-xl">
              <div className="p-6">
                {/* Theme Toggle - Mobile */}
                <div className="mb-4 flex justify-center">
                  <div className="bg-muted/50 rounded-full p-1 border border-border/50">
                    <ThemeToggle />
                  </div>
                </div>

                {/* Language Selector - Mobile */}
                <div className="mb-6 flex justify-center">
                  <div className="bg-muted/50 rounded-full p-1 border border-border/50">
                    <LanguageSelector />
                  </div>
                </div>

                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => scrollToSection("inicio")}
                    className="text-left text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-muted/50 hover:scale-[1.02]"
                  >
                    {t("nav.home")}
                  </button>
                  <button
                    onClick={() => scrollToSection("sobre-mi")}
                    className="text-left text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-muted/50 hover:scale-[1.02]"
                  >
                    {t("nav.about")}
                  </button>
                  <button
                    onClick={() => scrollToSection("experiencia")}
                    className="text-left text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-muted/50 hover:scale-[1.02]"
                  >
                    {t("nav.experience")}
                  </button>
                  <button
                    onClick={() => scrollToSection("habilidades")}
                    className="text-left text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-muted/50 hover:scale-[1.02]"
                  >
                    {t("nav.skills")}
                  </button>
                  <button
                    onClick={() => scrollToSection("proyectos")}
                    className="text-left text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-muted/50 hover:scale-[1.02]"
                  >
                    {t("nav.projects")}
                  </button>
                  <button
                    onClick={() => scrollToSection("servicios")}
                    className="text-left text-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-lg hover:bg-muted/50 hover:scale-[1.02]"
                  >
                    {t("nav.services")}
                  </button>
                  <Button
                    onClick={() => scrollToSection("contacto")}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 mt-4 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                  >
                    {t("nav.contact")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
