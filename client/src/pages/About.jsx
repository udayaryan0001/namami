import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, MapPin, Phone, Mail, Award, Users, Droplets, Heart, Leaf, Shield, Star, ChevronRight, Globe, Zap, CheckCircle } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

// Animated counter hook
const useCounter = (end, duration = 2000, start = 0) => {
    const [count, setCount] = useState(start);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (!inView) return;
        let startTime;
        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * (end - start) + start));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [inView, end, duration, start]);

    return { count, ref };
};

const StatCard = ({ value, suffix, label, icon }) => {
    const { count, ref } = useCounter(value);
    return (
        <div ref={ref} className="text-center group">
            {icon && (
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sky-100 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </div>
            )}
            <div className="text-5xl font-black text-dark mb-1">
                {count}{suffix}
            </div>
            <p className="text-gray-500 text-sm font-semibold uppercase tracking-widest">{label}</p>
        </div>
    );
};

const About = () => {
    const companyInfo = {
        name: "Maa Narmade Beverages LLP",
        cin: "ACS-9676",
        brand: "Shri Namami Water",
        address: "Near Pushp Masala, Bardari, Indore, Madhya Pradesh 453555",
        phone: "+91 77228 22354",
        email: "namamiwater4@gmail.com"
    };

    const values = [
        {
            icon: <Droplets size={36} />,
            title: "Purity First",
            description: "Every bottle we produce meets rigorous quality checks. We use multi-stage filtration and food-grade materials to ensure that what reaches you is nothing short of pure.",
            color: "from-sky-400 to-cyan-500"
        },
        {
            icon: <Leaf size={36} />,
            title: "Eco-Conscious",
            description: "We're on a mission to eliminate single-use plastic. Our reusable steel, glass, and copper bottles are crafted for longevity — reducing waste, one bottle at a time.",
            color: "from-emerald-400 to-teal-500"
        },
        {
            icon: <Award size={36} />,
            title: "Premium Craftsmanship",
            description: "From design to delivery, precision guides every step. We use only the finest materials and employ skilled artisans to craft bottles that are as beautiful as they are durable.",
            color: "from-amber-400 to-orange-500"
        },
        {
            icon: <Users size={36} />,
            title: "Customer First",
            description: "From solo travelers to Fortune 500 corporations, every client receives personalized attention. Your satisfaction is our most important metric.",
            color: "from-violet-400 to-purple-500"
        }
    ];

    const milestones = [
        { year: "2021", title: "Founded", description: "Maa Narmade Beverages LLP was incorporated with a vision to revolutionize sustainable hydration in India." },
        { year: "2022", title: "First Collection", description: "Launched our flagship Shri Namami Water bottle line — stainless steel, glass, and copper variants for every lifestyle." },
        { year: "2023", title: "Corporate Reach", description: "Partnered with 50+ corporate clients for branded gifting solutions across Madhya Pradesh and beyond." },
        { year: "2024", title: "National Expansion", description: "Extended distribution network pan-India, making premium hydration accessible to customers across the country." },
    ];

    const certifications = [
        { icon: <Shield size={22} />, label: "ISI Certified" },
        { icon: <CheckCircle size={22} />, label: "Food Grade Materials" },
        { icon: <Star size={22} />, label: "ISO Standards" },
        { icon: <Globe size={22} />, label: "Made in India" },
    ];

    const whyUs = [
        "Custom branding & engraving for corporate gifting",
        "Minimum order quantities suited for all business sizes",
        "Bulk pricing with no compromise on quality",
        "End-to-end delivery across India",
        "100% BPA-free and food-safe materials",
        "Dedicated after-sales support team"
    ];

    return (
        <div className="bg-white min-h-screen font-sans">
            {/* ─── Hero ─── */}
            <section className="bg-gradient-to-br from-primary to-sky-600 py-28 relative overflow-hidden">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollReveal>
                        <div className="text-center text-white">
                            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold px-5 py-2 rounded-full mb-6">
                                <Droplets size={16} />
                                Shri Namami Water — Est. 2021
                            </div>
                            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                                Hydration,<br />
                                <span className="text-white/75">Redefined.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/85 max-w-3xl mx-auto leading-relaxed">
                                We're not just making bottles. We're crafting a movement towards a cleaner, greener, and healthier India — one premium bottle at a time.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── Stats ─── */}
            <section className="py-16 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-6 bg-gradient-to-r from-sky-50 to-blue-50 border border-sky-100 rounded-3xl px-12 py-10 shadow-sm max-w-xl mx-auto"
                        >
                            <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-sky-500 text-white shadow-lg shrink-0">
                                <Droplets size={36} />
                            </div>
                            <div className="text-center sm:text-left">
                                <StatCard value={10000} suffix="+" label="Bottles Delivered Across India" icon={null} />
                            </div>
                        </motion.div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── Our Story ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <div>
                                <span className="text-primary font-semibold text-sm uppercase tracking-widest">Our Story</span>
                                <h2 className="text-4xl md:text-5xl font-black text-dark mt-2 mb-6 leading-tight">
                                    Born from a belief in<br />
                                    <span className="text-primary">Better Hydration</span>
                                </h2>
                                <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
                                    <p>
                                        At <span className="font-semibold text-primary">{companyInfo.brand}</span>, our story starts with a simple but powerful question: <em>Why are we still using plastic?</em> Founded in the culturally rich city of Indore, Madhya Pradesh, we set out to create an alternative — one that respects both people and the planet.
                                    </p>
                                    <p>
                                        We manufacture premium water bottles crafted from stainless steel, borosilicate glass, and pure copper — materials that have stood the test of time. Each bottle is a blend of traditional wisdom and modern design, built to be your hydration companion for life.
                                    </p>
                                    <p>
                                        From individuals who want a stylish, healthy daily carry to corporations seeking thoughtful branded gifts, we deliver custom solutions that leave a lasting impression — and a lighter footprint on the earth.
                                    </p>
                                </div>
                                <div className="mt-8 flex flex-wrap gap-3">
                                    {certifications.map((c, i) => (
                                        <div key={i} className="flex items-center gap-2 bg-sky-50 text-primary text-sm font-semibold px-4 py-2 rounded-full border border-sky-100">
                                            {c.icon} {c.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-8 rounded-3xl shadow-lg border border-sky-100">
                                <h3 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                                    <Building2 className="text-primary" size={26} />
                                    Company Details
                                </h3>
                                <div className="space-y-5">
                                    {[
                                        { icon: <Building2 size={18} />, label: "Company Name", value: companyInfo.name },
                                        { icon: <Award size={18} />, label: "Brand Name", value: companyInfo.brand },
                                        { icon: <Shield size={18} />, label: "CIN", value: companyInfo.cin },
                                        { icon: <MapPin size={18} />, label: "Address", value: companyInfo.address },
                                    ].map((item, i) => (
                                        <div key={i} className="flex items-start gap-3 pb-4 border-b border-sky-100 last:border-0 last:pb-0">
                                            <div className="mt-1 text-primary shrink-0">{item.icon}</div>
                                            <div>
                                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{item.label}</p>
                                                <p className="text-gray-700 font-medium">{item.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                    <div className="flex items-start gap-3">
                                        <Phone size={18} className="text-primary mt-1 shrink-0" />
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Phone</p>
                                            <a href={`tel:${companyInfo.phone}`} className="text-primary hover:underline font-medium">{companyInfo.phone}</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail size={18} className="text-primary mt-1 shrink-0" />
                                        <div>
                                            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Email</p>
                                            <a href={`mailto:${companyInfo.email}`} className="text-primary hover:underline font-medium">{companyInfo.email}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ─── Core Values ─── */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="text-primary font-semibold text-sm uppercase tracking-widest">What We Stand For</span>
                            <h2 className="text-4xl md:text-5xl font-black text-dark mt-2 mb-4">Our Core Values</h2>
                            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                                These aren't just words on a wall. They're the principles we live by every single day.
                            </p>
                        </div>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <ScrollReveal key={index} delay={index * 0.1}>
                                <motion.div
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ type: 'spring', stiffness: 300 }}
                                    className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
                                >
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-dark mb-3">{value.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                                </motion.div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>



            {/* ─── Why Choose Us ─── */}
            <section className="py-24 bg-gradient-to-br from-sky-50 to-blue-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <ScrollReveal>
                            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Why Namami</span>
                            <h2 className="text-4xl md:text-5xl font-black text-dark mt-2 mb-6 leading-tight">
                                The Namami<br />Difference
                            </h2>
                            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                                With hundreds of brands out there, here's why customers and corporations choose Shri Namami Water as their trusted hydration partner.
                            </p>
                            <div className="space-y-3">
                                {whyUs.map((point, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.08 }}
                                        className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-sky-100"
                                    >
                                        <CheckCircle size={20} className="text-primary shrink-0" />
                                        <span className="text-gray-700 font-medium">{point}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: <Droplets size={32} />, title: "Steel Bottles", desc: "Insulated, rust-proof, built for adventure." },
                                    { icon: <Zap size={32} />, title: "Copper Bottles", desc: "Ayurvedic benefits with timeless elegance." },
                                    { icon: <Globe size={32} />, title: "Glass Bottles", desc: "Chemical-free purity in a sophisticated form." },
                                    { icon: <Award size={32} />, title: "Custom Branding", desc: "Your logo, your bottle, your brand story." },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.04 }}
                                        className="bg-white rounded-2xl p-6 shadow-sm border border-sky-100 hover:shadow-md transition-all"
                                    >
                                        <div className="text-primary mb-4">{item.icon}</div>
                                        <h4 className="font-bold text-dark mb-1">{item.title}</h4>
                                        <p className="text-gray-500 text-sm">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ─── Mission & Vision ─── */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center mb-16">
                            <span className="text-primary font-semibold text-sm uppercase tracking-widest">Purpose & Direction</span>
                            <h2 className="text-4xl md:text-5xl font-black text-dark mt-2">Mission & Vision</h2>
                        </div>
                    </ScrollReveal>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ScrollReveal>
                            <div className="bg-gradient-to-br from-primary to-sky-600 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                        <Heart size={24} />
                                    </div>
                                    <h3 className="text-3xl font-black mb-5">Our Mission</h3>
                                    <p className="text-lg text-white/90 leading-relaxed">
                                        To provide sustainable, high-quality hydration solutions that empower individuals and businesses to make environmentally conscious choices — while enjoying premium products that reflect their unique style and values. Every bottle we ship is a small victory against plastic pollution.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={0.2}>
                            <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                                        <Globe size={24} />
                                    </div>
                                    <h3 className="text-3xl font-black mb-5">Our Vision</h3>
                                    <p className="text-lg text-white/90 leading-relaxed">
                                        To become India's most trusted brand for custom, sustainable water bottles — recognized for our unwavering commitment to quality, innovation, and the environment. We envision a future where every Indian chooses reusable over disposable, and Namami leads that change.
                                    </p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* ─── Testimonial Strip ─── */}
            <section className="py-16 bg-sky-50 border-y border-sky-100">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <ScrollReveal>
                        <div className="text-center">
                            <div className="flex justify-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <blockquote className="text-2xl md:text-3xl font-bold text-dark italic max-w-3xl mx-auto mb-4">
                                "Shri Namami Water bottles are the best corporate gifts we've given. Our clients loved the quality and our team loves the mission."
                            </blockquote>
                            <p className="text-gray-500 font-medium">— Corporate Client, Indore</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <ScrollReveal>
                <section className="py-24 bg-gradient-to-br from-primary to-sky-600 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full" />

                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                        <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 text-sm font-semibold px-5 py-2 rounded-full mb-6">
                            <Droplets size={16} /> Let's Talk
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                            Ready to Make<br />the Switch?
                        </h2>
                        <p className="text-xl mb-10 text-white/85 max-w-2xl mx-auto">
                            Whether you need 10 bottles or 10,000 — custom-branded or off-the-shelf — we're ready to deliver excellence to your doorstep.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href={`tel:${companyInfo.phone}`}
                                className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-primary text-lg font-bold rounded-full hover:bg-gray-50 transition-all shadow-2xl hover:shadow-white/30"
                            >
                                <Phone size={20} />
                                Call Us Now
                                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                            <a
                                href={`mailto:${companyInfo.email}`}
                                className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-dark text-white text-lg font-bold rounded-full hover:bg-gray-800 transition-all shadow-2xl"
                            >
                                <Mail size={20} />
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