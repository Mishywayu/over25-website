import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Products from './components/Products/Products';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Hoodie from "./components/Products/Checkout/Hoodie";
import SweatShirt from "./components/Products/Checkout/SweatShirt";
import Delivery from "./components/Products/Checkout/Delivey";
import Ship from "./components/Products/Checkout/Ship";
import PickUp from "./components/Products/Checkout/PickUp";
import Payment from "./components/Products/Checkout/Payment";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="products" element={<Products />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="hoodie" element={<Hoodie />} />
    <Route path="sweatshirt" element={<SweatShirt />} />
    <Route path="delivery" element={<Delivery />} />
    <Route path="ship" element={<Ship />} />
    < Route path="pickup" element={<PickUp />} />
    <Route path="payment" element={<Payment />} />
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
