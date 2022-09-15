import React from 'react';
import Navbar from '../Navbar/Navbar';
import Items from './ProductItems';
import './products.css';

export default function Products() {
    return(
        <div>
            <div className='products'>
                <div className='overlay'>
                    <header>
                        <Navbar />
                    </header>
                </div>
            </div>
            <Items />
        </div>
    );
}