import { Project } from '../types'

export const projects: Project[] = [
  {
    title: 'AI Humanizer Pro — GPT Action Plugin',
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

