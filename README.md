# Karta Initiative India Foundation — Website

A Next.js site for [Karta Initiative India](https://karta-initiative.org.in/), including home, blog, and application pages.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — hero, mission, program overview, impact stats |
| `/blog` | Blog listing with category filters |
| `/blog/[slug]` | Individual blog post |
| `/apply` | Karta Access Program application form |

## Theme

- **Primary:** `#fd9a00`
- **Fonts:** Inter (body), Plus Jakarta Sans (headings)

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy

Compatible with [Vercel](https://vercel.com), Netlify, or any Node.js host that supports Next.js.

Application submissions are handled via `POST /api/apply` (logged server-side; connect email or database as needed).
