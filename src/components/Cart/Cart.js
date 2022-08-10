import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import ItemCart from '../ItemCart/itemCart';
import '../Cart/cart.css';
import { addDoc, getFirestore, collection } from 'firebase/firestore';
import Swal from 'sweetalert2'


const Cart = () => {
  const {cart, totalPrice } = useCartContext();

  const orden = {
    buyer: {
      name: 'Marcio',
      email: 'dubokovic7@gmail.com',
      phone: '777777',
      adress: 'sarasasarasa'
    },
    items: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {

    const db = getFirestore();
    const ordersCollection = collection(db, 'ordenes');
    addDoc(ordersCollection, orden).then(({ id }) => console.log(id))
    Swal.fire(
      'Muchas gracias por tu compra, pronto vas a recibir tus productos junto con tu factura!'
    )
  }
  
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
      <h1><button className='fincom' onClick={handleClick}>Finalizar Compra.</button></h1>
    </>
  )
}

export default Cart;