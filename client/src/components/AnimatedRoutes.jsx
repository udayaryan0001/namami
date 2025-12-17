import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Customize from '../pages/Customize';
import { About, Corporate, Login } from '../pages/Placeholders';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
                <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
                <Route path="/products" element={<PageWrapper><Products /></PageWrapper>} />
                <Route path="/customize" element={<PageWrapper><Customize /></PageWrapper>} />
                <Route path="/corporate" element={<PageWrapper><Corporate /></PageWrapper>} />
                <Route path="/login" element={<PageWrapper><Login /></PageWrapper>} />
                <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
            </Routes>
        </AnimatePresence>
    );
};

const PageWrapper = ({ children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
    >
        {children}
    </motion.div>
);

export default AnimatedRoutes;
