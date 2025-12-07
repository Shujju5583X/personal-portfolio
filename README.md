# 🟢 Matrix Terminal Portfolio

> *"Welcome to the Real World."*

An immersive, interactive portfolio website inspired by **The Matrix**. This project replaces traditional web navigation with a functional Command Line Interface (CLI), set against a backdrop of digital rain and CRT monitor aesthetics.

Built as a **static Single Page Application (SPA)** — no backend required. Deploy to GitHub Pages, Netlify, or any static hosting.

## ⚡ Features

  * **🖥️ Interactive Terminal:** Navigate the site using commands like `help`, `about`, `projects`, and `skills`.
  * **🌧️ Matrix Rain Effect:** A custom HTML5 Canvas animation rendering the iconic falling code.
  * **📺 CRT Aesthetics:** Styled with scanlines, text glow, and a retro monospace font for an authentic 90s hacker vibe.
  * **📨 Contact Simulation:** An interactive multi-step contact form within the terminal.
  * **📱 Responsive:** The terminal and visual effects scale to fit mobile and desktop screens.
  * **⚡ Static SPA:** No backend or database required — deploy anywhere.

## 🛠️ Tech Stack

  * **React 18:** UI Component library
  * **Vite:** Next-generation frontend tooling
  * **Tailwind CSS:** Utility-first CSS framework
  * **PostCSS:** For processing Tailwind

## 📂 Project Structure

```text
matrix-portfolio/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Terminal.jsx, MatrixRain.jsx
│   │   ├── data/           # Static project data
│   │   │   └── projects.js
│   │   ├── App.jsx         # Main layout
│   │   └── index.css       # Tailwind & CRT styles
│   └── vite.config.js      # Vite configuration
├── netlify.toml            # Netlify deployment config
├── package.json            # Root scripts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

  * Node.js (v16 or higher)
  * npm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Shujju5583X/matrix-portfolio.git
    cd matrix-portfolio
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    ```

### 🏃‍♂️ Running Locally

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## 🎮 Usage (Terminal Commands)

Click anywhere to focus the terminal, then type:

| Command | Description |
| :--- | :--- |
| `help` | Displays the list of available commands |
| `about` | Shows information about the author |
| `skills` | Lists technical skills and frameworks |
| `projects` | Displays project portfolio |
| `contact` | Starts the interactive contact form |
| `clear` | Clears the terminal screen |

## 🚀 Deployment

### Netlify (Recommended)

1.  Push to GitHub
2.  Connect your repository to Netlify
3.  Netlify auto-detects settings from `netlify.toml`:
    * **Build Command:** `npm run build`
    * **Publish Directory:** `client/dist`

### GitHub Pages

1.  Build the project: `npm run build`
2.  Deploy the `client/dist` folder

## 👨‍💻 Author

**Syed Shujatullah**
*Full Stack Engineering Student (Integrated M.Tech)*

- 📧 shujatullahsyed801@gmail.com
- 🐙 [github.com/Shujju5583X](https://github.com/Shujju5583X)

## 📄 License

This project is open source.

---
