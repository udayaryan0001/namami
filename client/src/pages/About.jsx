import React from 'react';
import { motion } from 'framer-motion';
import { Building2, MapPin, Phone, Mail, Award, Users, Droplets, Heart } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
    const companyInfo = {
        name: "Maa narmade beverages LLP",
        cin: "ACS-9676",
        brand: "Shri namami water",
        address: "Near pushp masala, bardari, Indore, Madhya Pradesh 453555",
        phone: "+91 77228 22354",
        email: "namamiwater4@gmail.com"
    };

    const values = [
        {
            icon: <Droplets size={40} />,
            title: "Purity First",
            description: "We ensure the highest standards of water quality and purity in every bottle we manufacture."
        },
        {
            icon: <Heart size={40} />,
            title: "Eco-Friendly",
            description: "Committed to sustainability with reusable bottles that reduce plastic waste and protect our planet."
        },
        {
            icon: <Award size={40} />,
            title: "Premium Quality",
            description: "Crafted with precision using durable materials like steel, glass, and copper that last a lifetime."
        },
        {
            icon: <Users size={40} />,
            title: "Customer Focused",
            description: "Dedicated to providing personalized solutions for individuals, brands, and corporate clients."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary to-sky-600 py-20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center text-white">
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
                            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                                Crafting Premium Water Bottles with Passion and Precision
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Company Story */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <ScrollReveal>
                            <div>
                                <h2 className="text-4xl font-bold text-dark mb-6">Our Story</h2>
                                <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                                    <p>
                                        At <span className="font-semibold text-primary">{companyInfo.brand}</span>, we believe hydration should be sustainable,
                                        stylish, and personal. Our journey began with a simple mission: to replace single-use plastic bottles
                                        with reusable works of art.
                                    </p>
                                    <p>
                                        We manufacture high-quality steel, glass, and copper bottles that are designed to last a lifetime.
                                        Whether you are an individual looking for a daily companion or a corporation seeking meaningful gifts,
                                        we have the perfect solution for you.
                                    </p>
                                    <p>
                                        Based in the heart of Madhya Pradesh, we combine traditional values with modern manufacturing
                                        techniques to deliver premium products that exceed expectations.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-2xl shadow-lg border border-sky-100">
                                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                                    <Building2 className="text-primary" size={28} />
                                    Company Information
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <Building2 className="text-primary mt-1" size={20} />
                                        <div>
                                            <p className="font-semibold text-dark">Company Name</p>
                                            <p className="text-gray-600">{companyInfo.name}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Award className="text-primary mt-1" size={20} />
                                        <div>
                                            <p className="font-semibold text-dark">Brand Name</p>
                                            <p className="text-gray-600">{companyInfo.brand}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Award className="text-primary mt-1" size={20} />
                                        <div>
                                            <p className="font-semibold text-dark">CIN</p>
                                            <p className="text-gray-600">{companyInfo.cin}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <MapPin className="text-primary mt-1" size={20} />
                                        <div>
                                            <p className="font-semibold text-dark">Address</p>
                                            <p className="text-gray-600">{companyInfo.address}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="text-primary mt-1" size={20} />
                                        <div>
                                            <p className="font-semibold text-dark">Phone</p>
                                            <a href={`tel:${companyInfo.phone}`} className="text-primary hover:underline">
                                                {companyInfo.phone}
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail className="text-primary mt-1" size={20} />
                                        <div>
                                            <p className="font-semibold text-dark">Email</p>
                                            <a href={`mailto:${companyInfo.email}`} className="text-primary hover:underline">
                                                {companyInfo.email}
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-dark mb-4">Our Core Values</h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                The principles that guide us in everything we do
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-center"
                                >
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-sky-50 text-primary mb-6">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-3">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <ScrollReveal>
                            <div className="bg-gradient-to-br from-primary to-sky-600 p-10 rounded-2xl text-white shadow-xl">
                                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    To provide sustainable, high-quality hydration solutions that empower individuals and
                                    businesses to make environmentally conscious choices while enjoying premium products
                                    that reflect their unique style and values.
                                </p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="bg-gradient-to-br from-dark to-gray-800 p-10 rounded-2xl text-white shadow-xl">
                                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                                <p className="text-lg text-white/90 leading-relaxed">
                                    To become India's most trusted brand for custom water bottles, recognized for our
                                    commitment to quality, innovation, and environmental sustainability. We aim to inspire
                                    a movement towards reusable solutions that benefit both people and the planet.
                                </p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <ScrollReveal>
                <section className="py-20 bg-primary relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Work Together</h2>
                        <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                            Whether you're looking for custom bottles for your business or a personal hydration companion,
                            we're here to help.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`tel:${companyInfo.phone}`}
                                className="px-10 py-4 bg-white text-primary text-lg font-bold rounded-full hover:bg-gray-100 transition-colors shadow-2xl"
                            >
                                Call Us Now
                            </a>
                            <a
                                href={`mailto:${companyInfo.email}`}
                                className="px-10 py-4 bg-dark text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-colors shadow-2xl"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </div>
    );
};

export default About;
