
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroBanner = () => {
    return (
        <div className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-dark">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://media.istockphoto.com/id/454273399/photo/pouring-water-from-bottle-into-glass-on-blue-background.jpg?s=612x612&w=0&k=20&c=0SLUO53_48thzcpFVLrEiF9Yb8jTbKmO0acUpWsC3yg="
                    alt="Water Background"
                    className="w-full h-full object-cover"
                />
                {/* Dark Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-primary/30 mix-blend-multiply"></div>
            </div>

            {/* Hero Content */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center z-10">
                <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold font-sans text-white leading-tight">
                            Hydrate Your Brand with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary animate-pulse">Premium Custom Bottles</span>
                        </h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-gray-300 md:max-w-lg mx-auto md:mx-0"
                    >
                        Design eco-friendly, stylish water bottles that speak for your brand.
                        Perfect for corporate gifts, events, and personal style.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
                    >
                        <Link to="/customize" className="group flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-full hover:bg-sky-600 transition-all shadow-lg shadow-sky-900/50">
                            Start Customizing
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </Link>
                        <Link to="/products" className="flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-white/10 backdrop-blur-sm border border-white/20 rounded-full hover:bg-white/20 transition-all">
                            View Catalog
                        </Link>
                    </motion.div>
                </div>

                {/* Hero Image / 3D Element Placeholder */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-full md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
                >
                    <motion.img
                        src="https://images.unsplash.com/photo-1602143407151-011141920038?auto=format&fit=crop&q=80&w=800"
                        alt="Premium Bottle"
                        className="relative w-auto h-[450px] md:h-[600px] object-contain drop-shadow-2xl z-10 masked-image"
                        animate={{ y: [0, -30, 0], rotate: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    />

                    {/* Floating Elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute top-20 right-10 md:right-20 w-24 h-24 bg-white/10 backdrop-blur-xl rounded-2xl flex flex-col items-center justify-center shadow-xl border border-white/20 text-white z-20"
                    >
                        <span className="text-2xl font-bold">24h</span>
                        <span className="text-xs uppercase tracking-wider">Cold</span>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 25, 0] }}
                        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-40 left-0 md:-left-4 w-20 h-20 bg-secondary/80 backdrop-blur-xl rounded-full flex flex-col items-center justify-center shadow-xl border border-white/20 text-white z-20"
                    >
                        <span className="text-xl font-bold">100%</span>
                        <span className="text-[10px] uppercase tracking-wider">Recycled</span>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroBanner;
