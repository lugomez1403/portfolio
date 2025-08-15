"use client"

import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 min-w-[80px]">
      <Globe className="h-4 w-4 text-muted-foreground flex-shrink-0" />
      <div className="flex rounded-md border border-border overflow-hidden">
        <Button
          variant={language === "en" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("en")}
          className={`rounded-none px-2.5 py-1 text-xs font-medium min-w-[28px] ${
            language === "en" ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-muted"
          }`}
        >
          EN
        </Button>
        <Button
          variant={language === "es" ? "default" : "ghost"}
          size="sm"
          onClick={() => setLanguage("es")}
          className={`rounded-none px-2.5 py-1 text-xs font-medium min-w-[28px] ${
            language === "es" ? "bg-primary text-primary-foreground" : "bg-transparent hover:bg-muted"
          }`}
        >
          ES
        </Button>
      </div>
    </div>
  )
}
