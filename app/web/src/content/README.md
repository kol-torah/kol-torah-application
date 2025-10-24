# MDX Content Guide

This project uses MDX to manage content for easy editing and bilingual support.

## Directory Structure

```
src/content/
├── home/
│   ├── en.mdx    # English home page content
│   └── he.mdx    # Hebrew home page content
├── about/
│   ├── en.mdx    # English about page (future)
│   └── he.mdx    # Hebrew about page (future)
└── rabbis/
    └── ...       # Rabbi pages (future)
```

## How to Add/Edit Content

### 1. Edit Existing Content

Simply edit the `.mdx` files in the `src/content/` directory. For example:

**`src/content/home/he.mdx`**
```mdx
# ברוכים הבאים לקול תורה

זהו התוכן בעברית...

## כותרת משנה

עוד טקסט כאן...
```

**`src/content/home/en.mdx`**
```mdx
# Welcome to Kol Torah

This is the English content...

## Subtitle

More text here...
```

### 2. Create New Content

To add a new page (e.g., "about"):

1. Create a new folder: `src/content/about/`
2. Add two files:
   - `en.mdx` - English version
   - `he.mdx` - Hebrew version

### 3. MDX Features

MDX supports:

#### Standard Markdown
```mdx
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet list
- Item 2

1. Numbered list
2. Item 2

[Link text](https://example.com)
```

#### React Components
You can also use React components within MDX:
```mdx
import { Button } from '../components/Button'

# My Content

Regular markdown text here...

<Button onClick={() => alert('Hello!')}>
  Click me
</Button>

More markdown text...
```

## Loading Content in a Component

To use MDX content in a new page:

```tsx
import { useMemo, Suspense, lazy } from 'react'
import { useTranslation } from 'react-i18next'
import { MDXContent } from './components/MDXContent'

function MyPage() {
  const { i18n } = useTranslation()

  const Content = useMemo(() => {
    return lazy(() => import(\`./content/my-page/\${i18n.language}.mdx\`))
  }, [i18n.language])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXContent Content={Content} />
    </Suspense>
  )
}
```

## Styling

MDX content is automatically styled using Tailwind's typography plugin with:
- Responsive typography
- Dark mode support
- RTL/LTR support
- Beautiful defaults for headings, paragraphs, lists, links, etc.

You don't need to add any classes - just write your content and it will look great!
