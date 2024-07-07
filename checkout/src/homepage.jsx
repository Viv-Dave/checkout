import { Link } from 'react-router-dom';
import CODImg from '../public/GameImages/COD.jpg';
import CP2077 from '../public/GameImages/CyberPunk2k77.jpg';
import GoW from '../public/GameImages/god-of-war.jpg';
import GTA from '../public/GameImages/GTAV.webp';
import RDR2 from '../public/GameImages/RDR2.webp';
import './App.css';
import { useEffect, useRef, useState } from 'react';

export default function Homepage() {
  const images = [CODImg, CP2077, GTA, GoW, RDR2];
  const delay = 2500;
  
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <div className='homepage'>
        <div className='button-container'>
        <button className='nav-button'>Homepage</button>
        <Link to="/products"><button className='nav-button'>Products</button></Link>
        <Link to="/cart"><button className='nav-button'>Cart</button></Link>
        </div>
        <div className="slideshow">
          <img src={images[index]} alt="Slideshow Image" className="slideshow-image" />
        </div>
        <div className="grid-container">
          <div className="cat-1"><p>Cat-1</p></div>
          <div className="cat-2"><p>Cat-2</p></div>
          <div className="cat-3"><p>Cat-3</p></div>
          <div className="cat-4"><p>Cat-4</p></div>
        </div>
        <div className="contact"></div>
      </div>
    </>
  );
}
