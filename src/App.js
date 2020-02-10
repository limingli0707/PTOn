import React from 'react';
import './App.css';
import ProductDetailHeader from './components/ProductDetailHeader/ProductDetailHeader'
import ProductAvatar from "./components/ProductAvatar/ProductAvatar";

import ProductImagesHolder from "./components/ProductImagesHolder"

function App() {
  return (
    <div className="App">
      <ProductDetailHeader />
      <ProductImagesHolder />
    </div>
  );
}

export default App;
