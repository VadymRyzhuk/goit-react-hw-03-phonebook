import React from 'react';

const Filter = ({ handleFilter }) => {
  return (
    <div>
      <p>
        Find contact by name:
        <input
          onChange={handleFilter}
          type="text"
          name="keyword"
          placeholder="Anna"
          pattern="^[A-Za-z]*$"
        />
      </p>
    </div>
  );
};

export { Filter };
