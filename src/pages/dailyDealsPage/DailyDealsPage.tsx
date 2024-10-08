import React, { useState, useEffect } from 'react'
import { DailyDealsPageContent, categories, discounts, products } from '../../constants'
import ProductCard from '../../shared/productCard/ProductCard'
import FilterByCategory from '../../shared/filterByCategory/FilterByCategory';

import "./dailyDealsPage.css";

const DailyDealsPage = () => {
    const [filteredByCategory, setFilteredByCategory] = useState<null | string>(null);
    const [filteredByDiscount, setFilteredByDiscount] = useState<null | string>(null);
    const [filteredByProducts, setFilteredByProducts] = useState<null | string>(null);
    const [filteredProducts, setFilteredProducts] = useState<any>(DailyDealsPageContent);

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
            const filteredProducts = DailyDealsPageContent.filter(product => product.category === filteredByCategory);
            setFilteredProducts(filteredProducts)
        }

    }, [filteredByCategory])

    useEffect(() => {
        if (filteredByCategory === "all") {
            setFilteredProducts(DailyDealsPageContent);
        }

    }, [filteredByCategory])

    useEffect(() => {
        if (filteredByDiscount !== null) {
            const filteredProducts = DailyDealsPageContent.filter(product => (product.discount ?? 0) >= Number(filteredByDiscount));
            setFilteredProducts(filteredProducts);
        }
    }, [filteredByDiscount])

    useEffect(() => {
        if (filteredByProducts !== null) {
            const filteredProducts = DailyDealsPageContent.filter(product => product.subCategory === filteredByProducts);
            setFilteredProducts(filteredProducts);
        }
    }, [filteredByProducts])
    return (
        <div className='daily-deals-container'>
            <div className='daily-delas-filter-container'>
                <FilterByCategory headerName={"Filter by Category"} categories={categories} handleChange={handleFilteredByCategory} selectedCategory={filteredByCategory} />
                <FilterByCategory headerName='Discount Range' categories={discounts} handleChange={handleFilteredByDiscount} selectedCategory={filteredByDiscount} />
                <FilterByCategory headerName='Filter by Product' categories={products} handleChange={handleFilteredByProduct} selectedCategory={filteredByProducts} />
            </div>
            <div className='daily-deals-products-container'>
                <div className='header'>Daily Deals</div>
                <div className='products-grid'>
                    {filteredProducts.map((each: any, idx: number) => {
                        return (
                            <div key={idx} className='product-card'>
                                <ProductCard item={each} />
                            </div>
                        )
                    })}

                </div>
            </div>
        </div>
    )
}

export default DailyDealsPage