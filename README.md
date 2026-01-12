# Yale School of Art Website

A modern, responsive website for Yale School of Art built with React, TypeScript, and Vite. This project showcases the school's programs, exhibitions, and community features with smooth animations and an elegant design.

## 📋 Table of Contents

- [What You Need to Know](#what-you-need-to-know)
- [Prerequisites](#prerequisites)
- [Installation & Setup](#installation--setup)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Additional Resources](#additional-resources)

---

## 🎓 What You Need to Know

### What is Node.js?
Node.js is a JavaScript runtime that allows you to run JavaScript code on your computer (not just in a web browser). It also includes **npm** (Node Package Manager), which helps you manage project dependencies.

### What is React?
React is a JavaScript library for building user interfaces. It lets you create interactive web pages by breaking them down into reusable components. Think of components as building blocks that you can combine to create a website.

### What is Vite?
Vite is a fast build tool and development server. Instead of the older slow methods, Vite helps your code run instantly when you make changes during development. It also packages your code efficiently for the web when you're ready to publish.

### What is TypeScript?
TypeScript is an extended version of JavaScript that adds type-checking. This helps catch errors early and makes code more reliable and easier to understand.

---

## ✅ Prerequisites

Before you start, make sure you have:

1. **A code editor** - We recommend [Visual Studio Code](https://code.visualstudio.com/) (it's free)
2. **Git** - For cloning the repository ([Download here](https://git-scm.com/))
3. **Node.js** - The most important requirement (see instructions below)

### Step 1: Install Node.js

#### For Windows:
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS (Long Term Support)** version (recommended for beginners)
3. Run the installer
4. Click through the installation wizard, accepting the default options
5. Restart your computer

#### For macOS:
1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS** version
3. Run the installer and follow the prompts
4. Restart your computer

#### For Linux (Ubuntu/Debian):
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### Step 2: Verify Installation

Open your terminal/command prompt and run:

```bash
node --version
npm --version
```

You should see version numbers for both. If you see errors, Node.js wasn't installed correctly.

---

## 🚀 Installation & Setup

### Step 1: Clone the Repository

Open your terminal and navigate to where you want to save the project. Then run:

```bash
git clone https://github.com/AbdulRasheedSaid/SAD-Group-Assignment-Yale-School-of-Art.git
cd yale_art_school
```

**Not sure how to use terminal?**
- **Windows**: Press `Win + R`, type `cmd`, and press Enter
- **macOS**: Press `Cmd + Space`, type `terminal`, and press Enter
- **Linux**: Press `Ctrl + Alt + T`

### Step 2: Install Project Dependencies

In your terminal, make sure you're inside the project folder (`yale_art_school`) and run:

```bash
npm install
```

This command:
- Reads the `package.json` file (which lists all required packages)
- Downloads all necessary packages to a folder called `node_modules`
- May take 1-5 minutes depending on your internet speed

**What if you see errors?**
- Make sure you're in the correct folder
- Try deleting the `node_modules` folder and running `npm install` again
- Check that Node.js is properly installed

---

## 🏃 Running the Project

### Start the Development Server

Once installation is complete, run:

```bash
npm run dev
```

You should see output like:
```
VITE v5.x.x ready in xxx ms

➜  Local:   http://localhost:5173/
➜  press h to show help
```

### View the Website

1. Open your web browser (Chrome, Firefox, Safari, Edge)
2. Go to `http://localhost:5173/`
3. You should see the Yale School of Art website!

### Making Changes

- Open any file in the `src/` folder with your code editor
- Make changes and save the file
- The browser will automatically refresh to show your changes (this is called "Hot Module Replacement")

### Stop the Server

In your terminal, press `Ctrl + C` to stop the development server.

---

## 📦 Building for Production

When you're ready to publish the website, you need to build it for production.

### Create a Production Build

```bash
npm run build
```

This command:
- Optimizes your code for performance
- Minifies files (makes them smaller)
- Creates a `dist/` folder with files ready for deployment
- Takes 30 seconds to 2 minutes

### Preview the Build Locally (Optional)

To see what your production build looks like:

```bash
npm run preview
```

Then visit `http://localhost:4173/` in your browser.

### Deploy the Build

The files in the `dist/` folder are what you upload to your web hosting service (like Netlify, Vercel, GitHub Pages, etc.).

---

## 📁 Project Structure

Here's what each folder and file does:

```
yale_art_school/
├── src/                          # Your source code (edit this!)
│   ├── components/               # React components (building blocks)
│   │   ├── BulletinBoard.tsx    # Community bulletin board section
│   │   ├── CalendarNewsletter.tsx # Events calendar & newsletter signup
│   │   ├── Footer.tsx            # Website footer
│   │   ├── HappeningAtSoA.tsx    # Events and exhibitions section
│   │   ├── Hero.tsx              # Large banner at top of page
│   │   └── HeroNavbar.tsx        # Navigation bar
│   ├── assets/                   # Images, fonts, and media files
│   ├── App.tsx                   # Main app component
│   ├── main.tsx                  # Entry point (starts the app)
│   └── index.css                 # Global styles
├── public/                        # Static files (favicon, robots.txt, etc.)
├── index.html                     # Main HTML file
├── package.json                   # Project metadata and dependencies
├── vite.config.ts                # Vite configuration
├── tsconfig.json                 # TypeScript configuration
└── README.md                      # This file!
```

### Key Files Explained:

- **package.json**: Lists all npm packages your project needs
- **vite.config.ts**: Tells Vite how to build and run your project
- **tsconfig.json**: Tells TypeScript how to check your code
- **src/App.tsx**: The main React component that imports all other components

---

## 🐛 Troubleshooting

### Problem: "npm command not found"
**Solution**: Node.js isn't properly installed. Reinstall from [nodejs.org](https://nodejs.org/) and restart your computer.

### Problem: "Cannot find module" error
**Solution**: Run `npm install` again to make sure all dependencies are installed.

### Problem: Port 5173 is already in use
**Solution**: Either:
- Close other apps using that port
- Use a different port: `npm run dev -- --port 3000`

### Problem: Website doesn't update when I save files
**Solution**: 
- Make sure you're editing files in the `src/` folder
- Check that the development server is still running
- Try refreshing your browser (F5 or Cmd+R)

### Problem: Build fails or shows errors
**Solution**:
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again
- Run `npm run build` again

### Problem: Changes aren't showing in production build
**Solution**: Run `npm run build` again after making changes. The `dist/` folder is what you deploy.

---

## 📚 Additional Resources

### Learn More About These Technologies:

- **React**: [Official React Documentation](https://react.dev/)
- **Vite**: [Official Vite Guide](https://vite.dev/guide/)
- **TypeScript**: [Official TypeScript Handbook](https://www.typescriptlang.org/docs/)
- **npm**: [npm Official Documentation](https://docs.npmjs.com/)

### Useful Commands Reference:

| Command | What it does |
|---------|-------------|
| `npm install` | Install all project dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check for code errors |

### Getting Help:

- Check the [Troubleshooting](#troubleshooting) section above
- Search for your error message on [Stack Overflow](https://stackoverflow.com/)
- Ask for help in communities like [Reddit r/webdev](https://www.reddit.com/r/webdev/)

---

## 📝 Next Steps

1. ✅ Install Node.js
2. ✅ Clone the repository
3. ✅ Run `npm install`
4. ✅ Run `npm run dev`
5. ✅ Open `http://localhost:5173/` in your browser
6. 🎉 Start editing and building!

**Happy coding! If you have questions, refer back to this README or search online for help. Good luck! 🚀**
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
