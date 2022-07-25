import React from 'react'
import {AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'

const Team = () => {
    return (
        <div id='team' className='py-10 px-20 theTeam'>
            <h2 className=' text-center text-3xl font-bold mb-4'>The Team</h2>
            <div className='grid grid-cols-1 gap-4 items-center md:grid-cols-3'>
                <div>
                    <div className='text-center'>
                        <img className='rounded-full m-auto' src={process.env.PUBLIC_URL+`assets/founder.webp`} alt='Founder'></img>
                        <h5>Rachel Wood</h5>
                        <h6>Founder</h6>
                        <div className='flex justify-center'>
                            <a href='https://twitter.com/0xWanderbitch' className='mr-2' target='_blank' rel="noreferrer"><AiOutlineTwitter className='social-icon'/></a>
                            <a href='https://www.instagram.com/thetravelingelf/' target='_blank' rel="noreferrer"><AiOutlineInstagram className='social-icon'/></a>
                        </div>
                    </div>
                </div>
                <div className='md:col-span-2'>
                    <h4 className='mb-4'>From the Founder</h4>
                    <p>
                        The past few months have been a whirlwind. After collecting many NFTs from 1/1 artists and releasing my own work, I noticed a glaring struggle for artists and collectors to connect amid the noise.
                        As a collector, I love finding artist to support, but I spend too much time trying to find artist's work rather than connecting with them. By the time I find art I like, it has usually already been sold.
                        On the other hand, as an artist, I feel drowned out by the noise and constant pressure to ‘shill’ myself. Burnout feels inevitable for artists after having to take on a second, full-time marketing job to beat the algorithms of social media.
                        Artverse connects artists and collectors in the metaverse. Artverse is my solution.
                    </p>
                </div>
            </div>
      


      
            </div>
        </div>
    )
}

export default Team