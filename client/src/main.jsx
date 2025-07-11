import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import ProductsPages from './Pages/ProductsPage/ProductsPage.jsx';
import EditProductPage from './Pages/EditProductPage/EditProductPage.jsx';
createRoot(document.getElementById('root')).render(
 <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/productpage' element={<ProductsPages/>}/>
      <Route path="/edit-product/:id" element={<EditProductPage />} />
    
    </Routes>
  </BrowserRouter>
)
