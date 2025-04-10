# AlmAri Website - Design System Guidelines

This document outlines the design principles, components, and visual language for the AlmAri website.

## Design Principles

1. **Image-Focused**: The primary content is visual - cakes and sweets should be the hero
2. **Clean & Modern**: Simple layouts that don't distract from the imagery
3. **Brand Consistency**: Visual elements reinforce the AlmAri brand experience
4. **Mobile-First**: Design optimized for touch interfaces and smaller screens
5. **Accessibility**: Ensure the site is usable by everyone

## Color System

### Theme Structure

Each theme consists of 5 key colors:

```javascript
{
  primary: '#COLOR',    // Brand color, used for primary buttons, links
  secondary: '#COLOR',  // Accent color for highlights, secondary actions
  background: '#COLOR', // Page background
  surface: '#COLOR',    // Card/component backgrounds
  text: '#COLOR',       // Primary text color
}
```

### Default Theme: AlmAri

The default theme uses pastel colors that complement food photography:

```javascript
{
  primary: '#FF8BA7',    // Soft pink
  secondary: '#FFC6C7',  // Light pink
  background: '#FAEEE7', // Cream
  surface: '#FFFFFF',    // White
  text: '#33272A',       // Deep brown
}
```

### Theme Variants

Additional themes will follow the same structure with different color palettes:
- Spring
- Summer
- Autumn
- Winter
- Birthday
- Passover

## Typography

### Font Family
- **Primary**: Heebo (Hebrew-friendly)
- **Secondary**: Assistant (for longer text)

### Type Scale

```css
--text-xs: 0.75rem;  /* 12px */
--text-sm: 0.875rem; /* 14px */
--text-md: 1rem;     /* 16px - Base */
--text-lg: 1.125rem; /* 18px */
--text-xl: 1.25rem;  /* 20px */
--text-2xl: 1.5rem;  /* 24px */
--text-3xl: 1.875rem;/* 30px */
--text-4xl: 2.25rem; /* 36px */
```

### Font Weights
- Light: 300
- Regular: 400
- Medium: 500
- Bold: 700

## Spacing System

Using a 4px base unit:

```css
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem;  /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem;    /* 16px */
--space-5: 1.25rem; /* 20px */
--space-6: 1.5rem;  /* 24px */
--space-8: 2rem;    /* 32px */
--space-10: 2.5rem; /* 40px */
--space-12: 3rem;   /* 48px */
--space-16: 4rem;   /* 64px */
```

## Component Library

### Core Components

#### Button
```jsx
<Button 
  variant="primary" | "secondary" | "outline" | "text"
  size="sm" | "md" | "lg"
  {...props}
>
  Button Text
</Button>
```

#### Card
```jsx
<Card 
  elevation="none" | "sm" | "md" | "lg"
  padding="none" | "sm" | "md" | "lg"
  {...props}
>
  Card Content
</Card>
```

#### GalleryItem
```jsx
<GalleryItem
  image="/path/to/image.jpg"
  brand="AlmAri" | "CocoLulu" | "OogiAri"
  caption="Item description"
  instagramLink="https://instagram.com/p/..."
  {...props}
/>
```

#### Text
```jsx
<Text
  variant="body" | "heading" | "caption" | "display"
  size="xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl"
  weight="light" | "regular" | "medium" | "bold"
  {...props}
>
  Text content
</Text>
```

### Layout Components

#### Container
```jsx
<Container
  maxWidth="sm" | "md" | "lg" | "xl" | "full"
  padding="none" | "sm" | "md" | "lg"
  {...props}
>
  Page content
</Container>
```

#### Grid
```jsx
<Grid
  columns={1-12}
  gap="none" | "sm" | "md" | "lg"
  {...props}
>
  <GridItem span={1-12}>
    Grid content
  </GridItem>
</Grid>
```

## Iconography

Using a consistent icon set from [Phosphor Icons](https://phosphoricons.com/):

```jsx
<Icon
  name="heart" | "instagram" | "whatsapp" | "email" | ...
  size="sm" | "md" | "lg"
  color="primary" | "secondary" | "text" | ...
  {...props}
/>
```

## Animation & Transitions

Subtle animations that enhance the experience without being distracting:

```css
/* Standard transition */
--transition-standard: 150ms ease-in-out;

/* Page transitions */
--transition-page: 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* Hover effects */
--transition-hover: 100ms ease;
```

## Responsive Breakpoints

```css
--breakpoint-sm: 640px;  /* Mobile landscape */
--breakpoint-md: 768px;  /* Tablet */
--breakpoint-lg: 1024px; /* Small desktop */
--breakpoint-xl: 1280px; /* Large desktop */
```

## Accessibility Guidelines

1. **Color Contrast**: All text meets WCAG AA standard (4.5:1 for normal text, 3:1 for large text)
2. **Focus States**: Visible focus indicators for keyboard navigation
3. **Alternative Text**: All images have appropriate alt text
4. **Semantic HTML**: Proper heading hierarchy and landmark regions
5. **RTL Support**: Layout works correctly in right-to-left mode for Hebrew

## Image Guidelines

1. **Aspect Ratios**: Maintain consistent ratios (4:3, 1:1, etc.)
2. **Quality Settings**: JPEG quality 80% for photos, PNG for logos
3. **Responsive Sizes**: Multiple sizes generated for different viewports
4. **Lazy Loading**: Images outside viewport load only when needed
5. **Placeholders**: Low-resolution blurry placeholders during loading

## Design Implementation

This design system is implemented using:
- Tailwind CSS for styling
- CSS variables for theming
- React components for consistency
- Next.js Image component for optimization
