import React from 'react'
import CardContent from '../../shared/cardContent/CardContent'
import { RecenetlyViewedContent } from '../../constants'

const RecentlyViewed = () => {
    return (
        <div className='recently-viewed-container'>
            <CardContent content={RecenetlyViewedContent} />
        </div>
    )
}

export default RecentlyViewed