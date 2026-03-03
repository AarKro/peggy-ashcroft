# Peggy Ashcroft
Small Website for the HFIAD module Responsive Design & Accessibility

## Demo
https://aarkro.github.io/peggy-ashcroft

---

## Project Summary

This is a single-page biography website about the British actress **Peggy Ashcroft**, built as a study project for the **Responsive and Accessible Design** module in Interaction Design (HFIAD).

### Purpose
The site demonstrates core principles of responsive and accessible web design through a structured, visually distinct layout split across four themed sections.

### Sections
| Section | Background Colour | Content |
|---------|-------------------|---------|
| **Title** | Apre-ski grey (`#6C6D74`) | Hero / landing area |
| **Life** | Deep blue (`#3F3C7E`) | Biography content |
| **Works** | Near-black (`#242424`) | Notable works |
| **Awards** | Deep red (`#8F2F4F`) | Awards and recognition |

Each section fills the full viewport height (`100vh`) for a scroll-based, full-screen reading experience.

### Tech Stack
| Tool | Version | Role |
|------|---------|------|
| React | 19.2 | UI framework |
| TypeScript | 5.9 | Type safety |
| Vite | 7.3 | Build tool & dev server |
| SCSS | sass-embedded 1.97 | Styling |
| ESLint | 9.39 | Code linting |
| gh-pages | 6.3 | GitHub Pages deployment |

### Responsive Design
- **Mobile-first** layout with a single breakpoint at `576px`
- A custom React hook (`useDesktopLayout`) listens to window resize events and switches the layout at the breakpoint
- On **mobile**: each section shows a large italic page title and a burger menu icon
- On **desktop**: a horizontal navigation bar with anchor links (`#Life`, `#Works`, `#Awards`) replaces the mobile header
- Padding scales from `28px` on mobile to `72px` on desktop
- Typography scales up at the desktop breakpoint across all text styles (hero, h1, h2, body)

### Typography
Two Google Fonts are used throughout:
- **Playfair Display** (serif, italic) — used for the hero title and page headings; conveys a classic, editorial feel fitting for a biography site
- **Libre Franklin** (sans-serif) — used for subheadings and body text; provides clean, readable contrast

### Colour Palette
| Name | Hex | Used for |
|------|-----|---------|
| Red | `#8F2F4F` | Awards section |
| Blue | `#3F3C7E` | Life section |
| Gold | `#DDAB72` | Accent |
| Black | `#242424` | Works section |
| Ivory | `#FFF9E7` | All text |
| Slopes | `#B3B7BA` | — |
| Apre-ski | `#6C6D74` | Title section |

### Project Structure
```
src/
├── assets/icons/       # SVG icons (burger menu)
├── components/
│   ├── header/         # Responsive header (mobile burger / desktop nav)
│   └── page/           # Shared page wrapper with header and padding
├── hooks/
│   └── useDesktopLayout.tsx   # Custom hook for responsive breakpoint
├── pages/
│   ├── title/          # Landing / hero section
│   ├── life/           # Biography section
│   ├── works/          # Works section
│   └── awards/         # Awards section
└── styles/
    ├── variables.scss  # Colour tokens and breakpoint value
    └── mixins.scss     # Typography mixins and media query helper
```

### Scripts
```bash
npm run dev       # Start local dev server
npm run build     # Type-check and build for production
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
npm run deploy    # Build and deploy to GitHub Pages
```
