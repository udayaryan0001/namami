import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
                    
                    {/* Brand */}
                    <div className="space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-primary">
                            Shri namami water
                        </h2>
                        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                            Premium custom water bottle manufacturing by Maa narmade beverages LLP. 
                            Eco-friendly, durable, and stylish solutions for brands, events, and individuals.
                        </p>

                        <div className="flex space-x-4 pt-2">
                            <a 
                                href="https://www.instagram.com/shri_namami_water?igsh=MXY2d2NtYndmbmExdQ%3D%3D&utm_source=qr"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-primary transition-colors"
                            >
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    {/*
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="hover:text-primary transition-colors">Our Products</Link></li>
                            <li><Link to="/customize" className="hover:text-primary transition-colors">Customization</Link></li>
                            <li><Link to="/corporate" className="hover:text-primary transition-colors">Corporate Orders</Link></li>
                        </ul>
                    </div>
                    */}

                    {/* Support */}
                    {/*
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-primary transition-colors">FAQs</Link></li>
                            <li><Link to="/shipping" className="hover:text-primary transition-colors">Shipping Policy</Link></li>
                            <li><Link to="/returns" className="hover:text-primary transition-colors">Returns & Refunds</Link></li>
                        </ul>
                    </div>
                    */}

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-base sm:text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm sm:text-base text-gray-400">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="mt-1 text-primary shrink-0" />
                                <span>
                                    Near pushp masala, bardari,<br />
                                    Indore, Madhya Pradesh 453555
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary shrink-0" />
                                <a href="tel:+917722822354" className="hover:text-white transition-colors">
                                    +91 77228 22354
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary shrink-0" />
                                <a href="mailto:namamiwater4@gmail.com" className="hover:text-white transition-colors">
                                    namamiwater4@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-500 gap-4">
                    <p className="text-center md:text-left">
                        &copy; {new Date().getFullYear()} Maa narmade beverages LLP. All rights reserved.
                    </p>

                    <div className="flex space-x-6">
                        <Link to="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link to="/terms" className="hover:text-white transition-colors">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;