import React from 'react'

const Searchbox = () => {
  return (
    <div className=''>
        <input className='p-2 search-box text-black text-lg' type='search'></input>
        <input className='p-2 btn-search text-lg poi' type='submit' value='Search'></input>
    </div>
  )
}

export default Searchbox