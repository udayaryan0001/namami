import React from 'react';
import HeroBanner from '../components/HeroBanner';
import { ShieldCheck, Truck, PenTool, LayoutTemplate, Star, RefreshCw, Palette, Box } from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
    const features = [
        { icon: <PenTool size={32} />, title: "Custom Design", desc: "Upload your logo and create unique designs." },
        { icon: <ShieldCheck size={32} />, title: "Premium Quality", desc: "Durable, eco-friendly materials." },
        { icon: <Truck size={32} />, title: "Fast Shipping", desc: "Reliable delivery for bulk and single orders." },
        { icon: <LayoutTemplate size={32} />, title: "Bulk Orders", desc: "Special pricing for corporate needs." }
    ];

    const steps = [
        { icon: <Palette size={40} />, title: "1. Design", desc: "Choose your bottle type, color, and upload your artwork or text in our studio." },
        { icon: <RefreshCw size={40} />, title: "2. Review", desc: "See a live 3D preview of your custom bottle before you place your order." },
        { icon: <Box size={40} />, title: "3. Deliver", desc: "We manufacture with precision and ship directly to your doorstep worldwide." },
    ];

    const testimonials = [
        { name: "Sarah J.", role: "CEO, TechStart", text: "The corporate bottles we ordered were a huge hit! Premium feel and the printing was perfect." },
        { name: "Mike T.", role: "Fitness Coach", text: "I designed my own personal bottle and I take it everywhere. Keeps water cold for hours!" },
        { name: "Emily R.", role: "Event Organizer", text: "Namami Waters delivered 500 custom bottles for our marathon in record time. Exceptional service." },
    ];

    return (
        <div className="bg-white min-h-screen">
            <HeroBanner />

            {/* Features Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Choose Namami Waters?</h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">We combine aesthetic excellence with manufacturing precision to deliver the best custom bottles.</p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sky-50 text-primary mb-6">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-2">{feature.title}</h3>
                                    <p className="text-gray-500">{feature.desc}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How It Works</h2>
                            <p className="text-gray-600">Three simple steps to your perfect bottle.</p>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-gray-100 -z-10"></div>

                        {steps.map((step, index) => (
                            <ScrollReveal key={index} delay={index * 0.2}>
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-white border-4 border-sky-50 text-primary mb-6 shadow-sm">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-2">{step.title}</h3>
                                    <p className="text-gray-500 px-4">{step.desc}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-dark relative overflow-hidden">
                {/* Background Elements */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Trusted by Brands & Individuals</h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <ScrollReveal key={i} delay={i * 0.1}>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
                                >
                                    <div className="flex gap-1 text-yellow-400 mb-4">
                                        {[1, 2, 3, 4, 5].map(star => <Star key={star} size={16} fill="currentColor" />)}
                                    </div>
                                    <p className="text-gray-300 italic mb-6">"{t.text}"</p>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                                            {t.name[0]}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold">{t.name}</h4>
                                            <p className="text-sm text-gray-500">{t.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <ScrollReveal>
                <section className="py-20 bg-primary relative overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Hydrate in Style?</h2>
                        <button className="px-10 py-5 bg-white text-primary text-lg font-bold rounded-full hover:bg-gray-100 transition-colors shadow-2xl">
                            Start Customizing Now
                        </button>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
};

export default Home;
