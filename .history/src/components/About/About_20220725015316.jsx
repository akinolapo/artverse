import React from 'react'
import Carousel from './Carso/Carousel'

const About = () => {
    return (
        <div id='artverse' className='py-10 px-10'>
            <h2 className=' text-center text-3xl font-bold'>What is Artverse?</h2>
            <div>
                <h3 className='text-2xl font-semibold p'>A Community of Art Lovers</h3>
                <p className='text-xl'>Art is incredibly powerful; it can make us dance, cry, and everything in between! We wish to cultivate a community of people who believe in the value of art, rather than continually ask ‘‘what is the utility?
                </p>
                <p className='text-xl'>Instead of feeling like you are starting from ground zero on Twitter and NFTS, you are instantly connected to hundreds of like-minded people all around the world and get answers to your questions.</p>
            </div>
            <Carousel />
        </div>
    )
}

export default About