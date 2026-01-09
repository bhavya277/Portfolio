# Portfolio Website

A modern, responsive portfolio website built with React and Vite. Features a sleek design with dark/light mode toggle, smooth animations, and interactive components.

## Features

- 🎨 **Modern UI/UX** - Clean and professional design with smooth animations
- 🌓 **Dark/Light Mode** - Toggle between themes for better user experience
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Fast Performance** - Built with Vite for optimal loading speeds
- 🎯 **Interactive Components** - Animated sections with Framer Motion
- 📊 **Skills Visualization** - Dynamic skill bars and charts
- 🚀 **Project Showcase** - Display your projects with links and tech stacks
- 📄 **Resume Download** - Easy resume download functionality

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **Three.js** - 3D graphics (via React Three Fiber)
- **Recharts** - Chart library for data visualization
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Prot
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Project Structure

```
Prot/
├── public/
│   ├── resume.pdf          # Your resume file
│   └── profile-photo.jpeg   # Profile photo
├── src/
│   ├── components/
│   │   ├── About.jsx        # About section
│   │   ├── Contact.jsx      # Contact form
│   │   ├── Footer.jsx       # Footer component
│   │   ├── Hero.jsx         # Hero section
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Projects.jsx     # Projects showcase
│   │   └── Skills.jsx       # Skills section
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── index.html               # HTML template
├── package.json             # Dependencies
└── vite.config.js           # Vite configuration
```

## Customization

### Update Personal Information

1. **Profile Photo**: Replace `profile-photo.jpeg` in the `public` folder
2. **Resume**: Add your `resume.pdf` file to the `public` folder
3. **Skills**: Edit the `skills` array in `src/App.jsx`
4. **Projects**: Update the `projects` array in `src/App.jsx`
5. **Contact Info**: Modify the Contact component in `src/components/Contact.jsx`

### Styling

- Global styles: `src/index.css`
- Component styles: `src/App.css`
- Theme colors can be customized via CSS variables in the stylesheets

## Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify
3. Or connect your GitHub repository for automatic deployments

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out!

---

Developed By Bhavya Modi

