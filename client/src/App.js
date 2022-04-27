import { Routes, Route } from 'react-router-dom';
import './App.css';
import CrearProducto from './Components/CrearProducto/CrearProducto';
import LandPage from './Components/LandPage/LandPage';
import ProductPage from './Components/ProductPage/ProductPage';

function App() {
  return (
    <Routes>
      <Route
      path='/'
      element={<LandPage />}
      />
      <Route
      path='/producto/:producto_id'
      element={<ProductPage />}
      />
      <Route
      path='/formulario'
      element={<CrearProducto />}
      />
    </Routes>
  );
}

export default App;