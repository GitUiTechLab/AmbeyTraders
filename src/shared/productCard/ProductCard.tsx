import React from 'react'
import { ProductCardContainerPeops } from '../../types'
import { RatingIcons } from '../../assets'

import "./productCard.css";

const ProductCard: React.FC<ProductCardContainerPeops> = ({ item }) => {
    return (
        <>
            <div className='each-card relative'>
                {item.tag ? (<div className={`each-card-tag absolute top-0 left-0 ${item.tag === "Best Seller" ? "bg-buttonBgColor" : item.tag === "Must Try" ? "bg-tagSecondaryColor" : "bg-tagSecondaryColor3"} rounded-tl-[12px] rounded-br-[12px]`}>
                    <span className='text-white px-[8px] py-[6px] text-[16px]'>{item.tag}</span>
                </div>) : null}
                {item.tag1 ? <div className='absolute right-0 top-0 bg-tagSecondaryColor2 rounded-tr-[12px] rounded-bl-[12px]'>
                    <span className='text-white px-[8px] py-[6px] text-[16px]'>{item.tag1}</span>
                </div> : null}
                <div className='each-card-image'>
                    <img src={item.image} alt={item.header} width={item.imageWidth} height={item.imageHeight} />
                </div>
                <div className='each-card-header text-[14px] font-normal text-headerColor'>
                    {item.header}
                </div>
                <div className='each-card-subheader text-[12px] font-normal text-subheaderColor'>
                    {item.subheader}
                </div>
                <div className='rating-price-container flex justify-center items-center'>
                    <div className='flex items-center'>
                        <span>
                            <img src={RatingIcons} alt="rating" width={24} height={24} />
                        </span>
                        <span>{item.rating}</span>
                    </div>
                    <div className='border-r-[1px] border-borderRightColor w-[24px] p-2 text-center' />
                    <div className='price-container ml-5'>{item.price}</div>
                </div>

            </div>
            <div className='add-to-cart-btn bg-buttonBgColor text-white px-10 py-3'>Add to cart</div>
        </>
    )
}

export default ProductCard