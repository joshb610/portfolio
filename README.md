# Portfolio Website

This is my personal portfolio website, built using React, Vite, and Tailwind CSS. It showcases my projects, skills, and experience as a computer science graduate, with a focus on practical software development and AI-assisted tools.

## 🌐 Live Site

https://joshb610.github.io/portfolio/

---

## 📌 About This Project

This portfolio is a static site deployed using GitHub Pages. It highlights:

* A featured project: AI-assisted CAD generator for creating customizable 3D (STL) files
* Additional development work and technical skills
* Contact and professional information

The site is built with modern frontend tools and optimized for fast loading and responsiveness.

---

## 🛠️ Tech Stack

* React
* Vite
* TypeScript
* Tailwind CSS
* GitHub Pages (deployment)

---

## 🚀 Running Locally

Clone the repository:

```bash
git clone https://github.com/joshb610/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## 📦 Building the Site

To generate the production-ready static files:

```bash
npm run build
```

This creates a `/dist` folder containing the compiled site.

---

## 🚀 Deploying Updates (GitHub Pages)

This project is deployed by pushing the built `/dist` folder to the `main` branch.

### Steps to deploy:

1. Make your changes in the source code

2. Build the project:

```bash
npm run build
```

3. Navigate to the build output:

```bash
cd dist
```

4. Commit and push changes:

```bash
git add .
git commit -m "update site"
git push -f origin main
```

---

## ⚠️ Notes

* The `vite.config.js` file includes:

```js
base: '/portfolio/'
```

This is required for GitHub Pages to correctly resolve asset paths.

* If assets (CSS/JS) fail to load, make sure:

  * You rebuilt the project after changes
  * You pushed the updated `/dist` folder

---

## 📬 Contact

* GitHub: https://github.com/joshb610
* LinkedIn: https://www.linkedin.com/in/joshbutler-dev

---

## 📄 License

This project is open source and available under the MIT License.
