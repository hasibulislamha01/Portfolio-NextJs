import Image from "next/image";
import { delay, motion } from 'framer-motion'

const SkillCard = ({ skill, delay }) => {

    console.log(delay);
    
    const staggeredVariant = {
        initial: {
            opacity: 0,
            y: 200,
        },
        animate: () => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: delay*0.25
            }
        })
    
    }

    return (
        <motion.div
        variants={staggeredVariant}
        initial='initial'
        whileInView='animate'
        viewport={{
            once: true
        }}
        className="flex flex-col justify-center items-center">
            <Image
                src={skill?.icon}
                alt={skill?.name}
                width={50}
                height={50}
                className=""
            />
            <h3 className="mt-2 text-lg font-bold text-emerald-500">{skill?.name}</h3>
        </motion.div>
    );
};

export default SkillCard;