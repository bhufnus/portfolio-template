# Professional Portfolio Template

A modern, responsive portfolio website template built with Next.js 15+, React 19+, TypeScript, Tailwind CSS, and Framer Motion. Perfect for showcasing your work as a fullstack JavaScript developer.

## Features

- 🚀 **Next.js 15+** with App Router
- ⚛️ **React 19+** with TypeScript
- 🎨 **Tailwind CSS** for styling
- ✨ **Framer Motion** for smooth animations
- 🌙 **Dark Mode** support
- 📱 **Mobile-First** responsive design
- ♿ **WCAG-Compliant** accessibility
- 🔍 **SEO Optimized** with meta tags and Open Graph
- 🎯 **Performance Optimized** with image optimization and lazy loading
- 🎨 **Customizable** via config file

## Sections

- **Header/Navbar**: Fixed navigation with smooth scrolling, dark mode toggle, and mobile menu
- **Hero**: Eye-catching hero section with animated intro and call-to-action
- **About**: Personal bio, headshot, and timeline of experience/education
- **Skills**: Visual representation of technical skills with progress bars
- **Projects**: Featured projects with filtering, tech stack badges, and links
- **Contact**: Contact form and social media links
- **Footer**: Copyright and back-to-top button

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Navigate to the project directory:

```bash
cd portfolio-template
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Edit `config/site.ts` to customize:

- **Personal Info**: Name, title, bio, email
- **Social Links**: GitHub, LinkedIn, Twitter, etc.
- **Navigation**: Menu items and links
- **Experience**: Work history timeline
- **Education**: Educational background
- **Skills**: Technical skills with proficiency levels
- **Projects**: Featured projects with images, descriptions, and links
- **SEO**: Meta tags, Open Graph, and social media previews

### Styling

- **Colors**: Modify Tailwind classes in components or extend the theme in `tailwind.config.ts`
- **Fonts**: Change the font in `app/layout.tsx` (currently using Inter from Google Fonts)
- **Animations**: Adjust Framer Motion animations in individual components

### Images

Replace placeholder images:

- Profile image: Update the URL in `components/About.tsx`
- Project images: Update URLs in `config/site.ts` projects array
- OG Image: Create and add your Open Graph image

### Contact Form

The contact form currently uses a mock submission. To enable real form handling:

1. **Option 1: Formspree**

   - Sign up at [formspree.io](https://formspree.io)
   - Get your form endpoint
   - Update the form submission in `components/Contact.tsx`

2. **Option 2: Custom API Route**

   - Create `app/api/contact/route.ts`
   - Implement your email service (SendGrid, Resend, etc.)
   - Update the form submission in `components/Contact.tsx`

3. **Option 3: Email Service**
   - Use services like Resend, SendGrid, or Nodemailer
   - Create an API route to handle submissions

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live!

### Other Platforms

This template can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build preset
- **AWS Amplify**: Connect your repository
- **Railway**: Deploy with one click
- **Self-hosted**: Build with `npm run build` and serve with `npm start`

## Project Structure

```
portfolio-template/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles
│   ├── robots.ts           # Robots.txt
│   └── sitemap.ts          # Sitemap
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Skills.tsx          # Skills section
│   ├── Projects.tsx        # Projects section
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer
│   └── ThemeProvider.tsx   # Dark mode provider
├── config/
│   └── site.ts             # Site configuration
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

## Performance Optimization

- ✅ Image optimization with Next.js Image component
- ✅ Lazy loading for images and components
- ✅ Code splitting with Next.js
- ✅ Optimized fonts with next/font
- ✅ Minimal bundle size

## Accessibility

- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast compliance
- ✅ Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is open source and available under the [MIT License](LICENSE).

## Support

For issues or questions, please open an issue on GitHub or contact the maintainer.

---
