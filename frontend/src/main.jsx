import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AddRoutes from './routes/AppRoutes.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */} 
    <AppRoutes />
  </StrictMode>,
)
