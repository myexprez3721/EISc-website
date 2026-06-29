# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

EIS Agency Website - A modern, professional static website for Exprez Ideal Services, a Malaysia-based language support company offering translation, copywriting, media monitoring, and editing services across 10 Asian languages.

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript** - Form handling
- **No build process** - Pure static files

## Project Structure

```
.
├── index.html              # Home page
├── services.html           # Services showcase
├── about.html              # Company story & founder
├── contact.html            # Contact form
├── public/
│   └── images/
│       └── EIS Logo.JPG    # Brand logo
├── README.md               # Documentation
└── .gitignore             # Git ignore rules
```

## Features

- **Modern, minimal design** with red and white color scheme
- **10 Asian languages** coverage (English, Malay, Chinese, Japanese, Korean, Thai, Indonesian, Vietnamese, Burmese, Bengali)
- **Fully responsive** across all devices
- **No dependencies** - Pure HTML/CSS/JS
- **Easy to host** - Works on any static hosting (GitHub Pages, Cloudflare Pages, Netlify, etc.)
- **Contact form** with client inquiries

## Pages

- **Home** - Hero section with company overview and key stats
- **Services** - Translation, Copywriting, Media Monitoring, Editing
- **About** - Company story and founder background
- **Contact** - Contact form and direct contact info

## How to Use

### Local Preview
Simply open `index.html` in your browser to see the website.

### Deployment

#### GitHub Pages (Free, easiest)
1. Push to GitHub: `git push origin main`
2. Go to repository Settings → Pages
3. Select "Deploy from branch" → main branch → /root folder
4. Your site is live at `https://yourusername.github.io/EISc-website/`

#### Cloudflare Pages
1. Go to Cloudflare Dashboard → Pages
2. Create new project from GitHub
3. Connect EISc-website repository
4. No build command needed
5. Deploy!

#### Other Static Hosting
- Netlify
- Vercel (static mode)
- Render
- AWS S3 + CloudFront
- Any web hosting with FTP access

## Customization

### Change Colors
Edit the color codes in each HTML file's `<style>` section:
- `#B91C1C` - Primary red
- `#7F1D1D` - Dark red
- `#ffffff` - White
- `#f9fafb` - Light gray

### Add New Pages
1. Create new `.html` file
2. Copy navigation and footer from existing page
3. Add your content in the middle section
4. Update navigation links in all pages

### Update Content
Edit the text content directly in the HTML files. All content is between standard HTML tags.

## Design Notes

- **Color Scheme:** Red (#B91C1C) and white with light grays
- **Typography:** Segoe UI / Roboto sans-serif
- **Layout:** Modern & minimal with generous whitespace
- **Responsive:** Mobile-first design that adapts to all screen sizes
- **Brand:** EIS Agency logo in header and footer
