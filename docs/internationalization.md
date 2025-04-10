# AlmAri Website - Internationalization

This document outlines the internationalization (i18n) strategy for the AlmAri website, focusing on Hebrew as the primary language with English as a secondary option.

## Language Configuration

The site uses `next-i18next` for translation management with the following configuration:

### Supported Languages

- **Hebrew (he)**: Primary language, RTL
- **English (en)**: Secondary language, LTR

### Default Configuration

The site defaults to Hebrew for all users, with the option to switch to English:

```javascript
// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: 'he',
    locales: ['he', 'en'],
    localeDetection: true,
  },
}
```

## RTL Support

### Layout Direction

The application handles Right-to-Left (RTL) layout for Hebrew content:

```jsx
// _app.js
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === 'he' ? 'rtl' : 'ltr';
  
  return (
    <html lang={locale} dir={dir}>
      <body>
        <Component {...pageProps} />
      </body>
    </html>
  );
}
```

### CSS Adjustments for RTL

Tailwind CSS is configured to support RTL layouts automatically:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-rtl'),
  ],
}
```

Example usage in components:

```jsx
// RTL-aware padding
<div className="pl-4 pr-8"> // Will flip in RTL mode
```

## Translation Strategy

### Content Sources

The site handles content from different sources:

1. **Static UI Elements**: Stored in translation files
2. **Instagram Content**: Hebrew by default, manual English translation
3. **Dynamic Admin Content**: Translated manually in admin panel

### Translation Files

Translation files are organized by namespaces:

```
/public/locales/
  /he/
    common.json    // UI elements
    gallery.json   // Gallery-specific terms
    admin.json     // Admin panel text
  /en/
    common.json
    gallery.json
    admin.json
```

Example translation file (he/common.json):

```json
{
  "site": {
    "name": "AlmAri",
    "description": "עיצוב עוגות וממתקים בעבודת יד"
  },
  "nav": {
    "home": "דף הבית",
    "gallery": "גלריה",
    "contact": "יצירת קשר",
    "about": "אודות"
  },
  "buttons": {
    "contact": "צור קשר",
    "viewGallery": "צפה בגלריה",
    "langSwitch": "English"
  }
}
```

### Translation Components

A custom Text component simplifies translation usage:

```jsx
// components/Text.js
import { useTranslation } from 'next-i18next';

export function Text({ 
  id, 
  defaultText, 
  values = {}, 
  ns = 'common',
  ...props 
}) {
  const { t } = useTranslation(ns);
  return (
    <span {...props}>
      {t(id, { defaultValue: defaultText, ...values })}
    </span>
  );
}

// Usage:
<Text id="nav.home" defaultText="Home" />
```

## Translating Dynamic Content

### Instagram Content Translation

Instagram content (primarily in Hebrew) can be translated in the admin panel:

1. Original Hebrew caption stored in database
2. English translation added manually
3. Display based on selected language

Database structure:

```sql
CREATE TABLE content_translations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  content_id UUID REFERENCES instagram_posts(id),
  locale TEXT NOT NULL,
  field_name TEXT NOT NULL,
  translated_text TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(content_id, locale, field_name)
);
```

### Admin Translation Interface

The admin panel includes a translation management interface:

```jsx
const TranslationEditor = ({ contentId, field, originalText }) => {
  const [translation, setTranslation] = useState('');
  
  // Save translation to database
  const saveTranslation = async () => {
    await supabase
      .from('content_translations')
      .upsert({
        content_id: contentId,
        locale: 'en',
        field_name: field,
        translated_text: translation
      });
  };
  
  return (
    <div>
      <h4>Original (Hebrew)</h4>
      <p>{originalText}</p>
      
      <h4>English Translation</h4>
      <textarea
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
      />
      
      <button onClick={saveTranslation}>Save Translation</button>
    </div>
  );
};
```

## Language Switching

### Language Toggle Component

A simple language switch component:

```jsx
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

