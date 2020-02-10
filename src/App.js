import React from 'react';
import './App.css';
import ProductDetailHeader from './components/ProductDetailHeader/ProductDetailHeader'
import ProductAvatar from "./components/ProductAvatar/ProductAvatar";

function App() {
  return (
    <div className="App">
        <ProductAvatar source="https://i.pinimg.com/originals/fd/45/08/fd45084c3a469854444bb5ff619f2d8d.png"/>
      <ProductDetailHeader />
    </div>
  );
}

export default App;
