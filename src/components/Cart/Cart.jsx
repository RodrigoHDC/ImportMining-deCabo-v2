import { addDoc, getFirestore, collection } from 'firebase/firestore';
import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/itemCart";

const Cart = () => {
    const {cart, totalPrice} = useCartContext();

    const order = {
        buyer: {
            name: 'Rodrigo',
            email: 'rodrigodecabo@hotmail.com',
            phone: '1165893452',
            address: 'Av. Beiro 2369'
        },
        items: cart.map(product => ({ id: product.id, title: product.title, price: product.price, quantity: product.quantity })),
        total: totalPrice(),
        date: '01/08/2022',
    }

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection (db, 'orders');
        addDoc(ordersCollection, order)
        .then(({ id }) => console.log(id));
    }

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
                <button onClick={handleClick}>Emitir Orden de Compra!</button>
                </>
             )
        }
 
export default Cart;