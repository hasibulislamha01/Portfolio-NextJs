'use client'
import Link from 'next/link';
import React from 'react';
import { GrDeploy } from "react-icons/gr";
import { FiGithub } from "react-icons/fi";
import TooltipProvider from '@/Components/SharedComponents/Tooltip/Tooltip';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Image from 'next/image';
import img1 from '../../../../public/books.jpg'
import classmateImage from '../../../../public/clasamate.PNG'
import bookNestImage from '../../../../public/booknest thumb.PNG'
import artisanAvenueImage from '../../../../public/artisan avenue.PNG'
import projects from '../../../../public/Data/projects.json'
import ProjectCard from './ProjectCard';




const Projects = () => {
    console.log(projects);
    return (
        <section className='group min-h-screen mt-12 md:mt-16 lg:mt-32 flex flex-col md:flex-row items-center justify-center'>

            <div className=''>

                {
                    projects.map(project => 
                        <ProjectCard key={project.num} project={project}/>
                    )
                }
            </div>

        </section>
    );
};

export default Projects;