import { createContext, useState, useContext } from 'react';

export const cartContext = createContext();
export const useCartContext = () => useContext(cartContext);

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState([]);

    const clearCart = () => setCart([])

    const isInCart = (id) => {
        return cart.find(producto => producto.id === id) ? true : false;
    }

    const removeProduct = (id) => setCart(cart.filter(producto => producto.id !== id))

    const addProduct = (item, nuevaquantity) => {

        const { quantity = 0 } = cart.find(prod => prod.id === item.id) || {};
        const newCart = cart.filter(prod => prod.id !== item.id)
        setCart([...newCart, { ...item, quantity: quantity + nuevaquantity }])
    }

    const totalPrice = () => { return cart.reduce((prev, act) => prev + act.quantity * act.precio, 0); }

    const totalProductos = () => cart.reduce((acumulador, productoActual) => acumulador + productoActual.quantity, 0);

    console.log('carrito:', cart)

    return (
        <cartContext.Provider value={{ clearCart, isInCart, removeProduct, addProduct, cart, totalPrice, totalProductos }}>
            {children}
        </cartContext.Provider>
    );
}

export default CartProvider;