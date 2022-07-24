import React from 'react'

const Logo = () => {
  return (
    <div className='flex text-white justify-between'>
        <div>
        <img src={process.env.PUBLIC_URL+`assets/logo.png`} alt='logo' width='120px' height='auto'></img>
        </div>
        <div>
            <ul className='flex justify-between'>
                <ul><a href='#artverse'>Artverse</a></ul>
                <ul><a href='#team'>The Team</a></ul>
                <ul><a href='#ladies'>Lens Lasies</a></ul>
                <ul><a href='#artists'>Artists</a></ul>
                <ul><a href='#faqs'>FAQs</a></ul>
            </ul>
        </div>
       
    </div>
  )
}

export default Logo