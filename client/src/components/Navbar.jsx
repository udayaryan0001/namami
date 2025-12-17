import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { toggleCart, cart } = useCart();

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Customize', path: '/customize' },
        { name: 'Corporate', path: '/corporate' },
    ];

    return (
        <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center">
                        <span className="text-2xl font-bold text-primary">Namami<span className="text-dark">Waters</span></span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors duration-200 ${isActive ? 'text-primary' : 'text-dark hover:text-primary'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button
                            onClick={toggleCart}
                            className="text-dark hover:text-primary transition-colors relative"
                        >
                            <ShoppingCart size={20} />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                        <Link to="/login" className="px-4 py-2 rounded-full bg-primary text-white font-medium hover:bg-sky-600 transition-all shadow-lg shadow-sky-200 text-sm">
                            Login
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleCart}
                            className="text-dark hover:text-primary transition-colors relative"
                        >
                            <ShoppingCart size={20} />
                            {cart.length > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                                    {cart.length}
                                </span>
                            )}
                        </button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-dark hover:text-primary focus:outline-none">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'text-primary bg-sky-50' : 'text-dark hover:text-primary hover:bg-gray-50'
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="mt-4 border-t border-gray-100 pt-4 flex flex-col space-y-2 px-3">
                            <Link to="/login" onClick={() => setIsOpen(false)} className="w-full text-center py-2 rounded-lg bg-primary text-white font-medium">Login</Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
