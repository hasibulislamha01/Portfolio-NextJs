import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import menuIcon from '../../../../public/hamburger.svg'


const HorizontalNav = ({openSideNav, routesCollection}) => {
    return (
        <div className='flex items-center justify-end'>

            {/* logo */}
            <div className='flex items-center mr-auto'>
                <h1>Hasibul</h1>
                <p className=''>.</p>
            </div>

            <div className='hidden md:flex items-center md:gap-5 lg:gap-6'>
                {
                    routesCollection?.map(route =>
                        <Link
                            key={route.link}
                            href={route.link}
                            // className={`${route.link === pathName ? 'active-route' : 'inactive-route'}`}
                        >
                            {route.title}
                        </Link>
                    )
                }
                <button className='btn btn-sm bg-emerald-400 text-black hover:bg-black hover:text-emerald-300 border-2 border-transparent hover:border-emerald-400 rounded-full transition-all duration-500'>Hire me</button>
            </div>

            <Image className='md:hidden' onClick={openSideNav} src={menuIcon} alt='menu icon'></Image>
        </div>
    );
};

export default HorizontalNav;