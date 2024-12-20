import React from 'react';
import './App.css';

// React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import SingleBlog from './pages/SingleBlog';
import SingleProduct from './pages/SingleProduct';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';

// Authentication Pages
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgotpassword from './pages/Forgotpassword';
import ResetPassword from './pages/ResetPassword';

// Policies
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermAndConditions from './pages/TermAndConditions';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="product" element={<OurStore />} />
          <Route path="product/:id" element={<SingleProduct />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="blog/:id" element={<SingleBlog />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} /> 
          <Route path="forgot-password" element={<Forgotpassword />} /> 
          <Route path="signup" element={<Signup />} /> 
          <Route path="reset-password" element={<ResetPassword />} /> 
          <Route path="privacy-policy" element={<PrivacyPolicy />} /> 
          <Route path="refund-policy" element={<RefundPolicy />} /> 
          <Route path="shipping-policy" element={<ShippingPolicy />} /> 
          <Route path="terms-conditions" element={<TermAndConditions />} /> 
          <Route path="terms-conditions" element={<TermAndConditions />} /> 


        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
