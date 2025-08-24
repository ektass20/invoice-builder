import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createContext } from 'react'
export const MainContext = createContext();


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainContext.Provider value="data from main">
    <App />
    </MainContext.Provider>
  </StrictMode>,
)
