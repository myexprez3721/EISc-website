# EIS Agency - Translation & Media Monitoring Services

A modern, professional website for Exprez Ideal Services, a Malaysia-based language support company offering translation, copywriting, media monitoring, and editing services.

## 🌍 Features

- **10 Asian Languages**: English, Malay, Chinese, Japanese, Korean, Thai, Indonesian, Vietnamese, Burmese, Bengali
- **Professional Services**: Translation, Copywriting, Media Monitoring, Editing
- **Modern Design**: Clean, minimal interface with red and white branding
- **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- **Contact Form**: Easy client inquiries and quote requests
- **Easy Deployment**: Deploy to Cloudflare Pages with no environment variables needed

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/myexprez3721/EISc-website.git
cd EISc-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the site.

## 📦 Tech Stack

- **Next.js 14.1.3** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Node.js** - Backend runtime

## 📝 Pages

- **Home** - Hero section with company overview and key features
- **Services** - Detailed service descriptions and supported formats
- **About** - Company story and founder background
- **Contact** - Contact form and direct communication channels

## 🔧 Configuration

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

### Deploy to Cloudflare Pages (Recommended)

1. Go to [cloudflare.com/products/pages](https://www.cloudflare.com/products/pages/)
2. Go to **Pages** in your dashboard
3. Click **"Create a project"** → **"Connect to Git"**
4. Select **GitHub** and authorize, then select **EISc-website** repo
5. **Build settings:**
   - Build command: `npm run build`
   - Output directory: `.next`
6. Click **Deploy** and you're live!

### Deploy to Other Platforms

This is a standard Next.js app and works with:
- Vercel
- Heroku
- Railway.app
- Render
- DigitalOcean
- AWS Amplify

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
