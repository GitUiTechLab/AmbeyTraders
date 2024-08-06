import React from 'react'
import CardContent from '../../shared/cardContent/CardContent'
import { NewArrivalContent } from '../../constants'

const NewArrivals = () => {
    console.log(NewArrivalContent);
    return (
        <div className='new-arrivals'>
            <CardContent content={NewArrivalContent} />
        </div>
    )
}

export default NewArrivals