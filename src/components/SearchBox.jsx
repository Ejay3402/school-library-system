import React, { useState } from 'react';

import './../styles/sech.scss'

const SearchBox = ({ onseacrh }) => {

    const [query, setQuery] = useState(``);

    const handleS = (e) => {
        e.preventDefault();

        onseacrh(query);
    }

  return (
    <div className="book-sec">
            <form onSubmit={handleS}>
              <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder='search books...' required/>

              <button type='submit'>Search</button>
            </form>
    </div>
  )
}

export default SearchBox
