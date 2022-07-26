import React from 'react'
import Searchbox from './Searchbox'

const SiteName = () => {
  return (
    <div className='text-center mt-16'>
        <div className='pb-8'>
        <img className='m-auto' src={process.env.PUBLIC_URL+`assets/artverse.webp`} alt='artverse'></img>
        <h3 className='text-2xl site'>Connecting artists and collectors in the metaverse</h3>
        <img className='m-auto' src={process.env.PUBLIC_URL+`assets/artverse2.webp`} alt='artverse2'></img>
        </div>
        <Searchbox/>
    </div>
  )
}

export default SiteName