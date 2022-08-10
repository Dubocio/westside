import React, {useState, useEffect} from "react";
import { Counter, LetraContador } from "./Item.elements";



export const ItemCounter = ({initial, stock, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const decerase = () => {
        setCount(count - 1);
    }
    const increase = () => {
        setCount(count + 1);
    }
    useEffect(() =>{
        setCount(parseInt(initial));
    }, [initial])
    return (
        <Counter>
        <div className="counter">
        <LetraContador>
            <button className="contador" disabled={count <= 1} onClick={decerase}>-</button>
            
            <span>{count}</span>
            <button className="contador" disabled={count >= stock} onClick={increase}>+</button>
            <div>
                <button className="contador" disabled={stock <=0} onClick={() => onAdd(count)}>Agregar al Carrito.</button>
            </div>
            </LetraContador>
        </div>
        </Counter>
    )
}

export default ItemCounter;