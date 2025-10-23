# Kol Torah Frontend

React + Vite + TypeScript frontend for the Kol Torah web application.

## Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Radix UI** - Unstyled, accessible component primitives
- **pnpm** - Fast, disk space efficient package manager

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm 8+

### Installation

```bash
cd app/web
pnpm install
```

### Development

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
app/web/
├── public/          # Static assets
├── src/
│   ├── lib/         # Utility functions
│   ├── assets/      # Images, fonts, etc.
│   ├── App.tsx      # Root component
│   ├── main.tsx     # Entry point
│   └── index.css    # Global styles (Tailwind)
├── index.html       # HTML template
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint

## Integration with Backend

The frontend will consume the OpenAPI documentation generated from the FastAPI backend at `/app/api`.

