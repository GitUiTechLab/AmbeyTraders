import React from 'react'
import Logo from "../../assets/logo/AmbeyTraders 2.png";

import "./footer.css";
import { FacebookLogo, LinkedInLogo, YoutubeLogo } from '../../assets';
import { footerContentMiddleTwo, footerContentRightMiddleOne, footerContentRightOne, footerContentRightTwo, footerLeftContent } from '../../constants';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content-left'>
                <div className='footer-logo-container'>
                    <img src={Logo} alt="Ambey Traders Logo" width={178} height={49} />
                    <p className='text-footerTextColor text-[12px] text-left'>
                        If you’re interested in learning more about how  <br />
                        we partner with organisations to transform <br />
                        businesses, fill out the form below.
                    </p>
                    <div className='social-logo-container flex justify-start items-start'>
                        {[YoutubeLogo, FacebookLogo, LinkedInLogo].map((each, idx) => {
                            return (
                                <img key={idx} src={each} alt="Social Media Logo" width={16} height={16} className='m-2' />
                            )
                        })}
                    </div>
                </div>
                <div className='content-left'>
                    {footerLeftContent.map((each, idx) => {
                        return (
                            <div key={idx} className='footer-content-left-item'>
                                <span className='mr-3'>
                                    <img src={each.icon} alt="icon" width={13} height={16} />
                                </span>
                                <span>{each.text}</span>
                            </div>
                        )
                    })}
                </div>

            </div>
            <div className="footer-content-right flex items-start justify-between">
                {footerContentRightOne.map((each, idx) => {
                    return (
                        <div className='each-content gap-5' key={idx}>
                            <div className='header'>{each.header}</div>
                            {each.subheader.map((item, idx) => {
                                return (
                                    <div className='sub-header' key={idx}>
                                        {item.name}
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <div className='footer-content-middle flex justify-between items-start flex-col ml-7'>
                    {footerContentRightMiddleOne.map((each, idx) => {
                        return (
                            <div className='each-content gap-3' key={idx}>
                                <div className='header '>{each.header}</div>
                                {each.subheader.map((item, idx) => {
                                    return (
                                        <div className='sub-header' key={idx}>
                                            {item.name}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                    {footerContentMiddleTwo.map((each, idx) => {
                        return (
                            <div className='each-content mt-16 gap-3' key={idx}>
                                <div className='header'>{each.header}</div>
                                {each.subheader.map((item, idx) => {
                                    return (
                                        <div className='sub-header' key={idx}>
                                            {item.name}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
                <div className='footer-content-right-left ml-10'>
                    {footerContentRightTwo.map((each, idx) => {
                        return (
                            <div className='each-content gap-[15px]' key={idx}>
                                <div className='header'>{each.header}</div>
                                {each.subheader.map((item, idx) => {
                                    return (
                                        <div className='sub-header' key={idx}>
                                            {item.name}
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Footer