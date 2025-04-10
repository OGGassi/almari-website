
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

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
