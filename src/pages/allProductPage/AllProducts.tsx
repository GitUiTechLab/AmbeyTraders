import React, { useEffect, useState } from 'react'
import AllProductsHeroImage from "../../assets/images/allProducts_hero_image.png";
import { FaChevronRight } from "react-icons/fa";
import { useLocation, Link } from 'react-router-dom';

import "./allProducts.css";
import FilterByCategory from '../../shared/filterByCategory/FilterByCategory';
import { AllProductsContent } from '../../constants';
import ProductCard from '../../shared/productCard/ProductCard';

const categories = [
    { name: 'Products A -Z', value: 'all' },
    { name: 'Face Care', value: 'face-care' },
    { name: 'Body Care', value: 'body-care' },
    { name: 'Baby Care', value: 'baby-care' },
    { name: 'Food Items', value: 'food-items' },
    { name: 'Grocery Items', value: 'grocery-items' },
];

const discounts = [
    { name: '10% and above', value: "10" },
    { name: '20% and above', value: "20" },
    { name: '30% and above', value: "30" },
    { name: '40% and above', value: "40" },
    { name: '50% and above', value: "50" },
    { name: '60% and above', value: "60" },
];

const products = [
    { name: 'Baby Lotion', value: 'baby-lotion' },
    { name: 'Chocolates', value: 'chocolates' },
    { name: 'Deodorants', value: 'deodorants' },
    { name: 'Detergents', value: 'detergents' },
    { name: 'DYE', value: 'dye' },
    { name: 'Energy Drinks', value: 'energy-drinks' },
    { name: 'Face Creams', value: 'face-creams' },
    { name: 'Facewash', value: 'facewash' },
    { name: 'Hair Oils', value: 'hair-oils' },
    { name: 'Health & Nutrition', value: 'health-nutrition' },
    { name: 'Mosquito Repellent', value: 'mosquito-repellent' },
    { name: 'Powders', value: 'powders' },
    { name: 'Room Sprays', value: 'room-sprays' },
    { name: 'Scrubs', value: 'scrubs' },
    { name: 'Shampoo', value: 'shampoo' },
    { name: 'Shaving Product', value: 'shaving-product' },
    { name: 'Soaps', value: 'soaps' },
    { name: 'Tea & Coffee', value: 'tea-coffee' },
    { name: 'Toothbrush', value: 'toothbrush' },
    { name: 'Toothpaste', value: 'toothpaste' },
];

const AllProducts = () => {
    const location = useLocation();
    const currentPath = location.pathname.split('/').filter(x => x);
    const [filterByCategory, setFilterByCategory] = useState(null);
    const [filterByDiscount, setFilterByDiscount] = useState<string | null>(null);
    const [filteredByProduct, setFilteredByProduct] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState<any>(AllProductsContent);
    const [filteredByDiscountProducts, setFilteredByDiscountProducts] = useState<any>(AllProductsContent);


    const handleFilteredByCategory = (event: any) => {
        setFilterByCategory(event.target.value);
    }

    const handleFilteredByDiscount = (event: any) => {
        setFilterByDiscount(event.target.value);
    }

    const handleFilteredByProduct = (event: any) => {
        setFilteredByProduct(event.target.value);
    }



    useEffect(() => {
        if (filterByCategory !== null) {
            const filteredProducts = AllProductsContent.filter(product => product.category === filterByCategory);
            setFilteredProducts(filteredProducts)
        }

    }, [filterByCategory])

    useEffect(() => {
        if (filterByCategory === "all") {
            setFilteredProducts(AllProductsContent);
        }

    }, [filterByCategory])

    useEffect(() => {
        if (filterByDiscount !== null) {
            const filteredProducts = AllProductsContent.filter(product => (product.discount ?? 0) >= Number(filterByDiscount));
            setFilteredProducts(filteredProducts);
        }
    }, [filterByDiscount])

    useEffect(() => {
        if (filteredByProduct !== null) {
            const filteredProducts = AllProductsContent.filter(product => product.subCategory === filteredByProduct);
            setFilteredProducts(filteredProducts);
        }
    }, [filteredByProduct])

    console.log(filterByDiscount);

    console.log(filterByCategory);
    return (
        <div className='all-products-page'>
            <div className='all-product-hero-container'>
                <img src={AllProductsHeroImage} width={1440} height={411} alt="hero-image" />
            </div>
            <div className='all-products-link-pagination'>
                <nav>
                    <ol className="breadcrumb">
                        <li>
                            <Link to="/" className='text-buttonBgColor text-[16px] hover:underline"'>Home</Link>
                        </li>
                        {currentPath.map((value, index) => {
                            const to = `/${currentPath.slice(0, index + 1).join('/')}`;
                            return (
                                <li key={to} className="flex items-center">
                                    <span className="mx-2"><FaChevronRight /></span>
                                    <Link to={to} className="text-breadCrumbsTextColor text-[16px] hover:underline">
                                        {value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ')}
                                    </Link>
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
            <div className='all-products-container'>
                <div className='all-products-filter'>
                    <FilterByCategory headerName={"Filter by Category"} categories={categories} handleChange={handleFilteredByCategory} selectedCategory={filterByCategory} />
                    <FilterByCategory headerName='Discount Range' categories={discounts} handleChange={handleFilteredByDiscount} selectedCategory={filterByDiscount} />
                    <FilterByCategory headerName='Filter by Product' categories={products} handleChange={handleFilteredByProduct} selectedCategory={filteredByProduct} />
                </div>
                <div className='all-products-display'>
                    <div className='header'>A-Z Products</div>
                    <div className='all-products-grid '>
                        {filteredProducts.map((each: any, idx: number) => {
                            return (
                                <div key={idx} className='product-grid'>
                                    <ProductCard item={each} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllProducts