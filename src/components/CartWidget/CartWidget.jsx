import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
    const {totalProducts} = useCartContext();

    return ( 
        <>
        <ion-icon name="cart"></ion-icon>
        <span>{totalProducts() || ''}</span>
        </>  
    );
}
 
export default CartWidget;