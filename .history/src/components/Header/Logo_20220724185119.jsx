import React from 'react'

const Logo = () => {
  return (
    <div>
        <div>
        <img src={process.env.PUBLIC_URL+`assets/Vector File Svg.svg`} alt='logo' width='150px' height='80px'></img>
        </div>
    </div>
  )
}

export default Logo