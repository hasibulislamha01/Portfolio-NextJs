'use client'
import React from 'react';
import HorizontalNav from './HorizontalNav';
import SideNav from './SideNav';

const Navbar = () => {


    const routesCollection = [
        {
            title: 'Home',
            link: '/'
        },
        {
            title: 'Services',
            link: '#services'
        },
        {
            title: 'Resume',
            link: '#resume'
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
        <nav className='fixed w-full py-5 bg-slate-800 text-white px-4 md:px-0'>
            <div className='container mx-auto'>



                {/* horizontal navbar ( visible in medium and large device ) */}
                <HorizontalNav 
                routesCollection={routesCollection}
                openSideNav={openSideNav}
                ></HorizontalNav>



                {/* vertical navbar ( visible in mobiles ) */}

                <SideNav
                routesCollection={routesCollection}
                hideSideNav={hideSideNav}
                ></SideNav>


            </div>
        </nav>
    );
};

export default Navbar;