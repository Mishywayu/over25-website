import { React, useState } from "react";
import './checkout.css';

export default function Counter() {
    const [counter, setCounter] = useState(1);
    //increase counter function
    const increase = () => {
        setCounter(counter => counter + 1);
    };
    //decrease counter function
    const decrease = () => {
        if (counter > 1)
        {
            setCounter(counter => counter - 1);
        }
    };
    
    return (
        <div className="counter">
            <div className="btn__container">
                <button className="control__btn" style={{marginRight: '10px'}} onClick={increase}>+</button>
                <span className="counter__output">{counter}</span>
                <button className="control__btn" style={{marginLeft: '10px'}} onClick={decrease}>-</button>
            </div>
        </div>
    );
}