-----

# 🟢 Matrix Terminal Portfolio

> *"Welcome to the Real World."*

An immersive, interactive portfolio website inspired by **The Matrix**. This project replaces the traditional web navigation with a functional Command Line Interface (CLI), set against a backdrop of digital rain and CRT monitor aesthetics.

It features a full-stack architecture designed to run locally with an Express server or deploy seamlessly to the cloud using Netlify Functions.

## ⚡ Features

  * **🖥️ Interactive Terminal:** Navigate the site using commands like `help`, `about`, `projects`, and `skills`.
  * **wd️ Matrix Rain Effect:** a custom HTML5 Canvas animation rendering the iconic falling code.
  * **ux️ CRT Aesthetics:** Styled with scanlines, text glow, and a retro monospace font (VT323) for an authentic 90s hacker vibe.
  * **📨 Contact Simulation:** An interactive multi-step contact form within the terminal that "transmits" data to the backend.
  * **☁️ Serverless Ready:** configured to run as a standard Node.js Express app locally, but automatically adapts to **Netlify Functions** for production deployment.
  * **📱 Responsive:** The terminal and visual effects scale to fit mobile and desktop screens.

## 🛠️ Tech Stack

**Frontend (Client):**

  * **React 18:** UI Component library.
  * **Vite:** Next-generation frontend tooling.
  * **Tailwind CSS:** Utility-first CSS framework for styling the CRT effects and layout.
  * **PostCSS:** For processing Tailwind.

**Backend (Server):**

  * **Node.js & Express:** API handling for projects and contact form.
  * **Serverless-http:** Wraps the Express app to work with Netlify Functions / AWS Lambda.

## 📂 Project Structure

```text
matrix-portfolio/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Terminal.jsx, MatrixRain.jsx
│   │   ├── App.jsx         # Main layout
│   │   └── index.css       # Tailwind & CRT styles
│   └── vite.config.js      # Vite configuration
├── server/                 # Express Backend (Local Dev)
│   └── server.js           # Standalone server entry point
├── netlify/                # Production Backend
│   └── functions/
│       └── api.js          # Serverless function entry point
├── netlify.toml            # Netlify build configuration
└── package.json            # Root orchestration scripts
```

## 🚀 Getting Started

### Prerequisites

  * Node.js (v16 or higher recommended)
  * npm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/matrix-portfolio.git
    cd matrix-portfolio
    ```

2.  **Install Dependencies:**
    Run the install command in the root directory. This utilizes the `postinstall` script to automatically install dependencies for the client folder as well.

    ```bash
    npm install
    ```

    *If the postinstall doesn't run automatically, you can run:*

    ```bash
    cd client && npm install
    cd ../server && npm install
    ```

### 🏃‍♂️ Running Locally

This project uses `concurrently` to run both the client (Vite) and the server (Express) simultaneously.

```bash
npm run dev
```

  * **Frontend:** Runs on `http://localhost:5173`
  * **Backend:** Runs on `http://localhost:5000`

*The frontend is configured via `vite.config.js` to proxy `/api` requests to the local backend server.*

## 🎮 Usage (Terminal Commands)

Once the site is loaded, click anywhere to focus the terminal. Type the following commands:

| Command | Description |
| :--- | :--- |
| `help` | Displays the list of available commands. |
| `about` | Shows information about the author (Education, Summary). |
| `skills` | Lists technical skills and frameworks. |
| `projects` | Fetches and displays projects from the backend API. |
| `contact` | Starts the interactive contact form flow. |
| `clear` | Clears the terminal screen. |

## fw️ Deployment

This project is optimized for **Netlify**.

1.  **Push to GitHub.**
2.  **Connect to Netlify:** Create a new site in Netlify and link your repository.
3.  **Build Settings:** Netlify should automatically detect the settings from `netlify.toml`:
      * **Build Command:** `npm run build`
      * **Publish Directory:** `client/dist`
      * **Functions Directory:** `netlify/functions`
4.  **Environment:** The `netlify.toml` handles redirects so that calls to `/api/*` are correctly routed to the serverless functions.

## 👨‍💻 Author

**Syed Shujatullah**

  * *Full Stack Engineering Student (Integrated M.Tech)*

## 📄 License

This project is open source.

-----
