import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const [listOfGames, setListOfGames] = useState([]);

  useEffect(() => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=30", requestOptions)
      .then(response => response.json())
      .then(result => setListOfGames(result))
      .catch(error => console.log('error', error));
  }, []);
  console.log(listOfGames)
  return (
    <>
      <div>This is the Products Page</div>
      <label htmlFor="Search">
        <input type="text" />
      </label>
      <div className='show-products'>
        {/* Show Default Games */}
        {listOfGames.map((item) => (
          <div key={item.dealID}>{item.title}</div>
        ))}
      </div>
      <Link to="/"><button>Go back</button></Link>
    </>
  );
}
