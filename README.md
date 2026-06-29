# EIS Agency - Translation & Media Monitoring Services

A modern, professional website for Exprez Ideal Services, a Malaysia-based language support company offering translation, copywriting, media monitoring, and editing services.

## 🌍 Features

- **10 Asian Languages**: English, Malay, Chinese, Japanese, Korean, Thai, Indonesian, Vietnamese, Burmese, Bengali
- **Professional Services**: Translation, Copywriting, Media Monitoring, Editing
- **Free Machine Translation Tool**: Powered by ChatGPT, Claude, or Gemini with daily 400-word limit
- **Modern Design**: Clean, minimal interface with red and white branding
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Contact Form**: Easy client inquiries and quote requests

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn
- API keys for at least one AI provider (OpenAI, Anthropic, or Google)

### Installation

```bash
# Clone the repository
git clone https://github.com/myexprez3721/EISc-website.git
cd EISc-website

# Install dependencies
npm install

# Create environment file
cp .env.example .env.local

# Add your API keys to .env.local
# OPENAI_API_KEY=...
# ANTHROPIC_API_KEY=...
# GOOGLE_API_KEY=...

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

## 📦 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Axios** - HTTP client for API calls
- **Node.js** - Backend runtime

## 📝 Pages

- **Home** - Hero section with company overview and key features
- **Services** - Detailed service descriptions and supported formats
- **About** - Company story and founder background
- **Contact** - Contact form and direct communication channels
- **Translate** - Free machine translation tool

## 🤖 Machine Translation Tool

The translation tool supports three AI providers:

1. **ChatGPT (OpenAI)** - GPT-4o Mini for fast, accurate translations
2. **Claude (Anthropic)** - Claude 3 Haiku for nuanced translations
3. **Gemini (Google)** - Gemini 1.5 Flash for versatile translations

### Daily Limits

- Free tier: 400 words per day per user
- Limits reset daily at midnight UTC
- Tracks usage in browser's localStorage

## 🔧 Configuration

### Environment Variables

Create `.env.local` with:

```env
# API Keys (at least one required for translation feature)
OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
GOOGLE_API_KEY=AIzaSy...

# Site URL (optional)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Customize Colors

Edit `tailwind.config.js` to modify the primary color:

```javascript
colors: {
  primary: '#B91C1C',      // Main red
  'primary-dark': '#7F1D1D',
  'primary-light': '#DC2626',
}
```

## 📦 Build & Deploy

### Production Build

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Connect your GitHub repository
4. Add environment variables in project settings
5. Deploy!

Vercel will automatically rebuild on every push to main.

### Deploy to Other Platforms

This is a standard Next.js app and works with:
- Heroku
- Railway.app
- Render
- AWS Amplify
- DigitalOcean
- Any Node.js hosting

## 📧 Contact

- **Email**: myexprez@gmail.com
- **Phone**: +60 16-3310747
- **Location**: Malaysia

## 📄 License

This project is proprietary to EIS Agency / Exprez Ideal Services.

## 🙏 Credits

Built with Next.js, React, TypeScript, and Tailwind CSS.

---

**Built for EIS Agency by Claude Code**
