# From My Bones

A poetry website for Akhil Chandra's poems. Frontend-only, built with React + Vite.

## Concept

The site is framed around a spine: every poem is a vertebra in the collection.
The signature nav element (`Spine.jsx`) is a vertical line with a node per poem,
labeled with a word pulled from the poem itself rather than a plain number.

Palette is dark ink and bone paper, with a dried-blood marrow red and an aged
gold-thread accent used sparingly. Display type is italic Cormorant Garamond,
body text is Lora, and labels/metadata use IBM Plex Mono.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

To build for production:

```bash
npm run build
npm run preview
```

## Adding a new poem

Open `src/data/poems.js` and add an entry to the array:

```js
{
  slug: 'your-poem-slug',       // used in the URL: /poem/your-poem-slug
  title: 'Your Poem Title',
  mark: 'ONEWORD',              // a word from the poem, shown on the spine nav
  year: '2024',
  excerpt: 'First line or two of the poem, shown on the index card.',
  stanzas: [
    ['line one', 'line two', 'line three'],
    ['next stanza line one', 'next stanza line two'],
  ],
}
```

The homepage, spine navigation, and poem detail pages all update automatically —
no other file needs to change.

## Structure

```
src/
  components/   Header, Footer, Spine (signature nav), PoemCard
  pages/        Home, PoemDetail, NotFound
  data/         poems.js — all poem content lives here
  index.css     design tokens (color/type) and global styles
```
