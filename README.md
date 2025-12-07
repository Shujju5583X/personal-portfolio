# 🟢 Matrix Terminal Portfolio

> *"Welcome to the Real World."*

An immersive, interactive portfolio website inspired by **The Matrix**. This project replaces traditional web navigation with a functional Command Line Interface (CLI), set against a backdrop of digital rain and CRT monitor aesthetics.

Built as a **static Single Page Application (SPA)** — no backend required. Deploy to GitHub Pages, Netlify, or any static hosting.

---

## ⚡ Features

- **🖥️ Interactive Terminal** — Navigate the site using commands like `help`, `about`, `projects`, and `skills`
- **🌧️ Matrix Rain Effect** — Custom HTML5 Canvas animation rendering the iconic falling code
- **📺 CRT Aesthetics** — Styled with scanlines, text glow, and a retro monospace font
- **📨 Contact Simulation** — Interactive multi-step contact form within the terminal
- **📱 Responsive Design** — Terminal and visual effects scale to fit mobile and desktop screens
- **⚡ Static SPA** — No backend or database required — deploy anywhere

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | React 18, Vite |
| **Styling** | Tailwind CSS, PostCSS |
| **Language** | JavaScript (ES Modules) |

---

## 📂 Project Structure

```
personal-portfolio/
├── client/                     # React Frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Terminal.jsx    # Main CLI interface
│   │   │   └── MatrixRain.jsx  # Canvas rain animation
│   │   ├── data/
│   │   │   └── projects.js     # Static project data
│   │   ├── App.jsx             # Main layout
│   │   ├── main.jsx            # Entry point
│   │   └── index.css           # Tailwind & CRT styles
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── vite.config.js
├── netlify.toml                # Netlify deployment config
├── package.json                # Root scripts
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v16 or higher
- **npm**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Shujju5583X/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🎮 Terminal Commands

Click anywhere to focus the terminal, then type:

| Command | Description |
|---------|-------------|
| `help` | Display available commands |
| `about` | View professional summary & education |
| `skills` | List technical skills & certifications |
| `projects` | Browse project portfolio |
| `contact` | Start interactive contact form |
| `clear` | Clear the terminal screen |

---

## 🚀 Deployment

### Netlify (Recommended)

1. Push to GitHub
2. Connect repository to Netlify
3. Netlify auto-detects settings from `netlify.toml`:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `client/dist`

### GitHub Pages

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the `client/dist` folder

---

## 👨‍💻 Author

**Syed Shujatullah**  
*Full Stack Engineering Student (Integrated M.Tech)*  
*VIT AP Campus, Amaravati*

- 📧 [shujatullahsyed801@gmail.com](mailto:shujatullahsyed801@gmail.com)
- 📱 +91 6305085183
- 🐙 [github.com/Shujju5583X](https://github.com/Shujju5583X)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
