import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Type, PaintBucket, Scaling, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Customize = () => {
    const { addToCart } = useCart();

    // State Options
    const [color, setColor] = useState('#0EA5E9');
    const [text, setText] = useState('Your Text');
    const [font, setFont] = useState('sans-serif');
    const [size, setSize] = useState('500ml');

    // Data Configs
    const colors = ['#0EA5E9', '#22C55E', '#EF4444', '#F59E0B', '#6366F1', '#EC4899', '#0F172A'];

    const fonts = [
        { name: 'Modern', value: 'sans-serif' },
        { name: 'Serif', value: 'serif' },
        { name: 'Mono', value: 'monospace' },
        { name: 'Cursive', value: 'cursive' }
    ];

    const sizes = [
        { label: '500ml', price: 25 },
        { label: '750ml', price: 30 },
        { label: '1000ml', price: 35 }
    ];

    // Calculations
    const basePrice = sizes.find(s => s.label === size).price;
    const customizationCost = 5.00;
    const totalPrice = basePrice + customizationCost;

    const handleAddToCart = () => {
        addToCart({
            id: Date.now(), // Generate a temporary unique ID
            name: `Custom ${size} Bottle`,
            price: totalPrice,
            options: { color, text, font, size },
            image: null // We don't have a generated image URL, visual will be CSS based in cart
        });
    };

    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-bold text-dark mb-4">Design Your Bottle</h1>
                    <p className="text-gray-600">Create a unique bottle that represents you.</p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Preview Section */}
                    <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-xl p-8 h-[600px] flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

                        {/* Simulated Bottle */}
                        <motion.div
                            layout
                            className="relative rounded-[3rem] shadow-2xl flex items-center justify-center border-4 border-gray-200 transition-all duration-300"
                            style={{
                                backgroundColor: color,
                                width: size === '500ml' ? '160px' : size === '750ml' ? '180px' : '200px',
                                height: size === '500ml' ? '400px' : size === '750ml' ? '450px' : '500px',
                            }}
                        >
                            {/* Bottle Neck */}
                            <div className="absolute -top-12 w-20 h-16 bg-gray-300 rounded-t-lg border-2 border-gray-400"></div>
                            <div className="absolute -top-14 w-24 h-4 bg-gray-800 rounded-full"></div>

                            {/* Highlight/Gloss */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent rounded-[2.8rem] pointer-events-none"></div>

                            {/* User Text */}
                            <div className="z-10 text-center break-words px-4 transform rotate-[-90deg]">
                                <h2
                                    className="text-4xl font-bold text-white tracking-wider opacity-90 drop-shadow-md"
                                    style={{ fontFamily: font }}
                                >
                                    {text}
                                </h2>
                            </div>
                        </motion.div>
                    </div>

                    {/* Controls Section */}
                    <div className="w-full lg:w-1/3 bg-white rounded-3xl shadow-lg p-8">
                        <h3 className="text-xl font-bold text-dark mb-6">Customization Options</h3>

                        <div className="space-y-6">
                            {/* Color Picker */}
                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                                    <PaintBucket size={16} className="mr-2" /> Bottle Color
                                </label>
                                <div className="flex flex-wrap gap-3">
                                    {colors.map((c) => (
                                        <button
                                            key={c}
                                            onClick={() => setColor(c)}
                                            className={`w-10 h-10 rounded-full border-2 transition-transform hover:scale-110 ${color === c ? 'border-gray-900 scale-110' : 'border-transparent'}`}
                                            style={{ backgroundColor: c }}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Size Selector */}
                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                                    <Scaling size={16} className="mr-2" /> Size
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {sizes.map((s) => (
                                        <button
                                            key={s.label}
                                            onClick={() => setSize(s.label)}
                                            className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${size === s.label
                                                    ? 'border-primary bg-sky-50 text-primary'
                                                    : 'border-gray-200 hover:border-gray-300 text-gray-600'
                                                }`}
                                        >
                                            {s.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Text Input */}
                            <div>
                                <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                                    <Type size={16} className="mr-2" /> Add Text
                                </label>
                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        value={text}
                                        onChange={(e) => setText(e.target.value)}
                                        maxLength={20}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                        placeholder="Enter text..."
                                    />
                                    <select
                                        value={font}
                                        onChange={(e) => setFont(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                                    >
                                        {fonts.map(f => (
                                            <option key={f.value} value={f.value}>{f.name} Font</option>
                                        ))}
                                    </select>
                                </div>
                            </div>

                            {/* Pricing Footer */}
                            <div className="pt-6 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-2 text-sm text-gray-500">
                                    <span>Base Price ({size})</span>
                                    <span className="font-medium">${basePrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                                    <span>Customization</span>
                                    <span className="font-medium">+${customizationCost.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-2xl font-bold text-dark mb-6">
                                    <span>Total</span>
                                    <span>${totalPrice.toFixed(2)}</span>
                                </div>
                                <button
                                    onClick={handleAddToCart}
                                    className="w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-sky-600 transition-colors shadow-lg shadow-sky-200 flex items-center justify-center"
                                >
                                    <Plus size={20} className="mr-2" />
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customize;
