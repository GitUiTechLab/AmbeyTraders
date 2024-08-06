import React from 'react'
import { HowToShopSteps } from '../../constants'
import { HowToShopIcon } from '../../assets'

const HowToShop = () => {
    return (
        <div className='how-to-shop-container flex justify-center items-center'>
            <div className="bg-primaryNavbarBgColor py-8 px-4 lg:px-16 text-center shadow-sm">
                <div className="flex flex-row justify-between items-center">
                    <div className='flex flex-col justify-start items-start mr-10'>
                        {HowToShopSteps.slice(0, 3).map((step) => (
                            <div key={step.id} className="flex items-start space-x-6 mb-10 justify-start">
                                <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center">
                                    {step.id}
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold">{step.title}</h3>
                                    <p className="text-sm">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-end items-center flex-col">
                        <div className='header text-buttonBgColor text-[40px]'>
                            How to Shop
                        </div>
                        <img src={HowToShopIcon} alt="Gift" width={68} height={104} />
                    </div>
                    <div className='flex flex-col justify-start items-start ml-10'>
                        {HowToShopSteps.slice(3).map((step) => (
                            <div key={step.id} className="flex items-start space-x-2 mb-10">
                                <div className="bg-orange-600 text-white rounded-full w-[31px] h-[31px] flex flex-col items-center justify-center">
                                    {step.id}
                                </div>
                                <div className="text-left">
                                    <h3 className="font-semibold">{step.title}</h3>
                                    <p className="text-sm">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HowToShop