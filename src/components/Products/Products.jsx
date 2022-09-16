import React from 'react';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Items from './ProductItems';
import './products.css';

export default function Products() {
    return (
        <div>
            <div className='products'>
                <div className='overlay'>
                    <header>
                        <Navbar />
                    </header>
                    <h6 className='item-h6'>Straight into</h6>
                    <h1 className='item-h1'>Style</h1>

                    <p className="item-p">Fashion is the armor to survive the reality of everyday life.</p>
                </div>
            </div>
            <Items />

            <Contact />
        </div>
    );
}