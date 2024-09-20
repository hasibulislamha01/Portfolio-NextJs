'use client'
import { motion } from 'framer-motion';
import React from 'react';

const About = () => {

    const variant = {
        initial: {
            x: 0,
            y: 200,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                delay: 0,
                duration: 1
            }
        }
    }
    return (
        <motion.div
            variants={variant}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: 0.5 }}
            className='min-h-screen flex flex-col justify-center text-white text-center space-y-6'
        >
            <motion.h1 variants={variant} className='text-3xl'>About me</motion.h1>
            <motion.p className='w-[95%] md:w-[80%] mx-auto'>
                I am a dedicated and enthusiastic web developer with expertise in HTML, CSS, Tailwind, JavaScript, React, Firebase, Node.js, MongoDB, and Express.js. I love creating beautiful, responsive, and user-friendly websites and applications. Explore my projects to see how I bring innovative ideas to life with clean and efficient code.
            </motion.p>
        </motion.div>
    );
};

export default About;