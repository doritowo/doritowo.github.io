# Copilot Instructions for doritowo.github.io

## Project Overview
This is a static personal website organized by interest areas (artists, films, games, projects). Each section is a subfolder with its own HTML, CSS, JS, and images. There is no build system or backend—just static assets.

## Directory Structure
- `index.html`: Main landing page.
- `fave-artists/`, `fave-films/`, `fave-games/`: Subsites for each interest, each with their own `index.html`, CSS, JS, and images.
- `projects/`: Miscellaneous project samples.
- Shared assets in top-level `images/`, `js/`, and `css/`.

## Key Patterns & Conventions
- **HTML/CSS/JS separation:** Each section keeps its own styles and scripts in dedicated subfolders.
- **Image usage:** Images are referenced with relative paths, e.g. `images/aespa.jpg`.
- **No frameworks:** Pure HTML, CSS, and vanilla JS only. No React, Vue, or build tools.
- **Navigation:** Links between sections use relative URLs (e.g. `../fave-artists/index.html`).
- **No package management:** No `package.json` or dependency manager. All code is hand-written and static.

## Developer Workflow
- **Preview:** Open `index.html` or any section's `index.html` directly in a browser.
- **Debugging:** Use browser dev tools. No automated tests or build steps.
- **Adding content:** To add a new artist, film, or game, copy the pattern from existing entries in the relevant HTML file and add images to the appropriate folder.
- **Styling:** Update section-specific CSS files (e.g. `fave-artists/css/artist.css`).
- **Scripts:** Place JS files in the section's `js/` folder. Top-level scripts (e.g. `js/script.js`) are for site-wide features.

## Examples
- To add a new artist: Edit `fave-artists/artists.html`, add an image to `fave-artists/images/`, update `fave-artists/css/artist.css` if needed.
- To add a new film: Edit `fave-films/index.html`, add an image to `fave-films/images/`, update `fave-films/css/style.css`.

## Integration Points
- No external APIs or services are used.
- All navigation and data are static and local.

## Special Notes
- **Do not introduce build tools, frameworks, or package managers.**
- **Preserve the folder structure and relative linking conventions.**
- **Keep all assets local.**

---
For questions about unclear patterns or missing documentation, ask the user for clarification before making structural changes.