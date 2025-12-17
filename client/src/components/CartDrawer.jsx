import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartDrawer = () => {
    const { isCartOpen, setIsCartOpen, cart, removeFromCart, updateQuantity, total } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsCartOpen(false)}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
                    >
                        <div className="flex items-center justify-between p-6 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-dark flex items-center">
                                <ShoppingBag className="mr-2" size={24} />
                                Your Cart <span className="ml-2 text-sm font-normal text-gray-500">({cart.length} items)</span>
                            </h2>
                            <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                                <X size={24} className="text-gray-500" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {cart.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                                    <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                                        <ShoppingBag size={40} className="text-gray-400" />
                                    </div>
                                    <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                                    <p className="text-gray-500 max-w-xs">Looks like you haven't added any custom bottles yet.</p>
                                    <button onClick={() => setIsCartOpen(false)} className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-sky-600 transition-colors">
                                        Start Shopping
                                    </button>
                                </div>
                            ) : (
                                cart.map((item, index) => (
                                    <motion.div
                                        layout
                                        key={`${item.id}-${index}`}
                                        className="flex gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100"
                                    >
                                        <div className="w-20 h-24 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-100">
                                            {item.image ? (
                                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                            ) : (
                                                <div className="w-full h-full" style={{ backgroundColor: item.options?.color || '#eee' }}></div>
                                            )}
                                        </div>

                                        <div className="flex-1">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-bold text-dark">{item.name}</h3>
                                                <button
                                                    onClick={() => removeFromCart(item.id, item.options)}
                                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>

                                            {item.options && (
                                                <div className="text-xs text-gray-500 mt-1 space-y-1">
                                                    {item.options.color && <div className="flex items-center gap-1">Color: <div className="w-3 h-3 rounded-full border border-gray-300" style={{ backgroundColor: item.options.color }}></div></div>}
                                                    {item.options.text && <div>Text: "{item.options.text}"</div>}
                                                    {item.options.size && <div>Size: {item.options.size}</div>}
                                                </div>
                                            )}

                                            <div className="flex justify-between items-center mt-3">
                                                <div className="flex items-center space-x-2 bg-white rounded-lg border border-gray-200 px-2 py-1">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.options, item.quantity - 1)}
                                                        className="p-1 hover:text-primary disabled:opacity-50"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.options, item.quantity + 1)}
                                                        className="p-1 hover:text-primary"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <div className="font-bold text-primary">${(parseFloat(item.price) * item.quantity).toFixed(2)}</div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="border-t border-gray-100 p-6 bg-gray-50">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-600">Subtotal</span>
                                    <span className="text-xl font-bold text-dark">${total.toFixed(2)}</span>
                                </div>
                                <button className="w-full py-4 bg-dark text-white font-bold rounded-xl hover:bg-gray-800 transition-colors shadow-lg shadow-gray-200 mb-3">
                                    Checkout
                                </button>
                                <button onClick={() => setIsCartOpen(false)} className="w-full py-3 bg-white text-dark font-medium border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                                    Continue Shopping
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
