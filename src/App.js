import React from 'react';
import './App.css';
import ProductDetailHeader from './components/ProductDetailHeader/ProductDetailHeader'
import ProductAvatar from "./components/ProductAvatar/ProductAvatar";

function App() {
  return (
    <div className="App">
        <ProductAvatar />
      <ProductDetailHeader />
    </div>
  );
}

export default App;
