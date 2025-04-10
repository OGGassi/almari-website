# AlmAri Website - Architecture Overview

This document outlines the technical architecture of the AlmAri website.

## System Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│    Instagram    │───▶│ Zapier/Make     │───▶│    Supabase     │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └────────┬────────┘
                                                       │
                                                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│                 │    │                 │    │                 │
│   CDN/Hosting   │◀───│   Next.js App   │◀───│  Admin Panel    │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

## Component Design

The application follows a modern React component architecture:

1. **Atomic Design**: Building from atoms to pages
2. **Separation of Concerns**:
   - UI Components (presentation)
   - Container Components (data fetching)
   - Utility Functions (business logic)
3. **State Management**: React Context API for theme and UI state

## Data Flow

### Content Ingestion
1. Instagram post with specific hashtags (#AlmariWebsite + brand hashtag)
2. Zapier/Make automation detects new post
3. Content stored in Supabase database
4. Available through API endpoints

### Content Display
1. Next.js pages request data via Supabase client
2. Server-side rendering for SEO and performance
3. Client-side hydration for interactivity
4. Images served via CDN with optimization

## Database Schema

### Key Tables

**instagram_posts**
```sql
CREATE TABLE instagram_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  instagram_id TEXT UNIQUE NOT NULL,
  media_url TEXT NOT NULL,
  caption TEXT,
  permalink TEXT,
  timestamp TIMESTAMPTZ NOT NULL,
  brand TEXT NOT NULL,
  is_visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**brands**
```sql
CREATE TABLE brands (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  hashtag TEXT UNIQUE NOT NULL,
  logo_url TEXT NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**themes**
```sql
CREATE TABLE themes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  colors JSONB NOT NULL,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

## API Endpoints

The application uses Supabase for data access with the following key endpoints:

- `GET /api/gallery` - Retrieve gallery items with filtering
- `GET /api/gallery/:id` - Get single gallery item details
- `POST /api/newsletter` - Generate temporary newsletter collection
- `GET /api/brands` - List available brands for filtering
- `GET /api/themes` - List available themes (admin only)

## Security Considerations

1. **Authentication**: Google OAuth for admin access only
2. **Authorization**: Row-level security policies in Supabase
3. **API Access**: Appropriate CORS and rate limiting
4. **Content Security**: No user-generated content (admin only)

## Performance Optimizations

1. **Image Processing**: Automated optimization via Next.js Image
2. **Code Splitting**: Route-based and component-based
3. **Caching Strategy**: Static generation with incremental static regeneration
4. **Critical CSS**: Inline critical styles

## Error Handling & Monitoring

1. **Error Boundaries**: React error boundaries for component isolation
2. **Fallback UI**: Graceful degradation for network issues
3. **Monitoring**: Simple analytics for tracking errors and usage

## Future Architecture Considerations

1. **Instagram API**: Direct integration if automation proves unreliable
2. **CDN Optimization**: Potential move to specialized image CDN
3. **Serverless Functions**: For enhanced newsletter functionality
