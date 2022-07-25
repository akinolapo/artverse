import React from 'react'
import Logo from './Logo'
import SiteName from './SiteName'

const Header = () => {
  return (
    <div className='header-section'>
      <div className='px-8 pt-8'></div>
        <Logo/>
        <SiteName/>
    </div>
  )
}

export default Header