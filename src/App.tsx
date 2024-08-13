import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import { Route, Router, Routes } from 'react-router-dom';
import { AllProducts, BestSellerPage, DailyDealsPage, FaceCarePage, NewArrivals } from './pages';
import { Footer, Navbar, UpperNavbar } from './components';
import MoreToExplorePage from './pages/moreToExplorePage/MoreToExplorePage';

function App() {
  return (
    <div className="App">
      <UpperNavbar />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/daily-deals" element={<DailyDealsPage />} />
        <Route path="/best-sellers" element={<BestSellerPage />} />
        <Route path="/more-to-explore" element={<MoreToExplorePage />} />
        <Route path="/face-care" element={<FaceCarePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
