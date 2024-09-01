'use client'
import Image from 'next/image';
import { easeIn, easeInOut, motion } from 'framer-motion'
import React from 'react';

const Photo = () => {
    const initial = {
        opacity: 0
    }
    const animate = {
        opacity: 1,
        transition: {
            delay: 0.3,
            duration: 1,
            ease: easeInOut
        }
    }
    return (
        <div className='order-1 md:order-none relative '>
            <motion.div initial={initial} animate={animate}>
                <motion.div 
                initial={initial}
                animate={animate}
                className='w-[298px] h-[298px] mix-blend-lighten'>
                    <Image
                        src={'/heroImage.png'}
                        priority
                        quality={100}
                        fill
                        alt='image of Hasibul Islam'
                        className='object-contain'
                    />
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Photo;