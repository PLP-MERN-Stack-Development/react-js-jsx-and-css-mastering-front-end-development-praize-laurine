# React Task Manager & Posts App

A responsive React application built with Vite, JSX, and Tailwind CSS demonstrating component architecture, state management with hooks, API integration, and theming.

## Features

- Reusable UI components: Button, Card, Navbar, Footer
- Task Manager with add, complete, delete, and filter features
- Persistent task storage using localStorage via a custom hook
- Theme switcher for light and dark modes using React context and Tailwind dark mode
- Fetch and display posts from JSONPlaceholder API with pagination and search
- Responsive design for mobile, tablet, and desktop
- Tailwind CSS utility-first styling with smooth transitions and hover effects
- Routing with React Router for navigation between pages

## Project Structure

my-react-app/
├── src/
│ ├── components/ # Reusable UI components
│ ├── context/ # Theme context provider
│ ├── App.jsx # Main app component with routing
│ ├── main.jsx # Entry point with providers
│ └── index.css # Tailwind CSS imports and base styles
├── tailwind.config.js # Tailwind CSS configuration
├── postcss.config.js # PostCSS configuration
└── package.json # Project dependencies and scripts


## Getting Started

### Prerequisites

- Node.js v18 or higher
- npm (comes with Node.js)

### Installation

1. Clone the repository:

2. Install dependencies:
```

npm install
```

3. Start the development server:
'''

npm run dev
```

4. Open your browser at `http://localhost:5173` (default Vite port).


