import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from '../products/Products';
import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';

function Page() {
    return (
        <div>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
        </div>
    )
}

export default Page
