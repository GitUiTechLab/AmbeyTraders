
import React, { useEffect, useState } from 'react';
import Chip from '@mui/material/Chip';
import FaceCareHeroImage from "../../assets/images/face_care_hero_image.png"
import "./faceCarePage.css";
import { FaceCarePageContent, OurProductsContent } from '../../constants';
import ProductCard from '../../shared/productCard/ProductCard';

const ourProductsCategory = [
    { name: "All", value: "all" },
    { name: "Bleach & Mask", value: "bleach & mask" },
    { name: "DYE", value: "dye" },
    { name: "FaceWash", value: "facewash" },
    { name: "Gel & Gulabjal", value: "gel&gulabjal" }
];

const FaceCarePage = () => {
    const [selected, setSelected] = useState('all');
    const [filteredOurProduct, setFilteredOurProduct] = useState<any>([]);


    const handleSelect = (category: React.SetStateAction<string>) => {
        setSelected(category);
    };

    useEffect(() => {
        if (selected === "all") {
            setFilteredOurProduct(OurProductsContent)
        } else {
            const filteredProduct = OurProductsContent.filter(product => product.subCategory === selected);
            setFilteredOurProduct(filteredProduct);
        }
    }, [selected])

    return (
        <div className='face-care-container'>
            <div className='face-care-hero-image-container'>
                <img src={FaceCareHeroImage} alt="face-care-hero-image" height={411} width={1440} />
            </div>
            <div className='face-care-content-container'>
                <div className='filter-container'></div>
                <div className='content-container'>
                    <div className='header'>Face Care</div>
                    <div className='products-container-grid'>
                        {FaceCarePageContent.map((each, idx) => {
                            return (
                                <div key={idx} className='each-product'>
                                    <ProductCard item={each} />
                                </div>
                            )
                        })}
                    </div>
                    <div className='header'>Our Product</div>
                    <div className='filter-category-container flex space-x-4'>
                        {ourProductsCategory.map((category) => (
                            <Chip
                                key={category.name}
                                label={category.name}
                                onClick={() => handleSelect(category.value)}
                                sx={{
                                    backgroundColor: selected === category.value ? '#FF5722' : '#FFFFFF',
                                    border: selected !== category.value ? "1px solid #000000" : "1px solid #FFFFFF",
                                    borderRadius: "22px",
                                    color: selected === category.value ? '#FFFFFF' : '#000000',
                                    '&:hover': {
                                        backgroundColor: selected === category.value ? '#E64A19' : '#BDBDBD',
                                    },
                                }}
                            />
                        ))}
                    </div>
                    <div className='products-container-grid'>
                        {filteredOurProduct.length > 0 ? filteredOurProduct.map((each: any, idx: number) => {
                            return (
                                <div className='each-product' key={idx}>
                                    <ProductCard item={each} />
                                </div>
                            )
                        }) : <div className='text-breadCrumbsTextColor text-center text-[32px]'>No Products To Show</div>}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FaceCarePage