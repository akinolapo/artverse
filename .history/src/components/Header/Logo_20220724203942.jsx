import React from 'react'
import './Logo.css'
import { useState } from 'react'

const Logo = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    return (
        <nav className="navigation px-2 md:px-20 text-white">
            <a href='/'>
                <div className=''>
                <img src={process.env.PUBLIC_URL+`assets/logo.png`} alt='logo' width='120px' height='auto'></img>
                </div>
            </a>
            <button className="hamburger" onClick={() => {
                setIsNavExpanded(!isNavExpanded);
            }}>
                {/* icon from heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={
                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                }>
                <ul>
                    <li><a href='#artverse'>Artverse</a></li>
                    <li><a href='#team'>The Team</a></li>
                    <li><a href='#ladies'>Lens Lasies</a></li>
                    <li><a href='#artists'>Artists</a></li>
                    <li><a href='#faqs'>FAQs</a></li>
                    <li><a href="/"><button>Login</button></a></li>
                    <li><a href="/"><button>Sign Up</button></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Logo
// const Logo = () => {
//   return (
//     <div className='flex text-white justify-between'>
//         <div>
//         <img src={process.env.PUBLIC_URL+`assets/logo.png`} alt='logo' width='120px' height='auto'></img>
//         </div>
//         <div className='flex'>
//             <ul className='flex'>
//                 <ul><a href='#artverse'>Artverse</a></ul>
//                 <ul><a href='#team'>The Team</a></ul>
//                 <ul><a href='#ladies'>Lens Lasies</a></ul>
//                 <ul><a href='#artists'>Artists</a></ul>
//                 <ul><a href='#faqs'>FAQs</a></ul>
//             </ul>
//             <div>
//             <button>Login</button>
//             <button>Sign Up</button>
//         </div>
//         </div>
       
//     </div>
//   )
// }

// export default Logo