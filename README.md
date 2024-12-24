
# Matt Miss Portfolio

This repository contains the source code for my personal portfolio website, built with [Gatsby](https://www.gatsbyjs.com/). The site showcases my skills, projects, and experience as a software developer.

## Live Site

The portfolio is live at: [https://mattmiss.github.io](https://mattmiss.github.io)

---

## Features

- **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
- **Modern Technologies:** Built with Gatsby, React, and GraphQL.
- **Performance Optimized:** Fast load times with optimized images and lazy loading.
- **Reusable Components:** Easy to maintain and extend with modular components.
- **SEO Friendly:** Enhanced search engine optimization for better visibility.

---

## Installation and Development

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/mattmiss/gatsby-portfolio.git
   cd gatsby-portfolio
   ```

2. **Install Dependencies:**
   Using npm:
   ```bash
   npm install
   ```
   Or using Yarn:
   ```bash
   yarn
   ```

3. **Start the Development Server:**
   ```bash
   gatsby develop
   ```

4. **Open in Browser:**
   Navigate to [http://localhost:8000](http://localhost:8000) to view the site locally.

---

## Building and Deployment

### Build for Production

To create a production-ready build of the site:
```bash
gatsby build
```
This command generates static files in the `public` folder.

### Deploy to GitHub Pages

1. **Build the Project:**
   ```bash
   gatsby build
   ```

2. **Navigate to the `public` Folder:**
   ```bash
   cd public
   ```

3. **Push to the Existing Repository:**
   ```bash
   git init
   git remote add origin https://github.com/mattmiss/mattmiss.github.io.git
   git branch -M main
   git add .
   git commit -m "Deploy Gatsby site"
   git push -f origin main
   ```

   ⚠️ **Warning:** The `-f` flag force pushes the changes, overwriting the existing content in the `mattmiss.github.io` repository.

4. **Verify Deployment:**
   Wait a few minutes for GitHub Pages to process the new files, then visit [https://mattmiss.github.io](https://mattmiss.github.io) to see your updated site.

---

## Folder Structure

- **`src/`**: Contains all the source code, components, pages, and styles.
  - **`components/`**: Reusable React components.
  - **`pages/`**: Individual pages of the site.
  - **`styles/`**: Custom styles and global CSS.
- **`static/`**: Static assets like images and files.
- **`gatsby-config.js`**: Gatsby site configuration.
- **`gatsby-node.js`**: Custom Node.js scripts for Gatsby.

---

## Future Improvements

- **Interactive Animations:** Add more engaging animations to enhance user experience.
- **Blog Integration:** Incorporate a blog section to share articles and tutorials.
- **Accessibility Enhancements:** Improve accessibility to meet WCAG standards.
- **Performance Optimizations:** Further optimize site performance for faster load times.
- **Dark Mode:** Implement a dark mode toggle for better user preference handling.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contact

- **Email:** matt.w.miss@gmail.com
- **LinkedIn:** [https://www.linkedin.com/in/matthew-miss](https://www.linkedin.com/in/matthew-miss)
- **GitHub:** [https://github.com/mattmiss](https://github.com/mattmiss)

---
