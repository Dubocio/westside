import '../ItemCart/style.css';
import React from 'react';
import { useCartContext } from '../../context/CartContext';

const ItemCart = ({ product }) => {
const { removeProduct} = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.image} alt={product.title} />
            <div>
                <p>Titulo: {product.title}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Precio u.: ARS${product.price}</p>
                <p>Subtotal: ARS${product.quantity + product.price}</p>
                <button onClick={()=>removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart;