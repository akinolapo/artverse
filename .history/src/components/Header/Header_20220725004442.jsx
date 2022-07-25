import React from 'react'
import Logo from './Logo'
import SiteName from './SiteName'

const Header = () => {
  return (
    <div className='header-section px-8 pt-4'>
        <Logo/>
        <SiteName/>
    </div>
  )
}

export default Header