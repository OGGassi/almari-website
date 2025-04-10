# AlmAri Website - Setup & Installation

This document provides comprehensive setup instructions for the AlmAri website project.

## Development Environment Setup

### Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or newer)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### Local Development Setup

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/almari-website.git
cd almari-website
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Instagram/Automation
INSTAGRAM_WEBHOOK_SECRET=your_webhook_secret

# Application Settings
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_DEFAULT_LOCALE=he

# Admin Access
ADMIN_EMAIL=admin@example.com
```

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Access the development site**

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Supabase Setup

### Creating a Supabase Project

1. Sign up at [Supabase](https://supabase.com/)
2. Create a new project
3. Note your project URL and anon key for environment variables

### Database Schema Setup

Run the following SQL in the Supabase SQL Editor:

```sql
-- Create extension for UUIDs
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Brands table
CREATE TABLE brands (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  hashtag TEXT UNIQUE NOT NULL,
  logo_url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default brands
INSERT INTO brands (name, hashtag, logo_url, is_active) VALUES
('AlmAri', 'AlmAri', 'https://placeholder.com/logo-almari.png', TRUE),
('Coco Lulu', 'CocoLulu', 'https://placeholder.com/logo-cocolulu.png', TRUE),
('OogiAri', 'OogiAri', 'https://placeholder.com/logo-oogiari.png', TRUE);

-- Themes table
CREATE TABLE themes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  colors JSONB NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default theme
INSERT INTO themes (name, colors, is_active) VALUES
('Default', '{"primary":"#FF8BA7","secondary":"#FFC6C7","background":"#FAEEE7","surface":"#FFFFFF","text":"#33272A"}', TRUE);

-- Instagram posts table
CREATE TABLE instagram_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  instagram_id TEXT UNIQUE NOT NULL,
  media_url TEXT NOT NULL,
  caption TEXT,
  permalink TEXT,
  timestamp TIMESTAMPTZ NOT NULL,
  brand_id UUID REFERENCES brands(id),
  is_visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create RLS policies
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;
ALTER TABLE themes ENABLE ROW LEVEL SECURITY;
ALTER TABLE instagram_posts ENABLE ROW LEVEL SECURITY;

-- Public access policies (read-only)
CREATE POLICY "Public brands are viewable by everyone" 
  ON brands FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Public themes are viewable by everyone" 
  ON themes FOR SELECT USING (is_active = TRUE);

CREATE POLICY "Public posts are viewable by everyone" 
  ON instagram_posts FOR SELECT USING (is_visible = TRUE);

-- Admin policies (full access)
CREATE POLICY "Admins have full access to brands" 
  ON brands USING (auth.email() = current_setting('app.admin_email', TRUE));

CREATE POLICY "Admins have full access to themes" 
  ON themes USING (auth.email() = current_setting('app.admin_email', TRUE));

CREATE POLICY "Admins have full access to posts" 
  ON instagram_posts USING (auth.email() = current_setting('app.admin_email', TRUE));
```

### Storage Setup

1. Create a new storage bucket called `media`
2. Configure the following policies:

```sql
-- Public read access
CREATE POLICY "Media is publicly accessible"
ON storage.objects FOR SELECT
USING (bucket_id = 'media');

-- Admin write access
CREATE POLICY "Only admins can insert media"
ON storage.objects FOR INSERT
WITH CHECK (
  bucket_id = 'media' AND
  auth.email() = current_setting('app.admin_email', TRUE)
);
```

### Authentication Setup

1. Configure Google Auth provider in Supabase Auth settings
2. Set the callback URL to `https://your-site-url.com/api/auth/callback`
3. Add the admin email to the environment variables

## Instagram Integration Setup

### Zapier Setup

1. Create a new Zapier account or use an existing one
2. Create a new Zap with the following configuration:

**Trigger**: Instagram - New Media Posted by User
- Connect to Ziv's Instagram account
- Filter for posts with hashtag #AlmariWebsite

**Action**: Webhook - POST
- URL: `https://your-site-url.com/api/instagram-webhook`
- Headers:
  - Content-Type: application/json
  - Authorization: Bearer YOUR_WEBHOOK_SECRET
- Body:
  ```json
  {
    "id": "{{id}}",
    "media_url": "{{media_url}}",
    "caption": "{{caption}}",
    "permalink": "{{permalink}}",
    "timestamp": "{{timestamp}}"
  }
  ```

### Alternative: Make.com (Integromat) Setup

If you prefer using Make.com instead of Zapier:

1. Create a new Make.com scenario
2. Add Instagram module as trigger for new media
3. Add HTTP module to send webhook to your site
4. Use similar configuration as the Zapier setup

## Deployment

### Production Environment

#### Vercel Deployment

1. **Push your code to GitHub**

2. **Connect Vercel to your GitHub repository**
   - Sign up/login to [Vercel](https://vercel.com/)
   - Import your repository
   - Configure your project:
     - Framework Preset: Next.js
     - Environment Variables: Copy from `.env.local`
     - Build Command: `npm run build`
     - Output Directory: `.next`

3. **Set up a custom domain**
   - Add your domain in Vercel's dashboard
   - Configure DNS settings as instructed

#### Netlify Deployment (Alternative)

1. **Push your code to GitHub**

2. **Connect Netlify to your GitHub repository**
   - Sign up/login to [Netlify](https://netlify.com/)
   - Import your repository
   - Configure your project:
     - Build Command: `npm run build`
     - Publish Directory: `out`
     - Environment Variables: Copy from `.env.local`

3. **Set up a custom domain**
   - Add your domain in Netlify's dashboard
   - Configure DNS settings as instructed

### CI/CD Pipeline

The project uses GitHub Actions for continuous integration:

1. `.github/workflows/ci.yml` - Runs tests and linting on PR
2. `.github/workflows/deploy.yml` - Handles deployment to staging/production

## Maintenance & Updates

### Regular Maintenance Tasks

1. **Dependencies Updates**
   ```bash
   npm outdated
   npm update
   ```

2. **Database Backups**
   - Automated through Supabase scheduled functions
   - Manual export available in Supabase dashboard

3. **Content Synchronization**
   - Daily Instagram sync via scheduled function
   - Manual trigger available in admin panel

### Troubleshooting Common Issues

1. **Instagram Integration Issues**
   - Check Zapier/Make logs for errors
   - Verify webhook URL and authentication
   - Test webhook endpoint manually

2. **Deployment Failures**
   - Review build logs in Vercel/Netlify
   - Check for environment variable issues
   - Verify dependencies are correctly installed

3. **Database Connection Issues**
   - Check Supabase status
   - Verify connection strings
   - Test database access locally

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Zapier Documentation](https://zapier.com/help)
