import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/itemCart";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    if (cart.length === 0) {
        return (
            <>
                <p>No hay elementos en el carrito!</p>
                <Link to="/">Hacer Compras!</Link>
            </>
        );
    }
            return ( 
                <>
                {
                    cart.map(item => <ItemCart key={item.id} item={item} />)
                }
                <p>
                    total: {totalPrice()}
                </p>
                </>
             )
        }
 
export default Cart;