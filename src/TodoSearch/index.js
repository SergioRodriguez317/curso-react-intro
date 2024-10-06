import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const {
    serchValue,
    setSearchValue
  } = React.useContext(TodoContext)

  
  return (
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={serchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
    />
  );
}

export { TodoSearch };
