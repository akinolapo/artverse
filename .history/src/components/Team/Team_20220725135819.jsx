import React from 'react'

const Team = () => {
  return (
    <div id='team' className='py-10 px-20'>
        <h2 className=' text-center text-3xl font-bold'>The Team</h2>
        <div className='grid grid-cols-1 md:grid-cols-3'>
        <div>1</div>
        <div className='md:col-span-2'>
            <h4>From the Founder</h4>
        </div>
        </div>
    </div>
  )
}

export default Team