import { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'Gift Card SaaS Platform',
    badge: 'Production-Ready',
    description:
      'A full-stack, multi-tenant SaaS application built to give businesses a complete gift card infrastructure - without building one from scratch. Merchants onboard, configure payment gateways, create branded gift card products, and track sales through analytics dashboards. Customers get a storefront, digital wallet, and multiple redemption methods including QR code, link, and API - compatible with both online and in-store POS workflows.',
    technologies: [
      'Node.js', 'Express.js', 'TypeScript', 'Next.js 14', 'React 18',
      'PostgreSQL', 'Prisma ORM', 'Redis', 'BullMQ',
      'Stripe Connect', 'PayPal', 'Razorpay', 'UPI',
      'Tailwind CSS', 'Docker', 'GitHub Actions',
    ],
    highlights: [
      'Multi-tenant architecture with 3 user roles (Admin, Merchant, Customer) and fully isolated merchant data',
      '4 payment gateways - Stripe Connect, PayPal, Razorpay & UPI - with refunds, webhooks & multi-currency',
      'Enterprise security: JWT + refresh token rotation, TOTP 2FA, device fingerprinting, IP fraud blacklist & audit logging',
      'Background job system (BullMQ + Redis) for scheduled delivery, expiry reminders & token cleanup',
      'Full gift card lifecycle: bulk creation, QR/NFC sharing, 4 redemption methods, 3 delivery channels (email, SMS, PDF)',
      'Admin control panel with 18 feature flags, system health monitoring & payout administration',
    ],
    stats: [
      { label: 'Backend Services', value: '40' },
      { label: 'Frontend Pages', value: '45' },
      { label: 'DB Models', value: '23' },
      { label: 'API Routes', value: '25+' },
      { label: 'Controllers', value: '27' },
      { label: 'Components', value: '36' },
    ],
  },
  {
    title: 'Content Freshness Monitor - WordPress Plugin',
    description:
      'Published an SEO-focused WordPress plugin on the official WordPress.org repository to combat content decay. Features smart content age monitoring with color-coded dashboard (Fresh/Aging/Stale/Very Stale), privacy-focused analytics engine tracking user engagement and time-on-page metrics, and automated background Cron jobs for performance optimization. Implemented role-based exclusion, CSV export functionality, and GDPR-compliant IP anonymization. Built with custom database tables ensuring zero impact on site performance. Designed premium UI with card layouts, toggle switches, and live data caching.',
    githubUrl: 'https://wordpress.org/plugins/zevvolabs-content-update-monitor/',
    liveUrl: 'https://wordpress.org/plugins/zevvolabs-content-update-monitor/',
    technologies: ['PHP', 'WordPress', 'MySQL', 'JavaScript', 'AJAX', 'WP Cron', 'Custom DB Tables'],
  },
  {
    title: 'AI Humanizer Pro - GPT Action Plugin',
    description:
      'Built and deployed a free AI text detection & humanization plugin integrated with ChatGPT as a custom GPT Action. Developed a Node.js/Express REST API hosted on Railway with AI detection engine scoring text 0–100 for AI probability. Implemented NLP-based humanization with 3 rewrite modes (light / medium / aggressive) using synonym mapping, contraction restoration and sentence restructuring. Designed OpenAPI 3.1 spec enabling seamless ChatGPT integration with zero authentication required (public & free). Built-in rate limiting, privacy policy, and live health monitoring.',
    githubUrl: 'https://github.com/MuhdNihalCY/ai-humanizer-gpt',
    liveUrl: 'https://chatgpt.com/g/g-699980107db481919fe2f531a29ff294-ai-humanizer-pro',
    technologies: ['Node.js', 'Express', 'OpenAPI 3.1', 'Railway', 'ChatGPT Actions', 'NLP'],
  },
  {
    title: 'Online Hotel Room Booking System',
    description:
      'A comprehensive full-stack hotel booking platform built with modern web technologies. Features secure user authentication with email verification, real-time room availability checking, and seamless booking management. The system includes admin dashboard for hotel management, customer booking history, and payment integration. Built with responsive design principles ensuring optimal experience across all devices.',
    githubUrl: 'https://github.com/MuhdNihalCY/Hotel-Booking-Sysytem',
    technologies: ['Node.js', 'Express.js', 'MongoDB', 'Docker', 'HTML', 'CSS', 'Bootstrap', 'jQuery', 'AJAX', 'Nodemailer'],
  },
]

