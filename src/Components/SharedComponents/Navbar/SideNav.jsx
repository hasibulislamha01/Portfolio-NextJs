import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import closeIcon from '../../../../public/close.svg'


const SideNav = ({hideSideNav, routesCollection}) => {
    return (
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
    );
};

export default SideNav;