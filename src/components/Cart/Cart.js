import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/itemCart';

const Cart = () => {
  const {cart, totalPrice } = useCartContext();
  
  if (cart.lenght=== 0){
    return (
      <>
        <p>Tu carrito esta vacio.</p>
        <Link to='/'>Elegi tu producto!</Link>
      </>
    )
  }
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>) 
      }
      <p>
          Total: {totalPrice()}
      </p>
    </>
  )
}

export default Cart;