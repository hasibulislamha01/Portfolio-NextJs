import Link from 'next/link';
import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {motion} from 'framer-motion'


const Socials = ({ containerStyles, iconStyles, variant }) => {

    const socials = [
        { icon: <FaGithub size={20} />, link: 'https://github.com/hasibulislamha01' },
        { icon: <FaLinkedin size={20} />, link: 'https://www.linkedin.com/in/hasibul-islam-35a016324/' },
    ]


    return (
        <motion.div variants={variant} className={containerStyles}>
            {
                socials?.map((social, index) =>
                    <Link
                        key={index}
                        href={social.link}
                        className={`${iconStyles}`}
                        target='_blank'
                    >
                        {social.icon}
                    </Link>
                )
            }
        </motion.div>
    );
};

export default Socials;