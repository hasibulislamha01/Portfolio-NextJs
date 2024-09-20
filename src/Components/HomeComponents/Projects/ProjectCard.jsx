import TooltipProvider from '@/Components/SharedComponents/Tooltip/Tooltip';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { GrDeploy } from 'react-icons/gr';

const ProjectCard = ({ project }) => {
    console.log(project?.stack);
    return (
        <div className='w-full flex justify-between items-center gap-6'>
            <div className='space-y-6'>
                {/* outlined text */}
                <div className='text-7xl leading-none font-extrabold text-transparent text-outline'>
                    {project.title}
                </div>

                {/* project category */}
                <h1 className='text-2xl text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category}</h1>

                {/* project description */}
                <p className='text-white/60'>
                    {project.description}
                </p>

                {/* skills used */}
                <ul className='flex flex-wrap gap-4'>
                    {project.stack?.map((item, index) => {
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
                    <TooltipProvider id={'server'} tooltipText={'Server Side Code'} />

                </div>
            </div>

            <Image
                src={project.image}
                alt='project thumbnail'
                className='rounded-lg'
                width={400}
                height={350}
            />

        </ div>
    );
};

export default ProjectCard;