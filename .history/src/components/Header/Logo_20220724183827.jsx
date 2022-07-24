import React from 'react'

const Logo = () => {
  return (
    <div>
        <div>
        <img src={process.env.PUBLIC_URL+`assets/TRANSPARENT-01.png`} alt='logo' width='50px' height='80px'></img>
        </div>
    </div>
  )
}

export default Logo