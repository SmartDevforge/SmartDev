import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider, CategoryProvider, SidebarProvider } from './constants/Context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <CartProvider>
          <SidebarProvider>
            <App />
          </SidebarProvider>
        </CartProvider>
      </CategoryProvider>
    </BrowserRouter>
  </StrictMode>,
)
