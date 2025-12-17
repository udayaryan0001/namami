
import React from 'react';
import { motion } from 'framer-motion';

const products = [
    { id: 1, name: 'Eco Slim 500ml', price: '$25', image: 'https://images.unsplash.com/photo-1602143407151-011141920038?auto=format&fit=crop&q=80&w=800', category: 'Steel' },
    { id: 2, name: 'Thermal Pro 1L', price: '$45', image: 'https://images.unsplash.com/photo-1544239334-9c7590d0b0b8?auto=format&fit=crop&q=80&w=800', category: 'Thermal' },
    { id: 3, name: 'Sport Flex 750ml', price: '$30', image: 'https://images.unsplash.com/photo-1579737197177-d64c23f4f107?auto=format&fit=crop&q=80&w=800', category: 'Plastic' },
    { id: 4, name: 'Glass Pure 600ml', price: '$35', image: 'https://images.unsplash.com/photo-1627993077673-3e1927e55648?auto=format&fit=crop&q=80&w=800', category: 'Glass' },
    { id: 5, name: 'Copper Health', price: '$50', image: 'https://images.unsplash.com/photo-1605658189675-9aecc94c34a1?auto=format&fit=crop&q=80&w=800', category: 'Copper' },
    { id: 6, name: 'Kids Mini 300ml', price: '$20', image: 'https://images.unsplash.com/photo-1647891938250-954addeb9c51?auto=format&fit=crop&q=80&w=800', category: 'Kids' },
    { id: 7, name: 'Urban Matte', price: '$40', image: 'https://images.unsplash.com/photo-1613233816666-ac248231c629?auto=format&fit=crop&q=80&w=800', category: 'Steel' },
    { id: 8, name: 'Active Hydrate', price: '$28', image: 'https://images.unsplash.com/photo-1606296715694-b251817c2be5?auto=format&fit=crop&q=80&w=800', category: 'Sport' },
    { id: 9, name: 'Premium Gold', price: '$60', image: 'https://images.unsplash.com/photo-1622359666838-8e6f165e347e?auto=format&fit=crop&q=80&w=800', category: 'Luxury' },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 }
};

const Products = () => {
    return (
        <div className="bg-white min-h-screen pt-10 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl font-bold text-dark mb-4">Our Products</h1>
                    <p className="text-gray-600">Choose from our wide range of premium bottles.</p>
                </motion.div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={item}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 group transition-shadow hover:shadow-xl"
                        >
                            <div className="h-64 overflow-hidden relative bg-gray-100">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-dark shadow-sm">
                                    {product.category}
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-dark mb-2">{product.name}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                                    <button className="px-4 py-2 bg-dark text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default Products;
