import React from 'react';

const SearchBox = () => {
  console.log("search field");

  return (
    <div className='pa2'>
      <input
        className='pa3 ba bg-lightest-blue'
        type='search'
        placeholder='-under construction-'
        // onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;