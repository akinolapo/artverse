import React from 'react'

const Footer = () => {
  return (
    <div className='footer text-center p'>
        <h6 className='text-lg'>&copy;Artverse {new Date().getFullYear()}</h6>
    </div>
  )
}

export default Footer