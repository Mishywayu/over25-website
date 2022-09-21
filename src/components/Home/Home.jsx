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

                    <p className="intro">Youtube Content Creators<br/>
                    Ted X Speakers - Parklands 2019<br/>
                    Bake Wards 2018 Winner</p>

                    <button className="home-btn">
                        <Link to="/products" style={{textDecoration: 'none', color: 'white'}}>Get started</Link>
                    </button>
                    {/* <div className="content">
                        <h1 className="h1">
                            Over 25
                            <hr />
                        </h1>
                        <div className="cont">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque libero <br />error sit ad voluptates autem, repudiandae in obcaecati voluptatum odio quam natus suscipit sint debitis <br />nisi aut ullam tempore! Asperiores?</p>
                        </div>
                        <button>Get Started</button> */}
                    {/* </div> */}
                </div>
            </div>
            
        <About />

        <footer>
            <Contact />
        </footer>
        </div>

    );
}