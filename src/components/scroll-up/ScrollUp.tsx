import React from "react";
import "./ScrollUp.scss";
import { motion } from "framer-motion";

const ScrollUp = () => {

    return (
        <div className="scroll-up">
            <motion.div

                className="scroll-arrow">
                <motion.svg

                    animate={{ y: [-5, 0, -5] }} transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}

                    xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                    <path d="M1 9L8.5 2L16 9" stroke="black" stroke-width="1.5" />
                </motion.svg>
                <motion.svg

                    animate={{ y: [-5, 0, -5] }} transition={{ delay: 0.05, repeat: Infinity, duration: 1, ease: 'easeInOut' }}

                    xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                    <path d="M1 9L8.5 2L16 9" stroke="black" stroke-width="1.5" />
                </motion.svg>
            </motion.div>
            <div className="scroll-text">
                Scroll to see my projects
            </div>
        </div>
    )
}

export default ScrollUp;