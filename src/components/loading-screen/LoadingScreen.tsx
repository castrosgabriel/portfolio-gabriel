import React from "react";
import './LoadingScreen.scss';
import { cubicBezier, motion } from "framer-motion";

const LoadingScreen: React.FC = () => {

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: '-100vh' }}
            transition={{ duration: 1, delay: 1, ease: cubicBezier(1, 0, 0, 1) }}
            className="loading-screen">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 20,
                    duration: 1,
                }}
            >
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: '40vh'}}
                    transition={{ duration: 1.5, delay: 0, ease: cubicBezier(1, 0, 0, 1) }}
                >
                    <h2>hello</h2>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default LoadingScreen;