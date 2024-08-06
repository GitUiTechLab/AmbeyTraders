import React from 'react'
import { WhatsappIcon } from '../../assets'

import "./homeWhatsappHeroSection.css";

const HomeWhatsappHeroSection = () => {
    return (
        <div className='whatsapp-hero-section'>
            <div className='section-content flex justify-start items-start'>
                <div className='section-content-image'>
                    <img src={WhatsappIcon} width={80} height={83} alt="icon" />
                </div>
                <div className='content'>
                    <div className='header text-[32px] font-[600px] font-inter'>Order on WhatsApp</div>
                    <div className='sub-header text-[18px] font-inter '>We are accepting orders on Whatsapp.</div>
                </div>
            </div>
            <button className='content-btn text-[16px] mt-8'>Chat on Whatsapp</button>
        </div>
    )
}

export default HomeWhatsappHeroSection