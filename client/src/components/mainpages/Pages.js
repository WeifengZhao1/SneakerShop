import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from '../mainpages/products/Products';
import Login from './auth/Login';
import Register from './auth/Register';
import Cart from './cart/Cart';
import NotFound from './utils/not_found/NotFound';
import DetailProduct from './detailProduct/DetailProduct'

function Page() {
    return (
        <div>
                <Routes>
                    <Route path="/" element={<Products />} />
                    <Route path="/detail/:id" element={<DetailProduct />} />
                
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />

                    <Route path="/*" element={<NotFound />} />
                </Routes>
        </div>
    )
}

export default Page
