'use client'
import React from 'react';
import {motion} from 'framer-motion'

const SlidingText = () => {

    const variant = {
        initial: {
            x: 500,
        },
        animate: {
            x: 100,
            transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    }


    return (
        <motion.div variants={variant} initial='initial' animate='animate' className='absolute text-[100px] left-0 bottom-0 whitespace-nowrap text-opacity-20 overflow-x-hidden'>
            <h1>Mern Stack</h1>
        </motion.div>
    );
};

export default SlidingText;