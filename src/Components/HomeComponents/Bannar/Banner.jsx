import React from 'react';
import Image from 'next/image';
import Photo from './Photo';
import SlidingText from './SlidingText';
import Info from './Info';

const Banner = () => {
    return (
        <section className='w-full section container mx-auto  flex flex-col md:flex-row items-center justify-evenly border border-red-300'>

            <Info></Info>
            
            <Photo></Photo>
            <SlidingText></SlidingText>
        </section>
    );
};

export default Banner;