import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './features/pages/App'
import InfoProjectPage from './features/pages/InfoProjectPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/info-project" element={<InfoProjectPage />} />
      </Routes>
    </HashRouter>
  </StrictMode>,
)

