# AlmAri Website - Content Management Rules

This document outlines the rules and processes for managing content on the AlmAri website.

## Content Sources

The primary content source for the AlmAri website is Instagram, with posts being automatically imported based on specific hashtags. This document outlines how this process works and how to manage content.

## Instagram Integration

### Hashtag System

The website uses a dual-hashtag system to determine which content should appear on the website:

1. **Website Trigger Hashtag**: `#AlmariWebsite`
   - This hashtag indicates that a post should be imported to the website
   - Without this hashtag, content will never appear on the website

2. **Brand Hashtags**:
   - `#AlmAri` - For main brand content (cakes and desserts)
   - `#CocoLulu` - For chocolate and confectionery items
   - `#OogiAri` - For cookies and appetizers

### Content Import Rules

A post must have **both** the website trigger hashtag **and** one brand hashtag to be imported.

Examples:
- `#AlmariWebsite #AlmAri` ✅ - Will be imported with AlmAri branding
- `#AlmariWebsite #CocoLulu` ✅ - Will be imported with CocoLulu branding
- `#AlmAri` only ❌ - Will not be imported (missing website trigger)
- `#AlmariWebsite` only ❌ - Will not be imported (missing brand association)
- Multiple brand hashtags ❌ - Only the first brand hashtag will be used

### Content Removal

Content can be removed from the website in three ways:

1. **Remove Hashtag**: Edit the Instagram post to remove the `#AlmariWebsite` hashtag
2. **Delete Post**: Delete the post from Instagram
3. **Admin Override**: Use the admin panel to hide specific items

The system performs a daily synchronization to reflect these changes.

## Content Structure

### Post Components

Each imported post contains:

1. **Image(s)**: The primary visual content
2. **Caption**: Text description from Instagram
3. **Brand Association**: Determined by hashtag
4. **Permalink**: Link back to the original Instagram post
5. **Timestamp**: When the content was posted

### Metadata & Enrichment

Administrators can enhance content with additional metadata:

1. **Custom Title**: Override the default caption-based title
2. **Categories**: Additional grouping beyond the brand
3. **Featured Status**: Highlight specific items
4. **Visibility**: Control whether an item appears on the site

## Gallery Organization

### Filtering

The gallery can be filtered by:

1. **Brand**: AlmAri, CocoLulu, or OogiAri
2. **Admin-defined Categories**: Optional additional filtering

### Sorting

Content is sorted by default based on:

1. Featured items first
2. Then by Instagram post date (newest first)

Administrators can manually adjust the order of items.

## Content Backup Strategy

### Database Storage

All content imported from Instagram is stored in the Supabase database:

1. **Media Files**: Stored in Supabase Storage
2. **Metadata**: Stored in PostgreSQL tables
3. **Original Source**: Link back to Instagram preserved

### Periodic Backup

The system performs:

1. **Daily Backup**: Of the entire content database
2. **Weekly Export**: Full content export as JSON/CSV
3. **Media Archive**: Regular archive of all media files

## Newsletter Tool

### User Selection Process

1. Users browse the gallery and select items
2. Selected items are temporarily stored in browser session
3. Users can generate a "newsletter" of selected items
4. This collection can be shared via email or downloaded

### Data Storage

1. No user data is saved on the server
2. Collections are temporary and session-based
3. Users can save their selection locally if needed

## Admin Content Management

### Access Control

Only authorized administrators (Ziv) can access the content management features.

### Admin Capabilities

1. **Content Visibility**: Show/hide specific items
2. **Editing**: Modify titles, descriptions, and metadata
3. **Organization**: Create categories and featured collections
4. **Moderation**: Review and approve imported content

### Content Edits

When editing content, the system maintains:

1. **Edit History**: Track changes to content
2. **Original Source**: Always preserve the link to Instagram
3. **Timestamps**: Record when edits were made

## Multilingual Content

### Language Handling

1. **Hebrew Content**: Primary content from Instagram (RTL)
2. **English Translations**: Can be added manually in admin
3. **Content Structure**: Same gallery structure for both languages

### Translation Workflow

1. New content imported with Hebrew text
2. Admin interface provides translation fields
3. Translations can be added at any time
4. Missing translations show Hebrew content by default

## Content Quality Guidelines

### Image Standards

1. **Resolution**: Minimum 1080×1080px recommended
2. **Quality**: High-quality, well-lit photographs
3. **Styling**: Consistent with AlmAri brand aesthetic

### Text Guidelines

1. **Captions**: Clear, descriptive text that enhances the image
2. **Hashtags**: Strategic use of brand hashtags
3. **Length**: Concise but informative descriptions

## Troubleshooting

### Common Issues

1. **Missing Content**: Check that both required hashtags are present
2. **Incorrect Branding**: Verify the order of hashtags in the post
3. **Sync Delays**: Allow up to 24 hours for content updates

### Support Process

1. Check Instagram post formatting
2. Verify hashtags are correctly applied
3. Use admin panel to manually check content status
4. Contact technical support if issues persist
