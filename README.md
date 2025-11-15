# Minimal Portfolio - Retro Themed Portfolio Website

A unique, retro-themed portfolio website built with React, TypeScript, and Tailwind CSS. Features a dark, sophisticated design with smooth animations and optimized performance.

## Features

- **100% Original Design**: Unique retro-themed layout with custom animations
- **Dark Theme**: Sophisticated dark color palette (not neon)
- **Lightweight & Fast**: Optimized for performance with code splitting and lazy loading
- **SEO Optimized**: Complete SEO implementation for fast ranking
- **Fully Responsive**: Mobile-first design that works on all devices
- **Contact in Top & Bottom**: Contact information in both Header and Footer
- **Resume Download**: One-click PDF resume download
- **Social Links**: Direct links to LinkedIn, GitHub, and Email

## Tech Stack

- React 18+ with TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Vite (build tool)
- React Icons

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Project Structure

```
src/
├── components/     # React components
├── data/          # Static data files
├── hooks/         # Custom React hooks
├── styles/        # CSS files
├── types/         # TypeScript interfaces
└── utils/         # Utility functions
```

## Customization

### Update Personal Information

Edit `src/data/personal.ts` to update your contact information, social links, and resume URL.

### Update Resume

**Important**: Replace the placeholder `public/resume.pdf` file with your actual resume PDF. The resume download button in the header will use this file.

### Update Projects

Edit `src/data/projects.ts` to add or modify your projects.

### Update Experience

Edit `src/data/experience.ts` to update your work experience.

### Update Skills

Edit `src/data/skills.ts` to modify your skills list.

## Deployment

The site is ready to deploy to Netlify, Vercel, or any static hosting service.

## License

MIT

