# 🌐 joaovitorscr.com

A modern, minimal portfolio website built with Next.js 15, featuring multilingual support, beautiful animations, and easy content management through i18n messages.

## ✨ Features

- 🌍 **Bilingual Support** - English and Portuguese translations
- 🎨 **Modern UI** - Clean, minimal design with animated blob backgrounds
- 📱 **Fully Responsive** - Optimized for all devices
- ⚡ **Server Components** - Leveraging Next.js 15 App Router
- 🎭 **Smooth Animations** - CSS animations for gradient blobs
- 🌓 **Dark Mode Ready** - Theme support built-in
- 📝 **Easy Content Management** - Update content through JSON files
- ♿ **Accessible** - Built with accessibility best practices
- 🔍 **SEO Friendly** - Proper meta tags and structure
- 🚀 **Performance Optimized** - Fast loading and optimized assets

## 🛠️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with custom CSS
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/)
- **UI Components:** Custom components with [Radix UI](https://www.radix-ui.com/) primitives
- **Icons:** [Lucide React](https://lucide.dev/)
- **Font:** [Geist](https://vercel.com/font) by Vercel
- **Deployment:** [Vercel](https://vercel.com)

## 📁 Project Structure

```
├── messages/              # i18n translation files
│   ├── en.json           # English translations
│   └── pt.json           # Portuguese translations
├── src/
│   ├── app/
│   │   ├── [locale]/     # Locale-based routing
│   │   │   ├── _components/  # Page components
│   │   │   │   ├── profile-section.tsx
│   │   │   │   ├── experience-section.tsx
│   │   │   │   ├── skills-section.tsx
│   │   │   │   └── projects-section.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable UI components
│   │   └── ui/          # shadcn/ui components
│   ├── i18n/            # i18n configuration
│   │   ├── config.ts
│   │   ├── request.ts
│   │   └── routing.ts
│   └── middleware.ts    # Locale detection middleware
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/joaovitorscr/joaovitorscr.com.git
cd joaovitorscr.com
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Content Management

All content is managed through JSON files in the `messages/` directory. This makes it easy to update your portfolio without touching the code.

### Updating Content

Edit the respective language file:

**English:** `messages/en.json`
**Portuguese:** `messages/pt.json`

### Content Structure

```json
{
  "portfolio": {
    "profile": {
      "name": "Your Name",
      "title": "Your Title",
      "avatarUrl": "https://...",
      "socialLinks": { ... }
    },
    "sections": {
      "experience": { ... },
      "skills": { ... },
      "projects": { ... }
    }
  }
}
```

### Adding New Experience

Add a new object to the `experience.items` array:

```json
{
  "title": "Your Job Title",
  "company": "Company Name",
  "period": "2024 - Current",
  "description": "What you did..."
}
```

### Adding New Skills

Add skills to the appropriate category in `skills.categories`:

```json
{
  "name": "Category Name",
  "items": ["Skill 1", "Skill 2", "Skill 3"]
}
```

### Adding New Projects

Add a new project to the `projects.items` array:

```json
{
  "title": "Project Name",
  "description": "Project description...",
  "technologies": ["Tech 1", "Tech 2"],
  "link": "https://github.com/...",
  "linkText": "View"
}
```

## 🌍 Internationalization

The site supports multiple languages through `next-intl`.

### Supported Languages

- 🇺🇸 English (`en`)
- 🇧🇷 Portuguese (`pt`)

### Accessing Different Languages

- English: `https://joaovitorscr.com/en`
- Portuguese: `https://joaovitorscr.com/pt`

### Adding a New Language

1. Create a new message file in `messages/` (e.g., `es.json`)
2. Update `src/i18n/config.ts` to include the new locale
3. Translate all content in the new file

## 🎨 Customization

### Colors & Theme

Update CSS variables in `src/app/globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... more variables */
}
```

### Animations

Modify blob animations in `src/app/globals.css`:

```css
@keyframes blob-move {
  /* Customize animation keyframes */
}
```

### Layout

Edit the main layout in `src/app/[locale]/page.tsx` to reorder or add sections.

## 🧪 Development

### Build for Production

```bash
npm run build
```

### Run Production Build Locally

```bash
npm run start
```

### Lint Code

```bash
npm run lint
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Deploy! 🎉

### Deploy to Other Platforms

This is a standard Next.js application and can be deployed to any platform that supports Node.js:

- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [Render](https://render.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/joaovitorscr/joaovitorscr.com/issues).

## 👤 Author

**João Vitor**

- Website: [joaovitorscr.com](https://joaovitorscr.com)
- GitHub: [@joaovitorscr](https://github.com/joaovitorscr)
- LinkedIn: [@joaovitorscr](https://linkedin.com/in/joaovitorscr)
