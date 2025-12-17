import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const ScrollReveal = ({ children, delay = 0, width = "100%" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div ref={ref} style={{ width, position: 'relative', overflow: 'hidden' }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
