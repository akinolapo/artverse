import React from 'react'

const Searchbox = () => {
  return (
    <div className=''>
        <input className='py-2 px-4 search-box text-black text-lg' type='search'></input>
        <input className='py-2 px-4 btn-search text-lg cursor-pointer' type='submit' value='Find Art'></input>
    </div>
  )
}

export default Searchbox