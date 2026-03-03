# Wattex Energy - React + Tailwind CSS

Premium solar energy company website with Gemini-powered chatbot.

## Setup

```bash
npm install
cp .env.example .env   # Add your Gemini API key
npm start
```

## Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer, Layout wrapper
│   ├── ui/            # BackToTop, ChatBot, ParallaxSection, HeroCarousel, FaqAccordion
│   └── sections/      # Reusable page sections
├── pages/             # Route-level page components
├── data/              # Static data (blogs, reviews, services, etc.)
├── services/          # API services (Gemini chatbot)
├── hooks/             # Custom React hooks
└── utils/             # Pure utility functions
```

## Tech Stack

- React 18 + React Router 6
- Tailwind CSS 3 (PostCSS build)
- Framer Motion
- Google Gemini AI (chatbot)
- Font Awesome 6
