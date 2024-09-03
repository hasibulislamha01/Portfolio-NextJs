'use client'
import Link from 'next/link';
import React from 'react';
import { GrDeploy } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import TooltipProvider from '@/Components/SharedComponents/Tooltip/Tooltip';


const projects = [
    {
        num: 1,
        category: 'Full Stack',
        title: 'Project 1',
        description: 'ruedsjnvjr fdsjkdhf8ewe bdssijfrh',
        stack: [
            { name: 'HTML 5' },
            { name: 'CSS 3' },
            { name: 'Tailwind CSS' },
            { name: 'React' },
            { name: 'Express Js' },
            { name: 'MongoDB' },
        ],
        image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
        live: 'https://book-nest-d0b87.web.app/',
        client: 'https://github.com/hasibulislamha01/Book-Nest',
        server: 'https://github.com/hasibulislamha01/Book-Nest-Server'
    },
    // {
    //     num: 2,
    //     category: 'Full Stack',
    //     title: 'Project 1',
    //     description: 'ruedsjnvjr fdsjkdhf8ewe bdssijfrh',
    //     stack: [
    //         { name: 'HTML 5' },
    //         { name: 'CSS 3' },
    //         { name: 'Tailwind CSS' },
    //         { name: 'React' },
    //         { name: 'Express Js' },
    //         { name: 'MongoDB' },
    //     ],
    //     image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
    //     live: 'https://book-nest-d0b87.web.app/',
    //     client: 'https://github.com/hasibulislamha01/Book-Nest',
    //     server: 'https://github.com/hasibulislamha01/Book-Nest-Server'
    // },
    // {
    //     num: 3,
    //     category: 'Full Stack',
    //     title: 'Project 1',
    //     description: 'ruedsjnvjr fdsjkdhf8ewe bdssijfrh',
    //     stack: [
    //         { name: 'HTML 5' },
    //         { name: 'CSS 3' },
    //         { name: 'Tailwind CSS' },
    //         { name: 'React' },
    //         { name: 'Express Js' },
    //         { name: 'MongoDB' },
    //     ],
    //     image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
    //     live: 'https://book-nest-d0b87.web.app/',
    //     client: 'https://github.com/hasibulislamha01/Book-Nest',
    //     server: 'https://github.com/hasibulislamha01/Book-Nest-Server'
    // },
]

const project = {
    num: 1,
    category: 'Full Stack',
    title: 'Project 1',
    description: 'ruedsjnvjr fdsjkdhf8ewe bdssijfrh',
    stack: [
        { name: 'HTML 5' },
        { name: 'CSS 3' },
        { name: 'Tailwind CSS' },
        { name: 'React' },
        { name: 'Express Js' },
        { name: 'MongoDB' },
    ],
    image: 'https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-4.1.0&q=45&auto=format&w=1356&h=668&fit=crop',
    live: 'https://book-nest-d0b87.web.app/',
    client: 'https://github.com/hasibulislamha01/Book-Nest',
    server: 'https://github.com/hasibulislamha01/Book-Nest-Server'
}

const Projects = () => {
    return (
        <section className='group min-h-screen mt-12 md:mt-16 lg:mt-32 flex flex-col md:flex-row items-center justify-center'>

            <div className='w-full flex flex-col gap-7'>

                {/* outlined text */}
                <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                    {project.num}
                </div>

                {/* project category */}
                <h1 className='text-5xl text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category}</h1>

                {/* project description */}
                <p className='text-white/60'>
                    {project.description}
                </p>

                {/* skills used */}
                <ul className='flex flex-wrap gap-4'>
                    {project.stack.map((item, index) => {
                        return <li
                            key={index}
                            className='text-accent '
                        >
                            {item.name}
                            {index !== project.stack.length - 1 && ','}
                        </li>
                    })}
                </ul>
                <div className='border-t border-white/20'></div>

                {/* necessary links */}
                <div className='flex items-center gap-4'>
                    <Link
                        id='liveLink'
                        href={project.live}
                        target='_blank'
                        className='btn hover:text-accent hover:bg-primary hover:border-accent rounded-full hover:rotate-45 transition-all duration-500 ease-in-out'
                    >
                        <GrDeploy size={20} />
                    </Link>

                    <TooltipProvider
                        id={'liveLink'}
                        tooltipText='Live Site'
                    />

                    <Link
                        id='client'
                        href={project.live}
                        target='_blank'
                        className='btn hover:text-accent hover:bg-primary hover:border-accent rounded-full hover:rotate-45 transition-all duration-500 ease-in-out'
                    >
                        <FiGithub size={20} />
                    </Link>
                    <TooltipProvider
                        id={'client'}
                        tooltipText={'Client Side Code'}
                    />

                    <Link
                    id='server'
                        href={project.live}
                        target='_blank'
                        className='btn hover:text-accent hover:bg-primary hover:border-accent rounded-full hover:rotate-45 transition-all duration-500 ease-in-out'
                    >
                        <FiGithub size={20} />
                    </Link>
                    <TooltipProvider id={'server'} tooltipText={'Server Side Code'}/>

                </div>
            </div>

            <div className='w-full'>
                slider
            </div>

        </section>
    );
};

export default Projects;