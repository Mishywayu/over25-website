import React from "react";
import './navbar.css';

export default function Navbar() {
    return(
        <div>
            <nav>
                <label className="logo">logo</label>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Products</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </div>
    );
}