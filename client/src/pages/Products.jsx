import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ShoppingBag, Heart, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

const products = [
    { id: 1, name: 'Eco Slim 500ml', price: 25, image: 'https://images.unsplash.com/photo-1602143407151-011141920038?auto=format&fit=crop&q=80&w=800', category: 'Steel' },
    { id: 2, name: 'Thermal Pro 1L', price: 45, image: 'https://images.unsplash.com/photo-1544239334-9c7590d0b0b8?auto=format&fit=crop&q=80&w=800', category: 'Thermal' },
    { id: 3, name: 'Sport Flex 750ml', price: 30, image: 'https://images.unsplash.com/photo-1579737197177-d64c23f4f107?auto=format&fit=crop&q=80&w=800', category: 'Plastic' },
    { id: 4, name: 'Glass Pure 600ml', price: 35, image: 'https://images.unsplash.com/photo-1627993077673-3e1927e55648?auto=format&fit=crop&q=80&w=800', category: 'Glass' },
    { id: 5, name: 'Copper Health', price: 50, image: 'https://images.unsplash.com/photo-1605658189675-9aecc94c34a1?auto=format&fit=crop&q=80&w=800', category: 'Copper' },
    { id: 6, name: 'Kids Mini 300ml', price: 20, image: 'https://images.unsplash.com/photo-1647891938250-954addeb9c51?auto=format&fit=crop&q=80&w=800', category: 'Kids' },
    { id: 7, name: 'Urban Matte', price: 40, image: 'https://images.unsplash.com/photo-1613233816666-ac248231c629?auto=format&fit=crop&q=80&w=800', category: 'Steel' },
    { id: 8, name: 'Active Hydrate', price: 28, image: 'https://images.unsplash.com/photo-1606296715694-b251817c2be5?auto=format&fit=crop&q=80&w=800', category: 'Sport' },
    { id: 9, name: 'Premium Gold', price: 60, image: 'https://images.unsplash.com/photo-1622359666838-8e6f165e347e?auto=format&fit=crop&q=80&w=800', category: 'Luxury' },
];

const categories = ["All", "Steel", "Thermal", "Plastic", "Glass", "Copper", "Kids", "Sport", "Luxury"];

const Products = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filteredProducts = products.filter(product => {
        const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Minimal Hero */}
            <div className="bg-dark text-white py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-4 font-serif"
                    >
                        Our Collection
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 text-lg max-w-2xl mx-auto"
                    >
                        Discover the perfect companion for your hydration journey. Sustainable, durable, and uniquely yours.
                    </motion.p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                {/* Controls Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
                    {/* Category Scroll (Desktop) */}
                    <div className="hidden md:flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                    ? 'bg-dark text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Filter & Search */}
                    <div className="flex gap-2 w-full md:w-auto">
                        <div className="relative flex-grow md:w-64">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-shadow"
                            />
                        </div>
                        <button
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="md:hidden p-2 bg-dark text-white rounded-lg"
                        >
                            <Filter size={20} />
                        </button>
                    </div>
                </div>

                {/* Mobile Filter Drawer */}
                <AnimatePresence>
                    {isFilterOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden mb-6"
                        >
                            <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-xl">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => { setSelectedCategory(cat); setIsFilterOpen(false); }}
                                        className={`px-3 py-1.5 rounded-full text-xs font-medium border ${selectedCategory === cat
                                            ? 'bg-dark text-white border-dark'
                                            : 'bg-white text-gray-600 border-gray-200'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Products Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                        <button
                            onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                            className="mt-4 text-primary hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};



const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
        >

            {/* Image Area */}
            <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                />

                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex gap-2 justify-center">
                        <button
                            onClick={() => addToCart(product)}
                            className="flex-1 bg-white text-dark py-2 rounded-lg font-medium text-sm hover:bg-dark hover:text-white transition-colors shadow-lg flex items-center justify-center gap-2"
                        >
                            <ShoppingBag size={16} /> Add
                        </button>
                        <button className="p-2 bg-white text-dark rounded-lg hover:text-red-500 transition-colors shadow-lg">
                            <Heart size={18} />
                        </button>
                    </div>
                </div>

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wide text-dark">
                    {product.category}
                </div>
            </div>

            {/* Info Area */}
            <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-dark group-hover:text-primary transition-colors line-clamp-1">{product.name}</h3>
                    <span className="text-lg font-bold text-primary text-gray-900">${product.price}</span>
                </div>
                <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                    Premium quality {product.category.toLowerCase()} bottle designed for everyday use and adventure.
                </p>
            </div>
        </motion.div>
    );
};

export default Products;
