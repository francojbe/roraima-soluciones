import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const SpotlightCard = ({ children, className = "", ...props }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const radius = 400;

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        let { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            className={`relative overflow-hidden rounded-xl border border-slate-100 bg-white group ${className}`}
            onMouseMove={handleMouseMove}
            {...props}
        >
            {/* Spotlight Gradient */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              rgba(59, 130, 246, 0.4),
              transparent 80%
            )
          `,
                }}
            />

            {/* Content wrapper */}
            <div className="relative">
                {children}
            </div>
        </motion.div>
    );
};

export default SpotlightCard;
