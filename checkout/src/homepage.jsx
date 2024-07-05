import { Link } from 'react-router-dom';

export default function Homepage() {
  return (
    <>
      <div>
        Explore Products
        <button>Homepage</button>
        <Link to="/products"><button>Products</button></Link>
        <Link to="/cart"><button>Cart</button></Link>
        <div className="slideshow">A slideshow here</div>
        <div className="quote">A Quote here</div>
        <div className="grid-container">
          <div className="cat">Cat-1</div>
          <div className="cat">Cat-2</div>
          <div className="cat">Cat-3</div>
          <div className="cat">Cat-4</div>
        </div>
        <div className="contact"></div>
      </div>
    </>
  );
}
