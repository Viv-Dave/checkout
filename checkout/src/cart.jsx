// Cart.js
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import controllerimg from '../public/GameImages/game.svg'
import './cart.css'
export default function Cart() {
  const { addtoCart, removeFromCart } = useCart();
  function handleClick() {
    
  }
  return (
    <>
    <div className='cart-page'>
      <Link to="/"><button>Go back</button></Link>
      <Link to="/products"><button>Go to Products</button></Link>
      <div className="cart-items">
        {addtoCart.length > 0 ? (
          addtoCart.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.thumb} alt={item.title} />
              <h6>{item.title}</h6>
              <p>Price: {item.salePrice}</p>
              <button onClick={() => removeFromCart(item.dealID)}>Remove</button>
            </div>
          ))
        ) : (
        <>
        <div className='image-container'>
        <img src={controllerimg} className='image' alt="" />
        <h6>Oops...you do not have any games now. Go to Products and add some games right now!</h6>
        </div>
        </>
        )}
      <div>
        <button onClick={handleClick()}>Checkout</button>
      </div>
      </div>
      </div>
    </>
  );
}
