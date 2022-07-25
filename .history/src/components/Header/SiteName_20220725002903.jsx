import React from 'react'
import Searchbox from './Searchbox'

const SiteName = () => {
  return (
    <div className='text-center mt-20'>
        <div className='pb-4'>
        <img className='m-auto' src={process.env.PUBLIC_URL+`assets/artverse.webp`} alt='artverse'></img>
        <h2 className='text-2xl'>Connecting artists and collectors in the metaverse</h2>
        </div>
        <Searchbox/>
    </div>
  )
}

export default SiteName