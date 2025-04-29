# 3D T-Shirt Customizer

An interactive 3D T-shirt customization tool built with React and Three.js that allows users to design custom t-shirts in real-time.

## Features

- 3D T-shirt model visualization
- Real-time color customization
- Logo placement on t-shirt
- Full texture application

## Tech Stack

- [React](https://reactjs.org/) - Frontend framework
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Three.js](https://threejs.org/) - 3D graphics library
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) - React renderer for Three.js
- [React Three Drei](https://github.com/pmndrs/drei) - Useful helpers for React Three Fiber
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Valtio](https://valtio.pmnd.rs/) - State management
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Maath](https://github.com/pmndrs/maath) - Math helpers for Three.js

## Getting Started

1. Clone the repository:

```sh
git clone <repository-url>
```

2. Install dependencies:

```sh
npm install
```

3. Run the development server:

```sh
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── assets/         # Static assets (images, icons)
├── canvas/         # Three.js components and scene setup
├── components/     # React components
├── config/         # Configuration files
├── pages/          # Page components
├── store/          # State management
└── App.jsx         # Root component
```

## Features in Detail

### Color Picker

- Choose custom colors for the t-shirt
- Real-time color updates with smooth transitions

### T-Shirt Customization

- Upload logo images
- Apply full textures
- Position logos and textures precisely

### 3D Controls

- Rotate the t-shirt model
- Zoom in/out
- Pan across the scene

## Build

To build for production:

```sh
npm run build
```
