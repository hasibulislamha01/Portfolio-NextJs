"use client"
import skills from '../../../../public/Data/skills.json'
import SkillCard from './SkillCard';





const Skills = () => {

    return (
        <div className='min-h-screen flex flex-col justify-center gap-12'>
            <h1 className='text-center text-white font-bold text-3xl'>Skills</h1>
            <div className=' h-[70%] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-10'>
                {
                    skills.map((skill, index) =>
                        <SkillCard
                            key={skill.name}
                            skill={skill}
                            delay={index}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Skills;