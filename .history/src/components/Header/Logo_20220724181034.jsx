import React from 'react'

const Logo = () => {
  return (
    <div>
        <img src={process.env.PUBLIC_URL+`assets/TRANSPARENT-01.png`} alt='logo'></img>
    </div>
  )
}

export default Logo