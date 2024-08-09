import React from 'react'

import "./newArrivals.css";
import { NewArrivalsPageContent, categories, discounts, products } from '../../constants';
import ProductCard from '../../shared/productCard/ProductCard';
import FilterByCategory from '../../shared/filterByCategory/FilterByCategory';

const NewArrivals = () => {

    return (
        <>
            <div className='new-arrivals-page'>
                <div className='new-arrivals-filter-container'>
                    <FilterByCategory headerName={"Filter by Category"} categories={categories} />
                    <FilterByCategory headerName='Discount Range' categories={discounts} />
                    <FilterByCategory headerName='Filter by Product' categories={products} />
                </div>
                <div className='new-arrivals-products-container'>
                    <div className='header'>New Arrivals</div>
                    <div className='new-arrivals-products-grid'>
                        {[...NewArrivalsPageContent, ...NewArrivalsPageContent, ...NewArrivalsPageContent].map((each, idx) => {
                            return (
                                <div key={idx} className='product-grid'>
                                    <ProductCard item={each} />
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewArrivals