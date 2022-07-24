import React from 'react'

const Logo = () => {
  return (
    <div className='flex text-white'>
        <div>
        <img src={process.env.PUBLIC_URL+`assets/logo.png`} alt='logo' width='120px' height='auto'></img>
        </div>
        <div>
            <ul>
                <ul><a href='#artverse'>Artverse</a></ul>
                <ul><a href='#team'>The Team</a></ul>
                <ul><a href='#ladies'>Lens Lasies</a></ul>
                <ul><a href='#artists'>Artists</a></ul>
                <ul><a href='#faqs'>FAQs</a></ul>
            </ul>
        </div>
        <div>
            <button>Login</button>
            <button>Sign Up</button>
        </div>
    </div>
  )
}

export default Logo