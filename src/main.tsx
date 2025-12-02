import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta dinámica: :eventId es una variable */}
        <Route path="/:eventId" element={<App />} />
        
        {/* Ruta por defecto (si entran a la raíz) */}
        <Route path="/" element={<div className="p-10 text-center">Bienvenido a Smart Invitations. Escribe un ID en la URL.</div>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)