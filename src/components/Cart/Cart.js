import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/itemCart';
import '../Cart/cart.css';


const Cart = () => {
  const {cart, totalPrice } = useCartContext();
  
  if (cart.length === 0){
    return (
      <>
        <h1>Tu carrito esta vacio.</h1>
        <Link to='/'><h1>Elegi tus productos aca!</h1></Link>
      </>
    );
  }
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>) 
      }
      <h1 id='#total'>
          Total: $ {totalPrice()} Ars.
      </h1>
    </>
  )
}

export default Cart;