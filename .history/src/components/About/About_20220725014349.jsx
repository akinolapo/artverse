import React from 'react'
import Carousel from './Carousel/Carousel'

const About = () => {
    return (
        <div id='artverse' className='text-center py-10'>
            <h2 className='text-3xl'>What is Artverse?</h2>
            <div text>
                <h3>A Community of Art Lovers</h3>
                <p>Art is incredibly powerful; it can make us dance, cry, and everything in between! We wish to cultivate a community of people who believe in the value of art, rather than continually ask ‘‘what is the utility?
                </p>
            </div>
            <Carousel />
        </div>
    )
}

export default About