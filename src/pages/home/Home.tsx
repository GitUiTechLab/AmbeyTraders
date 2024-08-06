import React from 'react'
import { AllProducts, HeroSection, Navbar, UpperNavbar, NewArrivals, HomeHeroSection, HomeDailyDeals, HomeWhatsappHeroSection, MoreToExplore, RecentlyViewed, Testimonials, BestSeller } from '../../components'
import HowToShop from '../../components/howToShop/HowToShop'


const Home = () => {
    return (
        <div>
            <HeroSection />
            <HowToShop />
            <AllProducts />
            <NewArrivals />
            <HomeHeroSection />
            <HomeDailyDeals />
            <BestSeller />
            <HomeWhatsappHeroSection />
            <MoreToExplore />
            <RecentlyViewed />
            <Testimonials />
        </div>
    )
}

export default Home