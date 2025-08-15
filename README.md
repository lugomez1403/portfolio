# Luis Enrique Gomez Perez - Portfolio

Professional portfolio website showcasing 8 years of software development experience, built with modern web technologies.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app)

## 📋 About

This is a bilingual (English/Spanish) portfolio website for Luis Enrique Gomez Perez, a Systems Engineer with extensive experience in full-stack development. The site features a modern, responsive design that showcases professional experience, technical skills, and freelance services.

## ✨ Features

- **Bilingual Support**: Complete English/Spanish translations with persistent language selection
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Integration**: Direct email and social media links
- **Freelance Services**: Detailed service offerings with pricing
- **Project Showcase**: Portfolio section for featured work
- **Professional Experience**: Comprehensive work history and achievements

## 🛠️ Technologies Used

### Frontend Framework
- **Next.js 14** - React framework with App Router
- **React 18** - UI library with hooks and context
- **TypeScript** - Type-safe JavaScript

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - High-quality React components
- **DM Sans** - Modern Google Font
- **Custom CSS Variables** - Dynamic theming system

### State Management
- **React Context API** - Language switching and global state
- **localStorage** - Persistent language preference

### Development Tools
- **ESLint** - Code linting
- **TypeScript Config** - Type checking
- **Next.js Config** - Framework configuration

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and theme
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── header.tsx          # Navigation header
│   ├── hero.tsx            # Hero section
│   ├── about.tsx           # About section
│   ├── experience.tsx      # Work experience
│   ├── skills.tsx          # Technical skills
│   ├── projects.tsx        # Portfolio projects
│   ├── freelance-services.tsx # Service offerings
│   ├── contact.tsx         # Contact information
│   ├── footer.tsx          # Site footer
│   └── language-selector.tsx # Language switcher
├── contexts/
│   └── language-context.tsx # Internationalization context
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── images/             # Static assets
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/lugomez1403/portfolio.git
   cd portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build & Deploy

### Build for Production
\`\`\`bash
npm run build
npm start
\`\`\`

### Deploy to Vercel
\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

### Deploy to Other Platforms
The project is a standard Next.js application and can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Railway
- Any Node.js hosting service

## 🎨 Customization

### Colors & Theme
Edit `app/globals.css` to modify the color scheme:
\`\`\`css
:root {
  --primary: oklch(0.55 0.2 240);    /* Primary blue */
  --accent: oklch(0.6 0.15 180);     /* Accent teal */
  /* ... other color variables */
}
\`\`\`

### Content & Translations
Update translations in `contexts/language-context.tsx`:
\`\`\`typescript
const translations = {
  en: {
    "hero.title": "Your English Title",
    // ... other translations
  },
  es: {
    "hero.title": "Tu Título en Español",
    // ... other translations
  }
}
\`\`\`

### Personal Information
Update personal details in respective components:
- Contact info in `components/contact.tsx`
- Experience in `components/experience.tsx`
- Skills in `components/skills.tsx`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Luis Enrique Gomez Perez**
- GitHub: [@lugomez1403](https://github.com/lugomez1403)
- LinkedIn: [Luis Enrique Gómez Pérez](https://www.linkedin.com/in/luis-enrique-gómez-pérez-3b8924203/)
- Email: l.e.g.p.031192@gmail.com
- Location: Cancún, Quintana Roo, México

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need support, feel free to reach out:
- Email: l.e.g.p.031192@gmail.com
- LinkedIn: [Luis Enrique Gómez Pérez](https://www.linkedin.com/in/luis-enrique-gómez-pérez-3b8924203/)

---

⭐ **Star this repository if you found it helpful!**
