import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/home/Home';
import { Route, Router, Routes } from 'react-router-dom';
import { AllProducts, NewArrivals } from './pages';
import { Footer, Navbar, UpperNavbar } from './components';

function App() {
  return (
    <div className="App">
      <UpperNavbar />
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path="/new-arrivals" element={<NewArrivals />} />
        <Route path="/all-products" element={<AllProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
