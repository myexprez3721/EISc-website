# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EIS Agency Website - A modern, full-stack Next.js website for Exprez Ideal Services, a Malaysia-based language support company offering translation, copywriting, media monitoring, and editing services across 10 Asian languages.

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript + React
- **Styling:** Tailwind CSS
- **API Clients:** Axios for HTTP requests
- **Deployment:** Vercel (recommended)

## Project Structure

```
.
├── app/
│   ├── layout.tsx              # Root layout with Navigation & Footer
│   ├── page.tsx                # Home page
│   ├── globals.css             # Global Tailwind styles
│   ├── services/page.tsx       # Services showcase page
│   ├── about/page.tsx          # About & founder story
│   ├── contact/page.tsx        # Contact form
│   ├── translate/page.tsx      # Machine translation tool
│   └── api/
│       └── translate/route.ts  # Translation API endpoint
├── components/
│   ├── Navigation.tsx          # Sticky navigation header
│   ├── Footer.tsx              # Site footer
│   ├── HeroSection.tsx         # Home hero section
│   ├── LanguagesSection.tsx    # Supported languages grid
│   ├── WhyChooseSection.tsx    # Why choose EIS
│   └── TranslationTool.tsx     # Machine translation UI
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind theme
├── next.config.js              # Next.js config
├── .env.example                # Environment variables template
└── .gitignore                  # Git ignore rules
```

## Development

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create `.env.local` and add API keys (see `.env.example`):
   ```
   OPENAI_API_KEY=your-openai-key
   ANTHROPIC_API_KEY=your-anthropic-key
   GOOGLE_API_KEY=your-google-key
   ```

3. Run dev server:
   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser

### Build for Production

```bash
npm run build
npm start
```

## Key Features

- **Modern, minimal design** with red and white color scheme
- **Responsive** across all devices
- **Machine Translation Tool** with:
  - Support for ChatGPT, Claude, and Gemini
  - 10 Asian languages
  - Daily 400-word free limit
  - Client-side word count tracking
  - Backend API for secure model calls

## Environment Variables

Required for machine translation feature:
- `OPENAI_API_KEY` - ChatGPT API access
- `ANTHROPIC_API_KEY` - Claude API access
- `GOOGLE_API_KEY` - Gemini API access

See `.env.example` for template.

## Deployment

### Vercel (Recommended)

1. Push to GitHub: `git push origin main`
2. Connect repo at https://vercel.com/new
3. Add environment variables in Vercel settings
4. Deploy automatically on push

### Other Platforms

Works with any Node.js hosting (Heroku, Railway, Render, etc.)

## Design Notes

- **Brand Colors:** Primary red (#B91C1C), white backgrounds
- **Typography:** Clean sans-serif with serif accents on logo
- **Layout:** Modern & minimal with generous whitespace
- **CTA:** Get a Quote, Try Free Translation, Contact Us
