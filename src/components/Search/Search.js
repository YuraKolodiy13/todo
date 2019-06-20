import React from 'react'
import './Search.scss'

const Search = (props) => {
  return (
      <input placeholder='search' className='Search' onChange={e => props.onSearch(e)}/>
  )
};

export default Search