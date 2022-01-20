import React, { useState, useContext } from 'react'
import { GlobalState, GloboalState } from '../../GlobalState'
import Menu from './icon/menu.svg'
import Cart from './icon/cart.svg'
import Exit from './icon/exit.svg'
import {Link} from 'react-router-dom'

function Header() {
    const value = useContext(GloboalState)

    return (
        <div>
            <header>

                <div className="menu">
                    <img src={Menu} alt="" width="30" />
                </div>

                <div className="logo">
                    <h1>
                        <Link to="/"> SneakerShop </Link>
                    </h1>
                </div>

                <ul>
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/login">Login ✥ Register</Link></li>

                    <li>
                        <img src={Exit} alt="" width="30" className="menu" />
                    </li>
                </ul>

                <div className="cart-icon">
                    <span>0</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>

            </header>
        </div>
    )
}

export default Header
