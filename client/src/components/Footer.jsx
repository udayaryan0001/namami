import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-primary">NamamiWaters</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Premium custom water bottle manufacturing for brands, events, and individuals. Eco-friendly, durable, and stylish solutions.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
                            <li><Link to="/customize" className="hover:text-primary transition-colors">Customization</Link></li>
                            <li><Link to="/corporate" className="hover:text-primary transition-colors">Corporate Orders</Link></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
                            <li><Link to="/returns" className="hover:text-primary transition-colors">Returns & Refunds</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="mt-0.5 text-primary" />
                                <span>123 Manufacturing Hub,<br />Industrial Area, City - 400001</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary" />
                                <span>hello@namamiwaters.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Namami Waters. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
