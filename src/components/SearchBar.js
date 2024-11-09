import React from 'react';

function SearchBar() {
  return (
    <section className="search-bar">
      <h1>Reforming eating culture</h1>
      <p>Order what you love</p>
      <div className="search-box">
        <select>
          <option>Delivery</option>
          <option>Pickup</option>
        </select>
        <input type="text" placeholder="Enter Your Address" />
        <button>Go to Food</button>
      </div>
    </section>
  );
}

export default SearchBar;
