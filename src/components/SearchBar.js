import { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [onlyInStock, setOnlyInStock] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value, onlyInStock); // Include stock filter
  };

  const handleCheckboxChange = (event) => {
    setOnlyInStock(event.target.checked);
    onSearch(searchTerm, event.target.checked); // Trigger search with stock filter
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <label>
        <input
          type="checkbox"
          checked={onlyInStock}
          onChange={handleCheckboxChange}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchBar;
