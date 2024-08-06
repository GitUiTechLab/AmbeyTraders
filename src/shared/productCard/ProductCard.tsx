import React from 'react'
import { ProductCardContainerPeops } from '../../types'
import { RatingIcons } from '../../assets'

import "./productCard.css";

const ProductCard: React.FC<ProductCardContainerPeops> = ({ item }) => {
    return (
        <div className='each-card '>
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
    )
}

export default ProductCard