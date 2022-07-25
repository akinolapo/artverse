import React from 'react'
import Logo from './Logo'
import SiteName from './SiteName'

const Header = () => {
  return (
    <div className='header'>
        <Logo/>
        <SiteName/>
    </div>
  )
}

export default Header