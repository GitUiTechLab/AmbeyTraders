import React from 'react'
import { testimonialsContent } from '../../constants';
import { SemiColonIcon } from '../../assets';

import "./testimonials.css";


const Testimonials = () => {
    return (
        <div className='testimonials bg-testimonialsBgColor flex  flex-col justify-center items-center mt-10 px-10 pt-10 pb-20'>
            <div className='header m-10'>Testimonials</div>
            <div className='flex flex-row justify-between items-center gap-20'>
                {testimonialsContent.map((testimonial, idx) => {
                    return (
                        <div key={idx} className={idx % 2 !== 0 ? "testimonial-large" : "testimonial_small"}>
                            <p className='text-testimonialsTextColor text-[16px] '>{testimonial.text}</p>
                            <p className='text-homeHeroSectionFontColor text-[24px] font-[500px] mt-7'>
                                {testimonial.name}
                            </p>
                            <p className='text-testimonialLocationTextColor text-[16px]'>
                                {testimonial.location}
                            </p>
                            <div className='absolute bottom-[-9px] right-[10px]'>
                                <img src={SemiColonIcon} alt="icon" width={54} height={46} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Testimonials