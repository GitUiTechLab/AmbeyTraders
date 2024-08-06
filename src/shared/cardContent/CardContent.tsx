import React from 'react'
import "./cardContent.css";
import { RatingIcons, WishlistCardIcon } from '../../assets';
import { useNavigate } from 'react-router-dom';

const CardContent = ({ content }: any) => {
    const navigate = useNavigate();

    const handleNewPageClick = () => {
        navigate(content[0].path);
    }
    return (
        <div className='card-content flex justify-center items-center flex-col'>

            <div className='header'>{content[0].headerName}</div>
            <div className='content'>
                {content[0].content.map((each: any, idx: number) => {
                    const { image, header, subheader, rating, price, imageHeight, imageWidth, tag } = each;
                    return (
                        <div key={idx} className='content-item relative'>
                            {tag ? <div className="absolute top-2 left-2 bg-buttonBgColor text-white text-sm px-2 py-1 rounded-bl-[4px] rounded-br-[4px]">
                                {tag}
                            </div> : null}
                            <div className='whishlist-icon-container absolute top-2 right-4'>
                                <img src={WishlistCardIcon} alt="wishlist" width={24} height={24} />
                            </div>
                            <div className='content-item-image'>
                                <img src={image} alt="new-arrival-image" width={imageWidth} height={imageHeight} />
                            </div>
                            <div className='content-item-header'>
                                {header}
                            </div>
                            <div className='content-item-subheader'>
                                {subheader}
                            </div>
                            <div className='content-item-rating-container flex flex-row justify-center items-center'>
                                <div className='content-item-rating flex justify-between items-start'>
                                    <span className='text-[16px]'>{rating}</span>
                                    <span className='ml-2'>
                                        <img src={RatingIcons} alt="rating" width={24} height={24} />
                                    </span>
                                </div>
                                <div className='content-item-border' />
                                <div className='content-item-price ml-3'>{price}</div>
                            </div>
                        </div>
                    );
                })}
            </div>
            {content[0].buttonHeader ? <button className='content-btn-container' onClick={handleNewPageClick}>
                {content[0].buttonHeader}
            </button> : null}
        </div>
    )
}

export default CardContent