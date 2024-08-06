import React from 'react'
import "./homeHeroSection.css";
import { HomeHeroImage2 } from '../../assets';

const HomeHeroSection = () => {
    return (
        <div className='home-hero-section'>
            <div className='hero-content flex flex-col justify-start items-start'>
                <div className='text-[40px] font-normal'>It's Almost</div>
                <div className='text-[72px] font-extrabold'>Summer Season!</div>
                <div className='text-[32px] font-[600px]'>Upto 50% Off</div>
                <button className='hero-content-btn'>Shop Now</button>
            </div>
            <div className='hero-image'>
                <img src={HomeHeroImage2} alt="product-image" width={292} height={382} />
            </div>
        </div>
    )
}

export default HomeHeroSection