'use client'
import React from 'react';
import Socials from './Socials';
import { animate, motion } from 'framer-motion';

const Info = () => {

    const containerVariant = {
        initial: {},
        animate: {
            transition: {
                staggerChildren: 0.3,  // Stagger animation of children
            }
        }
    };

    const variant = {
        initial: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
            }
        }
    }

    return (
        <motion.div variants={containerVariant}             
        initial="initial"
        animate="animate" 
        className=' border border-red-300 flex flex-col gap-6 justify-center text-center md:text-left'>

            <motion.h3 variants={variant} className='text-lg lg:text-2xl tracking-[3px] hover:tracking-[6px] font-extralight text-accent uppercase hover:translate-x-3 transition-all duration-1000 ease-in-out'>
                Hasibul Islam
            </motion.h3>

            <motion.h1 variants={variant} className='text-5xl text-accent'>Web Developer</motion.h1>

            <motion.div variants={variant} className='flex flex-col md:flex-row items-center gap-6'>

                <motion.button variants={variant} className='btn btn-outline text-accent hover:bg-accent hover:text-black rounded-full transition-all duration-500'>Download Resume</motion.button>

                <Socials
                    variant={variant}
                    containerStyles={'flex items-center justify-center gap-6'}
                    iconStyles={'flex items-center justify-center w-9 h-9 text-accent border border-accent rounded-full hover:text-black hover:bg-accent transition-all duration-500'}
                />
            </motion.div>
        </motion.div>
    );
};

export default Info;