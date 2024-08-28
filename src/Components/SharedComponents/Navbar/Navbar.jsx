'use client'
import Link from 'next/link';
import React from 'react';
import menuIcon from '../../../../public/hamburger.svg'
import closeIcon from '../../../../public/close.svg'
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Navbar = () => {

    const pathName = usePathname()
    console.log(pathName);

    const routesCollection = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Services',
            link: '/services'
        },
        {
            title: 'Resume',
            link: '/resume'
        },
        {
            title: 'Contact',
            link: '/contact'
        },
    ]

    const hideSideNav = () => {
        const sideNav = document.querySelector('.sideNav')
        sideNav.classList.remove('flex')
        sideNav.classList.add('hidden')
    }

    const openSideNav = () => {
        const sideNav = document.querySelector('.sideNav')
        sideNav.classList.remove('hidden')
        sideNav.classList.add('flex')
    }


    return (
        <nav className='w-full py-5 bg-slate-800 text-white px-4 md:px-0'>
            <div className='container mx-auto'>



                {/* horizontal navbar ( visible in medium and large device ) */}
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
                                    className={`${route.link === pathName ? 'active-route' : 'inactive-route'}`}
                                    >
                                    {route.title}
                                </Link>
                            )
                        }
                        <button className='btn btn-sm bg-emerald-400 text-black hover:bg-black hover:text-emerald-300 border-2 border-transparent hover:border-emerald-400 rounded-full transition-all duration-500'>Hire me</button>
                    </div>

                    <Image className='md:hidden' onClick={openSideNav} src={menuIcon} alt='menu icon'></Image>
                </div>



                {/* vertical navbar ( visible in mobiles ) */}

                <div className='hidden sideNav shadow-lg shadow-gray-400 w-[250px] h-screen fixed top-0 right-0  bg-slate-900 bg-opacity-85 backdrop-blur-lg  flex-col pl-6 pt-6 transition-all duration-500'>
                    <Image onClick={hideSideNav} src={closeIcon} alt='close icon'></Image>

                    <div className='h-full flex flex-col items-center justify-center gap-6'>

                        <Link href='/' className='mb-12'>
                            <h1 className='text-center text-2xl'>Hasibul</h1>
                        </Link>

                        {
                            routesCollection?.map(route =>
                                <Link
                                    key={route.link}
                                    href={route.link}
                                >
                                    {route.title}
                                </Link>
                            )
                        }
                    </div>
                </div>


            </div>
        </nav>
    );
};

export default Navbar;