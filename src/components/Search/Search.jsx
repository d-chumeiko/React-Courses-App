import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import Input from '../Input/Input';
import './Search.scss';
import { SEARCH_BUTTON_LABEL, SEARCH_PLACEHOLDER } from '../../constants';

const Search = ({ setSearchValue }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchButtonClick = () => {
    setSearchValue(searchInput);
  };

  return (
    <div className='search'>
      <div className='search__input'>
        <Input
          placeholder={SEARCH_PLACEHOLDER}
          value={searchInput}
          onChange={handleSearchInputChange}
        />
      </div>
      <div className='search__button'>
        <Button label={SEARCH_BUTTON_LABEL} onClick={handleSearchButtonClick} />
      </div>
    </div>
  );
};

Search.propTypes = {
  setSearchValue: PropTypes.func,
};

export default Search;
