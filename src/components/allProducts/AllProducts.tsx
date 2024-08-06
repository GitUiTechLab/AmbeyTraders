import React from 'react'
import { allProductsContent } from '../../constants'

const AllProducts = () => {
    return (
        <div className='all-products px-10 relative'>
            <div className='all-products-header text-[40px] text-black font-inter'>
                All Products
            </div>
            <div className='absolute top-0 right-[10px] text-buttonBgColor text-sm'>View All</div>
            <div className='flex justify-between items-center'>
                {allProductsContent.map((each, idx) => {
                    return (
                        <div key={idx} className='all-products-content'>
                            <span className='all-products-content-image'>
                                <img src={each.image} width={160} height={160} className="rounded-full" alt="product-image" />
                            </span>
                            <span className='all-products-content-name'>
                                {each.header}
                            </span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AllProducts