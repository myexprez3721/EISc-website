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
│   └── contact/page.tsx        # Contact form
├── components/
│   ├── Navigation.tsx          # Sticky navigation header
│   ├── Footer.tsx              # Site footer
│   ├── HeroSection.tsx         # Home hero section
│   ├── LanguagesSection.tsx    # Supported languages grid
│   └── WhyChooseSection.tsx    # Why choose EIS
├── public/images/              # Logo and static images
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── tailwind.config.js          # Tailwind theme
├── next.config.js              # Next.js config
└── .gitignore                  # Git ignore rules
```

## Development

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run dev server:
   ```bash
   npm run dev
   ```

3. Open http://localhost:3000 in your browser

### Build for Production

```bash
npm run build
npm start
```

## Key Features

- **Modern, minimal design** with red and white color scheme
- **Responsive** across all devices
- **10 Asian languages** coverage (English, Malay, Chinese, Japanese, Korean, Thai, Indonesian, Vietnamese, Burmese, Bengali)
- **Easy deployment** to Cloudflare Pages (no API keys required)

## Deployment

### Cloudflare Pages (Recommended)

1. Go to **Cloudflare Dashboard** → **Pages**
2. Click **"Create a project"** → **"Connect to Git"**
3. Select **GitHub** and authorize, then select **EISc-website** repo
4. **Build settings:**
   - Build command: `npm run build`
   - Output directory: `.next`
5. Click **Deploy** and you're live!

### Other Platforms

Works with any Node.js hosting (Vercel, Heroku, Railway, Render, etc.)

## Design Notes

- **Brand Colors:** Primary red (#B91C1C), white backgrounds
- **Typography:** Clean sans-serif with serif accents on logo
- **Layout:** Modern & minimal with generous whitespace
- **CTA:** Get a Quote, Contact Us, Explore Services
