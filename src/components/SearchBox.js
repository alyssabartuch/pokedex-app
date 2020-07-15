import React from 'react';

const SearchBox = ({onSearchChange}) => {

  return (
    <div className='pa2'>
      <input
        onChange={onSearchChange}
        className='pa3 ba bg-lightest-blue'
        type='search'
        placeholder='search pokemon'
      />
    </div>
  );
}

export default SearchBox;