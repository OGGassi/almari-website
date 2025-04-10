# AlmAri Website

A portfolio-style website for showcasing handmade sweets, artistic cakes, and delightful desserts created by Ziv Lichi Gassner.

## Project Overview

AlmAri is a digital showcase presenting a unique blend of culinary design and visual storytelling. This is not an e-commerce site but rather a space for inspiration, exploration, and personal connection. Orders are placed through WhatsApp or email after clients discover creations they love.

### Brands
- **AlmAri** - Main brand (artistic cakes)
- **Coco Lulu** - Chocolate, candies, and confectionery
- **OogiAri** - Cookies and appetizers

## Tech Stack

- **Frontend**: Next.js with TypeScript and Tailwind CSS
- **Backend**: Supabase (PostgreSQL database, authentication, storage)
- **Content Integration**: Instagram via Zapier/Make automation
- **Hosting**: Netlify/Vercel
- **Internationalization**: next-i18next (Hebrew primary, English secondary)

## Key Features

- Mobile-first, Hebrew-first design
- Portfolio gallery with brand filtering
- Automatic content import from Instagram
- Theme customization via admin panel
- Newsletter/collection creation tool for users
- Multilingual support (Hebrew/English)

## Project Status

- 🚧 **Current Phase**: Project Initialization
- 📅 **Last Updated**: [Date]

## Development Setup

### Prerequisites
- Node.js (v16+)
- npm or yarn
- GitHub account
- Supabase account
- Zapier/Make account

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/almari-website.git
cd almari-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

## Documentation

Detailed documentation can be found in the `/docs` folder:

- [Architecture Overview](./docs/architecture.md)
- [Design System Guidelines](./docs/design-system.md)
- [Content Management](./docs/content-management.md)
- [Setup & Deployment](./docs/setup.md)
- [Internationalization](./docs/internationalization.md)

## Contributing

This project is being developed by [Your Name] for Ziv Lichi Gassner.

## License

All Rights Reserved - This project and its assets are not licensed for redistribution or reuse.
