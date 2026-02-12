# Hanna Malash Portfolio

![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2-646CFF?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

A personal portfolio website built with React + Vite and deployed on GitHub Pages.

[Live Demo](https://hanna-malash.github.io) | [Repository](https://github.com/hanna-malash/hanna-malash.github.io)

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Requirements](#requirements)
- [Local Development](#local-development)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- **Responsive Design**: Works great on desktop and mobile devices
- **Light/Dark Theme**: Custom theme system with preference storage
- **Multi-language Support**: English and Russian
- **Modular Architecture**: Well-organized components and utilities
- **Projects Page**: Links to GitHub and downloadable PDF
- **Mobile Menu**: Easy navigation on small screens
- **Modern Stack**: React 19, HashRouter for GitHub Pages

---

## Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | ^19.2.0 | UI Framework |
| Vite | ^7.2.4 | Build tool and dev server |
| React Router | ^7.13.0 | Routing (HashRouter) |
| ESLint | ^9.39.1 | Code quality |
| gh-pages | ^6.3.0 | GitHub Pages deployment |

---

## Project Structure

```
hanna-malash.github.io/
├── src/
│   ├── app/                    # App shell, routing, providers
│   │   ├── App.jsx
│   │   ├── layout/
│   │   │   ├── AppShell.jsx   # Main layout
│   │   │   ├── TopBar.jsx     # Top navigation
│   │   │   └── MobileMenu.jsx # Mobile menu
│   │   ├── providers/
│   │   │   ├── I18nProvider.jsx    # Language support
│   │   │   └── ThemeProvider.jsx   # Theme management
│   │   └── routing/
│   │       └── routes.js       # Route configuration
│   ├── pages/                  # Page components
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ExperiencePage.jsx
│   │   ├── ProjectsPage.jsx
│   │   └── ContactPage.jsx
│   ├── shared/                 # Reusable components and utilities
│   │   ├── i18n/
│   │   │   └── translations.js # Language files
│   │   └── ui/
│   │       ├── Card.jsx
│   │       ├── IconButton.jsx
│   │       ├── NavLink.jsx
│   │       └── Toggle.jsx
│   ├── styles/                 # Global styles
│   │   ├── globals.css
│   │   └── theme.css
│   ├── main.jsx               # Entry point
│   └── index.css              # Base styles
├── public/                     # Static files
│   └── vite.svg
├── package.json               # Dependencies and scripts
├── vite.config.js            # Vite config
├── eslint.config.js          # ESLint config
├── index.html                # HTML template
└── README.md
```

---

## Requirements

Before you start, make sure you have:

- **Node.js** ≥ 18.0.0
- **npm** ≥ 9.0.0 (or yarn/pnpm)
- **Git**

Check your versions:
```bash
node --version
npm --version
```

---

## Local Development

### 1. Clone the repository

```bash
git clone https://github.com/hanna-malash/hanna-malash.github.io.git
cd hanna-malash.github.io
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the dev server

```bash
npm run dev
```

Open your browser and go to `http://localhost:5173`

### 4. Build for production

```bash
npm run build
```

The files will be in the `dist/` folder.

### 5. Check code quality

```bash
npm run lint
```

---

## Deployment

This project uses GitHub Pages with HashRouter for proper routing.

### Deploy to GitHub Pages

After merging changes to `main`, run:

```bash
git switch main
git pull
npm run deploy
```

**What `npm run deploy` does:**
1. Runs `npm run build` (creates the `dist/` folder)
2. Pushes the build to the `gh-pages` branch
3. GitHub Pages automatically deploys your site

### GitHub Settings

Make sure your repository settings (Settings, Pages) have:
- **Source**: Deploy from branch
- **Branch**: `gh-pages` / `/(root)`

---

## License

This project is licensed under the MIT License.

---

## Author

**Hanna Malash**

- GitHub: [@hanna-malash](https://github.com/hanna-malash)
- Portfolio: [hanna-malash.github.io](https://hanna-malash.github.io)

---

## Developer Notes

- **HashRouter** is used for GitHub Pages compatibility (no server redirects needed)
- **Custom Theme System**: Theme management via Context API, no extra libraries
- **i18n Provider**: Simple custom translation system
- **Pure CSS**: No preprocessors, fast and simple

---

**Last updated**: February 2026
