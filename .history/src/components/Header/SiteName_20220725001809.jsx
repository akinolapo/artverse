import React from 'react'
import Searchbox from './Searchbox'

const SiteName = () => {
  return (
    <div className='text-center'>
        <img src={process.env.PUBLIC_URL+`assets/artverse.webp} alt='artverse'></img>
        <h2>Connecting artists and collectors in the metaverse</h2>
        <Searchbox/>
    </div>
  )
}

export default SiteName