import React, { useState } from "react";
import data from "../data/data";

export default function Card() {
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const handleSearchClick = () => {
    const newData = data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(newData);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="card">
      <h2>Country Flag Search</h2>
      <div className="search-container">
        <input
          type="text"
          id="country-name-input"
          placeholder="Enter a country name here..."
          value={searchText}
          onChange={handleInputChange}
        />
        <button id="search-btn" onClick={handleSearchClick}>
          Search
        </button>
        <div className="flag-container">
          {filteredData.map((item) => (
            <div className="flag-item" key={item.id}>
              <img src={item.flagImageUrl} />
              <div className="color-container">
                {item.colors.map((color) => (
                  <div
                    className="color-item"
                    style={{ backgroundColor: color }}
                    key={color}
                  >
                    <span>{color}</span>
                  </div>
                ))}
              </div>
              <h3>{item.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
