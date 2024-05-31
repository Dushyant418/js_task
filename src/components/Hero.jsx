import React, { useState } from 'react'

const Hero = () => {
    const [show, setShow] = useState(true);
    return (
        <section className='mb-3'>
         
            <div className='btn'>
                <button onClick={() => setShow(!show)} className=' text-white bg-black'>click</button>
            </div>
            <div className={`${(show) ? "left-0" : " "} navbar`}>
        
                <ul className='nav_links'>
                    <li>home</li>
                    <li>contact</li>
                    <li>contact</li>
                    <li>contact</li>
                    <li>contact</li>
                </ul>
            </div>
        </section>
    )
}

export default Hero