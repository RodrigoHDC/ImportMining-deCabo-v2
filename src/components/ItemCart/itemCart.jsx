import React from "react";
import { useCartContext } from "../../context/CartContext";

const ItemCart = ({ item }) => {
    const { removeProduct } = useCartContext();

    return (
        <div>
            <img src={item.img} alt={item.title} width="10%" />
            <p>Título: {item.title}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio U.: {item.price}</p>
            <p>Sbutotal: ${item.quantity * item.price}</p>
            <button onClick={() => removeProduct(item.id)}>Eliminar</button>
        </div>
    )
};

export default ItemCart;