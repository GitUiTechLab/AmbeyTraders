import React from 'react'
import CardContent from '../../shared/cardContent/CardContent'
import { DailyDealsContent } from '../../constants'

const HomeDailyDeals = () => {
    return (
        <div className='home-daily-deals'>
            <CardContent content={DailyDealsContent} />
        </div>
    )
}

export default HomeDailyDeals