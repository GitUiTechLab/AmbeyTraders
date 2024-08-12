import React, { useEffect, useState } from 'react'
import { BestSellerPageContent, categories, discounts, products } from '../../constants';
import ProductCard from '../../shared/productCard/ProductCard';
import FilterByCategory from '../../shared/filterByCategory/FilterByCategory';

import "./moreToExplore.css";

const MoreToExplorePage = () => {
    const [filteredByCategory, setFilteredByCategory] = useState<null | string>(null);
    const [filteredByDiscount, setFilteredByDiscount] = useState<null | string>(null);
    const [filteredByProducts, setFilteredByProducts] = useState<null | string>(null);
    const [filteredProducts, setFilteredProducts] = useState<any>(BestSellerPageContent);

    const handleFilteredByCategory = (event: any) => {
        setFilteredByCategory(event.target.value);
    }

    const handleFilteredByDiscount = (event: any) => {
        setFilteredByDiscount(event.target.value);
    }

    const handleFilteredByProduct = (event: any) => {
        setFilteredByProducts(event.target.value);
    }



    useEffect(() => {
        if (filteredByCategory !== null) {
            const filteredProducts = BestSellerPageContent.filter(product => product.category === filteredByCategory);
            setFilteredProducts(filteredProducts)
        }

    }, [filteredByCategory])

    useEffect(() => {
        if (filteredByCategory === "all") {
            setFilteredProducts(BestSellerPageContent);
        }

    }, [filteredByCategory])

    useEffect(() => {
        if (filteredByDiscount !== null) {
            const filteredProducts = BestSellerPageContent.filter(product => (product.discount ?? 0) >= Number(filteredByDiscount));
            setFilteredProducts(filteredProducts);
        }
    }, [filteredByDiscount])

    useEffect(() => {
        if (filteredByProducts !== null) {
            const filteredProducts = BestSellerPageContent.filter(product => product.subCategory === filteredByProducts);
            setFilteredProducts(filteredProducts);
        }
    }, [filteredByProducts])

    return (
        <div className='more-to-explore-container'>
            <div className='more-to-explore-filter-container'>
                <FilterByCategory headerName={"Filter by Category"} categories={categories} handleChange={handleFilteredByCategory} selectedCategory={filteredByCategory} />
                <FilterByCategory headerName='Discount Range' categories={discounts} handleChange={handleFilteredByDiscount} selectedCategory={filteredByDiscount} />
                <FilterByCategory headerName='Filter by Product' categories={products} handleChange={handleFilteredByProduct} selectedCategory={filteredByProducts} />
            </div>
            <div className='more-to-explore-content-container'>
                <div className='header'>More To Explore</div>
                <div className='products-container-grid'>
                    {filteredProducts.map((each: any, idx: number) => {
                        return (
                            <div key={idx} className='best-seller-product'>
                                <ProductCard item={each} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MoreToExplorePage