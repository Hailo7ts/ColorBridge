![MERN](https://img.shields.io/badge/Stack-MERN-green?style=for-the-badge)
![Storybook](https://img.shields.io/badge/Docs-Storybook-FE5E99?style=for-the-badge)
![TailwindCSS](https://img.shields.io/badge/UI-TailwindCSS-06B6D4?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)


# 🎨 **ColorBridge**

> **ColorBridge** — Turning digital color codes into tintable house paints.
> A creative-engineering MERN application designed to bridge digital artistry with real-world craftsmanship.

---

## 🌟 Overview

ColorBridge is a full-stack web app that allows users to convert **digital color codes (HEX / RGB / brand Colors)** into **real-world tintable paint formulas** using store-ready color systems.
It empowers designers, painters, and DIY creators to **visualize, mix, and match** colors seamlessly — merging creativity with precision.

Built with the **MERN stack (MongoDB, Express, React, Node.js)**, ColorBridge showcases how artistic empathy and engineering logic can unite to solve a real-world workflow problem.

---

## ✨ Features

* 🎨 **Digital-to-Physical Conversion** — Convert HEX/RGB codes into tintable paint recipes.
* 🧠 **Smart Color Analyzer** — Suggests complementary tones and nearest manufacturer matches.
* 📁 **Project Color Library** — Save, label, and export Colors for future projects.
* ⚙️ **Admin Dashboard** — Manage color data, adjust formulas, and preview conversions.
* 🌗 **Light & Dark Themes** — Automatically adapts using your design token system.
* 💬 **Community Mode (coming soon)** — Share Colors with other local artists.

---

## 🧱 Tech Stack

| Layer             | Technology                        | Description                                                |
| ----------------- | --------------------------------- | ---------------------------------------------------------- |
| **Frontend**      | React (Vite) + TailwindCSS        | Responsive UI, theming system with CSS Variables           |
| **Backend**       | Node.js + Express                 | REST API endpoints for color conversion & data persistence |
| **Database**      | MongoDB Atlas                     | Stores user Colors, formulas, and session data           |
| **Auth**          | JWT + bcrypt                      | Secure login, signup, and session management               |
| **Design System** | ColorBridge Tokens              | Color, typography, and spacing tokens synced with Figma    |
| **Docs / UI Kit** | Storybook + Live Tokens Dashboard | Self-documenting design & development guide                |

---

## 🖼️ **Screenshots & Demo**

### 🔗 **Live Demo**

[![Live Demo](https://img.shields.io/badge/🌐_Live-Demo-blue?style=for-the-badge)](https://yourdemo.netlify.app)
*(Click to open the deployed app)*

---

### 🧭 **App Previews**

| Home / Hero                                                                                                 | Color Converter                                                                                             | Project Library                                                                                           |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| ![Home Preview](https://github.com/yourusername/Colorbridge/blob/main/docs/screenshots/home.png?raw=true) | ![Converter](https://github.com/yourusername/Colorbridge/blob/main/docs/screenshots/converter.png?raw=true) | ![Library](https://github.com/yourusername/Colorbridge/blob/main/docs/screenshots/library.png?raw=true) |

---

### 🎨 **Design System & Storybook**

| Design Tokens Dashboard                                                                                                     | Light vs Dark Theming                                                                                     | Storybook UI Kit                                                                                                    |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| ![Tokens Dashboard](https://github.com/yourusername/Colorbridge/blob/main/docs/screenshots/tokens-dashboard.png?raw=true) | ![Themes](https://github.com/yourusername/Colorbridge/blob/main/docs/screenshots/darkmode.png?raw=true) | ![Storybook UI](https://github.com/yourusername/Colorbridge/blob/main/docs/screenshots/storybook-ui.png?raw=true) |

> 💡 Tip: You can create placeholder mockups using [https://previewed.app](https://previewed.app), [https://shots.so](https://shots.so), or Figma frames for clean screenshot displays.

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/yourusername/Colorbridge.git
cd Colorbridge
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment

Create a `.env` file with:

```bash
MONGO_URI=your-mongodb-uri
JWT_SECRET=your-secret
PORT=5000
```

### 4️⃣ Run development servers

```bash
# Start backend
npm run server

# Start frontend
npm run client
```

The app runs at **[http://localhost:5173](http://localhost:5173)** (frontend)
and the API at **[http://localhost:5000/api](http://localhost:5000/api)**.

---

## 🧠 Design System Integration

ColorBridge ships with a **Figma-synced design system**:

* Light and Dark JSON token files → `/src/tokens/`
* Storybook **Design Tokens Dashboard** → `/src/stories/Tokens.stories.jsx`
* Automatic color/typography updates via hot reload

Run Storybook locally:

```bash
npm run storybook
```

Visit → `http://localhost:6006`

---

## 🧰 Developer Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Starts both client & server concurrently |
| `npm run client`    | Launches React dev server                |
| `npm run server`    | Runs Express backend                     |
| `npm run build`     | Builds frontend for production           |
| `npm run storybook` | Opens design system dashboard            |

---

## 🌗 Theming System

Built on the **ColorBridge Token Architecture**:

* **`tokens.css` / `tokens-dark.css`** — global variables for colors, fonts, spacing
* **Theme switcher** via `data-theme="light"` / `"dark"` attributes
* **React ThemeToggleButton** for instant UX demo

Developers can import tokens in React or Tailwind directly:

```js
text-text-primary bg-tertiary hover:bg-highlight
```

---

## 🧑‍🎨 Project Philosophy

> *Art + Engineering = Human-Centered Design*

ColorBridge was created to empower artists and craftsmen through intuitive, reliable technology.
It’s the proof that **code can feel creative** and **design can be engineered** — where aesthetic meets logic, and creativity meets structure.

---

## 📦 Future Enhancements

* 🎯 AI Color Matching API integration
* 🧾 CSV/JSON Color exports
* 🪄 Live “Room Preview” color visualizer (WebGL)
* 🫱🏼‍🫲🏾 Community Color sharing hub

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a branch: `git checkout -b feature/your-feature`
3. Commit & push
4. Open a Pull Request

---

## 🪶 License

MIT © 2025 — Crafted with art, empathy, and code by **Hailey Martin**

---

