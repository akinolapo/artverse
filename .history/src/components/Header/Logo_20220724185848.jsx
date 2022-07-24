import React from 'react'

const Logo = () => {
  return (
    <div>
        <div>
        <img src={process.env.PUBLIC_URL+`assets/logo.png`} alt='logo' width='120px' height='auto'></img>
        </div>
        <div>
            <ul>
                <ul><a href=''>Artverse</a></ul>
            </ul>
        </div>
        <div></div>
    </div>
  )
}

export default Logo