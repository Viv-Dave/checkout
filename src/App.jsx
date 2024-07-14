// App.js
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { CartProvider } from './CartContext';
import './App.css';
import DiceImg from '../public/GameImages/logo.svg';
function App() {
  const [addtoCart, setAddtoCart] = useState([]);

  const removeFromCart = (id) => {
    setAddtoCart(addtoCart.filter(item => item.dealID !== id));
  };
  return (
    <CartProvider value={{ addtoCart, setAddtoCart, removeFromCart }}>
      <div className='header'>
      <img src={DiceImg} alt="" className="logo" />
      <h1>GameCart</h1>
      </div>
      <Outlet />
    </CartProvider>
  );
}

export default App;
