import React from "react";
import { Link } from "react-router-dom";
import About from "../About/About";
import Contact from "../Contact/Contact";
import Navbar from "../Navbar/Navbar";
import './home.css';

export default function Home() {
    return (
        <div>
            <div className="over">
                <div className="overlay">
                    <header>
                    <Navbar />
                    </header>
                    
                    <h1 className="h1">Over 25<hr /></h1>

                    <p className="intro">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae consectetur alias<br /> id quod, incidunt voluptas. Consequatur vitae recusandae, reiciendis necessitatibus<br /> totam sed cupiditate maxime, 
                    corporis blanditiis hic soluta vel! Repellat!</p>

                    <button className="home-btn">
                        <Link to="/products" style={{textDecoration: 'none', color: 'white'}}>Get started</Link>
                    </button>
                </div>
            </div>
            
        <About />

        <footer>
            <Contact />
        </footer>
        </div>

    );
}