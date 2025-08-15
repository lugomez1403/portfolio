"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.services": "Services",
    "nav.contact": "Contact",

    // Hero
    "hero.greeting": "Hi, I'm",
    "hero.title": "Full Stack Developer",
    "hero.subtitle": "8 years of experience creating robust and scalable web solutions",
    "hero.cta.contact": "Get in Touch",
    "hero.cta.projects": "View Projects",

    // About
    "about.title": "About Me",
    "about.description":
      "Passionate software engineer with 8 years of experience in full stack development. I specialize in creating efficient and scalable solutions using modern technologies.",
    "about.text1":
      "I'm a Computer Systems Engineer with a strong passion for software development. Throughout my career, I've worked on diverse projects ranging from CRM systems to REST APIs, always focusing on code quality and best practices.",
    "about.text2":
      "I enjoy tackling complex technical challenges and am constantly learning new technologies to stay current with industry trends. My goal is to create solutions that not only meet technical requirements but also provide exceptional user experiences.",
    "about.stats.experience": "Years Experience",
    "about.stats.projects": "Projects Completed",
    "about.stats.technologies": "Technologies",

    // Experience
    "experience.title": "Professional Experience",
    "experience.royal.title": "Backend Developer",
    "experience.royal.company": "Royal Vacations",
    "experience.royal.period": "June 2024 – August 2025",
    "experience.royal.desc1": "Backend development with PHP (SOLID, Hexagonal Architecture)",
    "experience.royal.desc2": "Use of frameworks like Symfony and Laravel",
    "experience.royal.desc3": "MariaDB database management",
    "experience.royal.desc4": "CRM and API development for websites",

    "experience.dacodes.title": "Backend Developer",
    "experience.dacodes.company": "DaCodes",
    "experience.dacodes.period": "2021 – 2024",
    "experience.dacodes.desc1": "Backend development and database administration",
    "experience.dacodes.desc2": "Creation of functions and system optimization",
    "experience.dacodes.desc3": "API development and third-party integrations",

    "experience.palace.title": "Developer Analyst",
    "experience.palace.company": "Palace Resorts",
    "experience.palace.period": "2017 – 2021",
    "experience.palace.desc1": "Information systems development and REST API creation",
    "experience.palace.desc2": "Full stack development using PHP, Node.js, React.js, Bootstrap",
    "experience.palace.desc3": "MySQL and SQL database management",

    // Skills
    "skills.title": "Technical Skills",
    "skills.backend.title": "Backend Development",
    "skills.frontend.title": "Frontend Development",
    "skills.database.title": "Databases",
    "skills.tools.title": "Tools & Others",

    // Projects
    "projects.title": "Featured Projects",
    "projects.coming": "Featured projects coming soon...",
    "projects.description":
      "I'm currently updating my portfolio with detailed case studies of my most impactful projects.",

    // Services
    "services.title": "Freelance Services",
    "services.subtitle": "Professional development solutions tailored to your needs",
    "services.backend.title": "Backend Development",
    "services.backend.desc": "Robust APIs and server-side applications with PHP, Laravel, Symfony, and Node.js",
    "services.backend.features.api": "REST API Development",
    "services.backend.features.db": "Database Design & Optimization",
    "services.backend.features.auth": "Authentication & Security",
    "services.backend.features.integration": "Third-party Integrations",

    "services.fullstack.title": "Full Stack Applications",
    "services.fullstack.desc": "Complete web applications from concept to deployment",
    "services.fullstack.features.responsive": "Responsive Design",
    "services.fullstack.features.admin": "Admin Panels",
    "services.fullstack.features.deployment": "Deployment & Hosting",
    "services.fullstack.features.maintenance": "Maintenance & Support",

    "services.consulting.title": "Technical Consulting",
    "services.consulting.desc": "Expert guidance on architecture, best practices, and technology decisions",
    "services.consulting.features.architecture": "System Architecture",
    "services.consulting.features.review": "Code Review",
    "services.consulting.features.optimization": "Performance Optimization",
    "services.consulting.features.mentoring": "Team Mentoring",

    "services.cta": "Get Quote",

    // Contact
    "contact.title": "Contact",
    "contact.subtitle": "Have a project in mind? Let's talk and make it happen!",
    "contact.info.title": "Contact Information",
    "contact.info.email": "Email",
    "contact.info.phone": "Phone",
    "contact.info.location": "Location",
    "contact.social.title": "Follow me",
    "contact.response.title": "Quick Response",
    "contact.response.desc":
      "I respond to all messages within 24 hours. Don't hesitate to contact me to discuss your project!",
    "contact.form.title": "Send me a message",
    "contact.form.name": "Name",
    "contact.form.email": "Email",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.name.placeholder": "Your full name",
    "contact.form.email.placeholder": "your@email.com",
    "contact.form.subject.placeholder": "How can I help you?",
    "contact.form.message.placeholder": "Tell me about your project, estimated budget, timeline, etc.",
    "contact.form.send": "Send Message",
  },
  es: {
    // Header
    "nav.home": "Inicio",
    "nav.about": "Sobre mí",
    "nav.experience": "Experiencia",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.services": "Servicios",
    "nav.contact": "Contacto",

    // Hero
    "hero.greeting": "Hola, soy",
    "hero.title": "Desarrollador Full Stack",
    "hero.subtitle": "8 años de experiencia creando soluciones web robustas y escalables",
    "hero.cta.contact": "Contactar",
    "hero.cta.projects": "Ver Proyectos",

    // About
    "about.title": "Sobre Mí",
    "about.description":
      "Ingeniero de software apasionado con 8 años de experiencia en desarrollo full stack. Me especializo en crear soluciones eficientes y escalables usando tecnologías modernas.",
    "about.text1":
      "Soy Ingeniero en Sistemas Computacionales con una gran pasión por el desarrollo de software. A lo largo de mi carrera, he trabajado en proyectos diversos que van desde sistemas CRM hasta APIs REST, siempre enfocándome en la calidad del código y las mejores prácticas.",
    "about.text2":
      "Disfruto enfrentar desafíos técnicos complejos y estoy constantemente aprendiendo nuevas tecnologías para mantenerme actualizado con las tendencias de la industria. Mi objetivo es crear soluciones que no solo cumplan con los requisitos técnicos, sino que también brinden experiencias excepcionales al usuario.",
    "about.stats.experience": "Años de Experiencia",
    "about.stats.projects": "Proyectos Completados",
    "about.stats.technologies": "Tecnologías",

    // Experience
    "experience.title": "Experiencia Profesional",
    "experience.royal.title": "Desarrollador Backend",
    "experience.royal.company": "Royal Vacations",
    "experience.royal.period": "Junio 2024 – Agosto 2025",
    "experience.royal.desc1": "Desarrollo backend con PHP (SOLID, Arquitectura hexagonal)",
    "experience.royal.desc2": "Uso de frameworks como Symfony y Laravel",
    "experience.royal.desc3": "Manejo de bases de datos MariaDB",
    "experience.royal.desc4": "Desarrollo de CRM y APIs para sitios web",

    "experience.dacodes.title": "Desarrollador Backend",
    "experience.dacodes.company": "DaCodes",
    "experience.dacodes.period": "2021 – 2024",
    "experience.dacodes.desc1": "Desarrollo backend y administración de bases de datos",
    "experience.dacodes.desc2": "Creación de funciones y optimización de sistemas",
    "experience.dacodes.desc3": "Desarrollo de APIs e integraciones con terceros",

    "experience.palace.title": "Analista Desarrollador",
    "experience.palace.company": "Palace Resorts",
    "experience.palace.period": "2017 – 2021",
    "experience.palace.desc1": "Desarrollo de sistemas de información y creación de APIs REST",
    "experience.palace.desc2": "Desarrollo full stack usando PHP, Node.js, React.js, Bootstrap",
    "experience.palace.desc3": "Manejo de bases de datos MySQL y SQL",

    // Skills
    "skills.title": "Habilidades Técnicas",
    "skills.backend.title": "Desarrollo Backend",
    "skills.frontend.title": "Desarrollo Frontend",
    "skills.database.title": "Bases de Datos",
    "skills.tools.title": "Herramientas y Otros",

    // Projects
    "projects.title": "Proyectos Destacados",
    "projects.coming": "Proyectos destacados próximamente...",
    "projects.description":
      "Actualmente estoy actualizando mi portafolio con estudios de caso detallados de mis proyectos más impactantes.",

    // Services
    "services.title": "Servicios Freelance",
    "services.subtitle": "Soluciones de desarrollo profesional adaptadas a tus necesidades",
    "services.backend.title": "Desarrollo Backend",
    "services.backend.desc": "APIs robustas y aplicaciones del lado del servidor con PHP, Laravel, Symfony y Node.js",
    "services.backend.features.api": "Desarrollo de APIs REST",
    "services.backend.features.db": "Diseño y Optimización de BD",
    "services.backend.features.auth": "Autenticación y Seguridad",
    "services.backend.features.integration": "Integraciones con Terceros",

    "services.fullstack.title": "Aplicaciones Full Stack",
    "services.fullstack.desc": "Aplicaciones web completas desde el concepto hasta el despliegue",
    "services.fullstack.features.responsive": "Diseño Responsivo",
    "services.fullstack.features.admin": "Paneles de Administración",
    "services.fullstack.features.deployment": "Despliegue y Hosting",
    "services.fullstack.features.maintenance": "Mantenimiento y Soporte",

    "services.consulting.title": "Consultoría Técnica",
    "services.consulting.desc": "Orientación experta en arquitectura, mejores prácticas y decisiones tecnológicas",
    "services.consulting.features.architecture": "Arquitectura de Sistemas",
    "services.consulting.features.review": "Revisión de Código",
    "services.consulting.features.optimization": "Optimización de Rendimiento",
    "services.consulting.features.mentoring": "Mentoría de Equipos",

    "services.cta": "Solicitar Cotización",

    // Contact
    "contact.title": "Contacto",
    "contact.subtitle": "¿Tienes un proyecto en mente? ¡Hablemos y hagámoslo realidad!",
    "contact.info.title": "Información de Contacto",
    "contact.info.email": "Email",
    "contact.info.phone": "Teléfono",
    "contact.info.location": "Ubicación",
    "contact.social.title": "Sígueme en redes",
    "contact.response.title": "Respuesta Rápida",
    "contact.response.desc":
      "Respondo todos los mensajes en menos de 24 horas. ¡No dudes en contactarme para discutir tu proyecto!",
    "contact.form.title": "Envíame un mensaje",
    "contact.form.name": "Nombre",
    "contact.form.email": "Email",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.name.placeholder": "Tu nombre completo",
    "contact.form.email.placeholder": "tu@email.com",
    "contact.form.subject.placeholder": "¿En qué puedo ayudarte?",
    "contact.form.message.placeholder": "Cuéntame sobre tu proyecto, presupuesto estimado, timeline, etc.",
    "contact.form.send": "Enviar Mensaje",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
