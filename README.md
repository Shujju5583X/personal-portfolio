# Syed Shujatullah | Portfolio

A modern, terminal-inspired personal portfolio built with React, Vite, and Tailwind CSS. The site presents a digital "Matrix" interface where visitors can explore bio, skills, projects, and contact options using command-style interactions.

## Overview

This portfolio is designed to feel like a developer console rather than a traditional static website. The UI includes:

- a Matrix rain background animation
- a terminal-style command interface
- dynamic GitHub project fetching
- responsive sections for about, projects, skills, and contact
- a polished dark neon aesthetic

## Tech Stack

- React
- Vite
- Tailwind CSS
- JavaScript
- GitHub REST API

## Project Structure

```text
personal-portfolio/
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── data/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
├── package.json
├── netlify.toml
├── .gitignore
├── README.md
└── .nvmrc
```

## Features

- Terminal-style navigation with commands such as `help`, `about`, `skills`, `projects`, `resume`, and `contact`
- GitHub repositories loaded dynamically in the portfolio
- Responsive layout for desktop and mobile screens
- Custom animated background for the Matrix-inspired theme
- Contact flow that opens a prefilled Gmail compose window using the user's details

## Prerequisites

- Node.js 20+
- npm

## Installation

```bash
git clone https://github.com/Shujju5583X/personal-portfolio.git
cd personal-portfolio
npm install
```

## Run locally

From the project root:

```bash
npm run dev
```

Then open:

```text
http://localhost:5173/
```

## Production build

```bash
npm run build
```

This builds the client app for production output inside the `client/dist` directory.

## Deployment

The project is configured for Netlify and can be deployed using the existing `netlify.toml` file.

## Notes

- The portfolio uses the GitHub API to render repository data in real time.
- Email links open Gmail in a new tab with the recipient and message details prefilled.
- If GitHub rate limits are reached, the app falls back gracefully to an empty project list.
- The site is intentionally static and does not require a backend.

## Author

Syed Shujatullah

- GitHub: https://github.com/Shujju5583X
- Portfolio: https://shujatullah.netlify.app/
