import React from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
    return(
        <div>
            <nav>
                <label className="logo">logo</label>
                <ul>
                    <li>
                        <Link to="/" style={{textDecoration: 'none', color: 'black'}}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" style={{textDecoration: 'none', color: 'black'}}>About</Link>
                    </li>
                    <li>
                        <Link to="/products" style={{textDecoration: 'none', color: 'black'}}>Products</Link>
                    </li>
                    <li>
                        <Link to="/contact" style={{textDecoration: 'none', color: 'black'}}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}