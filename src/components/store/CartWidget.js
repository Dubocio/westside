
import React from "react";
import { useCartContext } from "../../context/CartContext";

const  CartWidget= () => {
const {totalProducts} = useCartContext();
    return (
         <>
            <span>{totalProducts() || ''}</span>
        </>
    );
};
export default CartWidget;