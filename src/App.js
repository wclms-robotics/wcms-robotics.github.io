// ...existing code...
import React, { useEffect, useState } from 'react';
import './App.css';
// ...existing code...

function App() {
  // Helper to load images from /src/media for both Vite and Webpack dev setups
  const loadImages = () => {
    // Vite: import.meta.glob (with eager) returns modules with default export
    try {
      if (typeof import.meta !== 'undefined' && import.meta.glob) {
        const modules = import.meta.glob('./media/*.{png,jpg,jpeg,svg,gif}', { eager: true });
        return Object.values(modules).map((m) => (m && m.default) || m);
      }
    } catch (e) {
      // fall through to webpack approach
    }

    // Webpack (CRA): require.context
    try {
      // eslint-disable-next-line no-undef
      const req = require.context('./media', false, /\.(png|jpe?g|svg|gif)$/);
      return req.keys().map(req);
    } catch (e) {
      return [];
    }
  };

  const images = loadImages();

  const Carousel = ({ imgs = [] }) => {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
      if (!imgs.length) return;
      const t = setInterval(() => setIdx((i) => (i + 1) % imgs.length), 5000);
      return () => clearInterval(t);
    }, [imgs.length]);

    if (!imgs.length) {
      return (
        <div className="w-full h-48 bg-gray-100 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">No media found in /src/media</span>
        </div>
      );
    }

    return (
      <div className="w-full max-w-4xl relative">
        <img
          src={imgs[idx]}
          alt={`carousel-${idx}`}
          className="w-full h-64 sm:h-80 object-cover rounded-lg shadow"
        />

        <button
          aria-label="previous"
          onClick={() => setIdx((i) => (i - 1 + imgs.length) % imgs.length)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow"
        >
          ‹
        </button>

        <button
          aria-label="next"
          onClick={() => setIdx((i) => (i + 1) % imgs.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow"
        >
          ›
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-2 flex gap-2">
          {imgs.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`w-2 h-2 rounded-full ${i === idx ? 'bg-white' : 'bg-white/60'}`}
              aria-label={`go-to-${i}`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="App bg-gray-50 min-h-screen">
      <header className="App-header text-white py-8">
        <h1 className="text-3xl font-semibold text-center">WCMS LegoTechs</h1>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="media-carousel flex items-center justify-center mb-8">
          <Carousel imgs={images} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Column 1</h2>
            <p className="text-gray-600">Placeholder text for the first column.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Column 2</h2>
            <p className="text-gray-600">Placeholder text for the second column.</p>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-2">Column 3</h2>
            <p className="text-gray-600">Placeholder text for the third column.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;