// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import About from './pages/About';
import User from './pages/User';

import Contact from './pages/Contact';
import Categories from './pages/Categories';
import { useState } from 'react';
import Checkout from './pages/Checkout';
export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 dark:bg-gray-900 dark:text-white ">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu searchTerm={searchTerm} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/user" element={<User />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}