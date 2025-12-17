import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + (parseFloat(item.price) * item.quantity), 0);
        setTotal(newTotal);
    }, [cart]);

    const addToCart = (product) => {
        setCart(prev => {
            const existing = prev.find(item => item.id === product.id && JSON.stringify(item.options) === JSON.stringify(product.options));
            if (existing) {
                return prev.map(item =>
                    item === existing ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (itemId, options) => {
        setCart(prev => prev.filter(item => !(item.id === itemId && JSON.stringify(item.options) === JSON.stringify(options))));
    };

    const updateQuantity = (itemId, options, newQuantity) => {
        if (newQuantity < 1) return;
        setCart(prev => prev.map(item =>
            (item.id === itemId && JSON.stringify(item.options) === JSON.stringify(options))
                ? { ...item, quantity: newQuantity }
                : item
        ));
    };

    const toggleCart = () => setIsCartOpen(!isCartOpen);

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, isCartOpen, setIsCartOpen, toggleCart, total }}>
            {children}
        </CartContext.Provider>
    );
};
