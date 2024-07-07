// Cart.js
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import controllerimg from '../public/GameImages/game.svg'
export default function Cart() {
  const { addtoCart, removeFromCart } = useCart();

  return (
    <>
      <div>This is the Cart Page</div>
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
        <img src={controllerimg} alt="" />
        <p>No items in the cart</p>
        </>
        )}
      </div>
    </>
  );
}
