import * as React from 'react';
import NxWelcome from "./nx-welcome";
import { Link, Route, Routes } from 'react-router-dom';

const Product = React.lazy(() => import('product/Module'));

const ProductCard = React.lazy(() => import('product/ProductCard'));



export function App() {
  return (
    <React.Suspense fallback={null}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product">Product</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<NxWelcome title="shell" />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <div>
      <h1>Host App 🏠</h1>
      <React.Suspense fallback={<div>Loading remote component...</div>}>
        <ProductCard />
      </React.Suspense>
    </div>
    </React.Suspense>
  );
}

export default App;
