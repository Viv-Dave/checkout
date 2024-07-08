import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import './products.css';
import { Loader } from './Loader';
export default function Products() {
  const { addtoCart, setAddtoCart } = useCart();
  const [listOfGames, setListOfGames] = useState([]);
  const [limit, setLimit] = useState(15);
  const [dropDown, setDropdown] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [filterOption, setFilterOption] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&lowerPrice=30&upperPrice=50", requestOptions)
      .then(response => response.json())
      .then(result => {setListOfGames(result);setIsLoading(false);})
      .catch(error => console.log('error', error));
  }, []);

  function ratingColor(rating) {
    if (rating > 80) {
      return 'green';
    } else if (rating > 50) {
      return 'yellow';
    } else {
      return 'red';
    }
  }

  function handleSortChange(event) {
    setSortOption(event.target.value);
  }

  function handleFilterChange(event) {
    setFilterOption(event.target.value);
  }

  function handleDropdownToggle() {
    setDropdown(!dropDown);
  }

  function handleAddToCart(game) {
    setAddtoCart([...addtoCart, game]);
  }

  const sortedAndFilteredGames = listOfGames
    .filter(game => {
      if (filterOption === 'high-rating') {
        return game.steamRatingPercent > 80;
      } else if (filterOption === 'low-price') {
        return game.salePrice < 10;
      }
      return true;
    })
    .sort((a, b) => {
      if (sortOption === 'price-asc') {
        return a.salePrice - b.salePrice;
      } else if (sortOption === 'price-desc') {
        return b.salePrice - a.salePrice;
      } else if (sortOption === 'rating') {
        return b.steamRatingPercent - a.steamRatingPercent;
      }
      return 0;
    });

  return (
    <>
    {isLoading ? (
      <Loader/>
    ) : (
      <div>
      <div className='nav-page'>
      <div className='nav-filter'>
      <Link to="/"><button className='go-back'>Go back</button></Link>
      <button onClick={handleDropdownToggle} className='sort-filter'>Sort and Filter</button>
      {dropDown && (
        <div className="dropdown">
          <div>
            <label>Sort By:</label>
            <select value={sortOption} onChange={handleSortChange}>
              <option value="">Select</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
          <div>
            <label>Filter By:</label>
            <select value={filterOption} onChange={handleFilterChange}>
              <option value="">Select</option>
              <option value="high-rating">High Rating</option>
              <option value="low-price">Low Price</option>
            </select>
          </div>
        </div>
      )}
      </div>
      <div className='cart-button'>
      <Link to="/cart"><button className='cart'>Cart</button></Link>
      </div>
      </div>
      <div className='show-products'>
        {sortedAndFilteredGames.slice(0, limit ? limit : sortedAndFilteredGames.length).map((item) => (
          <div key={item.dealID} className='game-card'>
            <img src={item.thumb} alt="" />
            <h6>{item.title}</h6>
            <div className='price-section'>
              <p className='normal-price'>${item.normalPrice}</p>
              <p className='deal-price'>${item.salePrice}</p>
              <p className='savings'>{item.savings}%</p>
            </div>
            <div className='review-section'>
              <div className='circle' style={{ backgroundColor: ratingColor(item.steamRatingPercent) }}></div>
              <div className>{item.steamRatingPercent}%</div>
              <p>Ratings: {item.steamRatingCount}</p>
            </div>
            <button onClick={() => handleAddToCart(item)} className='cart-button'>Add to Cart</button>
          </div>
        ))}
      </div>
      </div>
    )
    }
    </>
  );
}
