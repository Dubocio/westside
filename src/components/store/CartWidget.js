import { FaStore } from "react-icons/fa";
import React from "react";
import { useCartContext } from "../../context/CartContext";

const  CartWidget= () => {
// const {totalProducts} = useCartContext();
    return (
         <FaStore/>
        // <span>{totalProducts() || ''}</span>
    );
};
export default CartWidget;