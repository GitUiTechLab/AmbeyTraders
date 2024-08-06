import React from 'react'
import CardContent from '../../shared/cardContent/CardContent'
import { MoreToExploreContent } from '../../constants'

const MoreToExplore = () => {
    return (
        <div className='more-to-explore'>
            <CardContent content={MoreToExploreContent} />
        </div>
    )
}

export default MoreToExplore