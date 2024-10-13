import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ColorsGame from '/app/index.tsx';
import './index.css';
import 'src/extra/icons.font'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ColorsGame />} />
      </Routes>
    </HashRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