export function LanguageSwitch() {
  const router = useRouter();
  const { t } = useTranslation();
  
  const switchLanguage = () => {
    const newLocale = router.locale === 'he' ? 'en' : 'he';
    router.push(router.pathname, router.asPath, { locale: newLocale });
  };
  
  return (
    <button onClick={switchLanguage} className="language-switch">
      {router.locale === 'he' ? 'English' : 'עברית'}
    </button>
  );
}
```

### URL Structure

Language is part of the URL structure for better SEO and sharing:

- Hebrew: `https://almari.com/` (default)
- English: `https://almari.com/en/`

## Font Considerations

### Hebrew-optimized Fonts

The site uses fonts that support both Hebrew and Latin characters:

```css
/* Main font: Heebo - Good for Hebrew */
@import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&display=swap');

/* Secondary font for longer text */
@import url('https://fonts.googleapis.com/css2?family=Assistant:wght@400;600;700&display=swap');
```

Font configuration in Tailwind:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    fontFamily: {
      sans: ['Heebo', 'sans-serif'],
      secondary: ['Assistant', 'sans-serif'],
    },
  },
}
```

## Date and Number Formatting

### Date Localization

Dates are formatted according to locale:

```jsx
import { formatDate } from '../utils/formatting';

// In component
<p>{formatDate(post.timestamp, locale)}</p>

// utils/formatting.js
export function formatDate(date, locale) {
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
```

### Number Formatting

Numbers follow locale-specific formatting:

```jsx
export function formatNumber(num, locale) {
  return new Intl.NumberFormat(locale).format(num);
}
```

## SEO Considerations

### Language-specific Metadata

Each page has language-specific metadata:

```jsx
// components/SEO.js
import Head from 'next/head';
import { useRouter } from 'next/router';

export function SEO({ title, description, image }) {
  const router = useRouter();
  const { locale } = router;
  
  return (
    <Head>
      <title>{title} | AlmAri</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content={locale === 'he' ? 'he_IL' : 'en_US'} />
      
      {/* Alternate language versions */}
      <link 
        rel="alternate" 
        href={`https://almari.com${router.pathname}`} 
        hrefLang="he" 
      />
      <link 
        rel="alternate" 
        href={`https://almari.com/en${router.pathname}`} 
        hrefLang="en" 
      />
    </Head>
  );
}
```

## Testing I18n Implementation

### Manual Testing Checklist

- [ ] Check RTL layout in Hebrew mode
- [ ] Verify all UI elements are translated
- [ ] Test language switching
- [ ] Confirm proper date/number formatting
- [ ] Verify correct fonts display for both languages
- [ ] Check admin panel translation interface
- [ ] Test SEO metadata for both languages

### Automated Testing

Simple test to verify translations are loaded:

```javascript
// __tests__/i18n.test.js
import { render, screen } from '@testing-library/react';
import { useTranslation } from 'next-i18next';

const TestComponent = () => {
  const { t } = useTranslation();
  return <div>{t('nav.home')}</div>;
};

jest.mock('next-i18next', () => ({
  useTranslation: () => ({
    t: (key) => key === 'nav.home' ? 'דף הבית' : key,
  }),
}));

test('translations work correctly', () => {
  render(<TestComponent />);
  expect(screen.getByText('דף הבית')).toBeInTheDocument();
});
```

## Implementation Steps

1. **Setup base configuration**
   - Install next-i18next
   - Configure next.config.js
   - Setup translation files

2. **Create core components**
   - Text component
   - LanguageSwitch component
   - SEO component with language support

3. **Implement RTL support**
   - Configure Tailwind for RTL
   - Test layout in both directions

4. **Add translation interface in admin**
   - Create translation database tables
   - Build UI for managing translations

5. **Test thoroughly**
   - Verify all pages in both languages
   - Check performance impact
   - Ensure SEO compatibility
