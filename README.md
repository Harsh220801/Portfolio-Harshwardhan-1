# Harshwardhan Portfolio

A responsive React/Vite personal portfolio for a Data Engineer.

## Structure

- `index.html` - Vite HTML host and SEO metadata
- `src/App.jsx` - componentized portfolio sections, navigation, theme, filters, and motion
- `src/main.jsx` - React application entry point
- `css/styles.css` - responsive design system, light/dark themes, and animations
- `data/projects.json` - edit this array to add or remove projects
- `assets/personalized/social/Resume.pdf` - personal résumé PDF

## Customise before publishing

1. Replace the placeholder links, email, biography, education, and certification details in `src/App.jsx` and `index.html`.
2. Replace `assets/personalized/social/Resume.pdf` with your current résumé.
3. Replace the Formspree placeholder in the contact form action.
4. Edit `data/projects.json` to update project cards.

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal. Use `npm run build` to create a production build.
