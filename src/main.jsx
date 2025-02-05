import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import { Navbar } from 'react-bootstrap'
import NavBar from './Components/NavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar/>
    <App />
  </StrictMode>,
)
