import React from 'react'
import CardContent from '../../shared/cardContent/CardContent'
import { BestSellerContent } from '../../constants'

const BestSellers = () => {
    return (
        <div className='best-sellers-container'>
            <CardContent content={BestSellerContent} />
        </div>
    )
}

export default BestSellers