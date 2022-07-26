import React from 'react'

const Footer = () => {
  return (
    <div className='footer text-center py'>
        <h6 className='text-lg'>&copy;Artverse {new Date().getFullYear()}</h6>
    </div>
  )
}

export default Footer