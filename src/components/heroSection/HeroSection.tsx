import React from 'react'
import { ArrowIcon, HeroImage, SaleImage } from '../../assets';
import { Link } from 'react-router-dom';

import "./heroSection.css";

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className='hero-section-content'>
                <div className='hero-text'>
                    <span className='text-heroTextColor1'>Laundry</span>
                    <span className='text-heroTextColor2 ml-10'>Feast</span>
                </div>
                <div className='hero-sub-text'>
                    <span className='text-[32px] text-heroTextColor1 mr-4'>UP TO</span>
                    <span className='text-[90px] text-heroTextColor2 mr-4'>30%</span>
                    <span className='text-[48px] text-heroTextColor2'>OFF</span>
                </div>
                <Link to="/all-products" className="hero-button-link">
                    <button className='hero-button'>
                        <span className='mr-3'>Shop Now</span>
                        <span>
                            <img src={ArrowIcon} width={24} height={24} alt="arrow" />
                        </span>
                    </button>
                </Link>
            </div>
            <div className='hero-image-container flex justify-center items-center'>
                <img src={HeroImage} width={657} height={472} alt="hero" />
            </div>
            <div className='hero-image2-container'>
                <img src={SaleImage} width={169} height={128} alt="sale-image" />
            </div>

        </div>
    )
}

export default HeroSection