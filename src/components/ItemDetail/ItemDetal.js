import './itemdetail.css';
import React, {useState} from "react";
import ItemCounter from "../ItemCount/item";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../context/CartContext";

export const ItemDetail = ({data}) => {
    const [irAlCarrito, setIrAlCarrito] = useState(false)
    const {addProduct} = useCartContext();

    const onAdd = (quantity) => {
        setIrAlCarrito(true);
        addProduct(data, quantity);
    }
    return (
        <div className="container">
        <div className="detail">
            <img className="detail__image" src={data.image} alt="" />
            <div className="content">
                <h1>{data.title}</h1>
                {
                    irAlCarrito 
                    ? <Link to='/cart'>Terminar compra</Link> 
                    : <ItemCounter initial={1} stock={5} onAdd={onAdd} />
                }
            </div>
        </div>
    </div>
    );
}

export default ItemDetail;