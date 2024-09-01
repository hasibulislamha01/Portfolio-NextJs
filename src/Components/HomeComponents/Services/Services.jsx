import React from 'react';

const Services = () => {

    const servicesCollection = [
        {
            id: 1,
            title: 'Frontend Development',
            description: 'Creating responsive and visually appealing user interfaces using HTML, CSS, Tailwind, and JavaScript. Proficient in building modern web applications with React and Next.js.'
        },

        {
            id: 2,
            title: 'Full Stack Development',
            description: 'Offering complete end-to-end web application development, including both frontend and backend development. Specializing in the MERN stack (MongoDB, Express.js, React, Node.js)'
        },

        {
            id: 3,
            title: 'E-commerce Solutions',
            description: 'Building and managing e-commerce platforms with features like product listings, shopping carts, payment integrations, and more. Focused on scalable and user-friendly solutions.'
        }
    ]
    return (
        <section id='services' className='w-full text-white flex flex-col items-center justify-center'>
            <h1 className='text-3xl'>Services</h1>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4'>
                {
                    servicesCollection?.map(service =>
                        <div
                            key={service.id}
                            className='group space-y-4  border border-gray-500 hover:border-accent px-12 py-8 rounded-xl transition-all duration-500'
                        >
                            {/* <h1 className='text-3xl text-white font-bold text-shadow-md'>{service?.id}</h1> */}
                            <div className='space-y-2'>
                                <h1 className='text-2xl group-hover:text-accent  transition-all duration-500'>{service.title}</h1>
                                <p className='text-sm'>{service.description}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </section>
    );
};

export default Services;