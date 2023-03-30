import React from 'react'
import Tilt from "react-tilt";
import {motion} from 'framer-motion';
import {styles} from '../styles';
import {services} from '../constants';
import {fadeIn, textVariant } from '../utils/motion';
import { SectionWrap } from '../hoc';

const ServiceCard = ({index, title, icon})=>{
  return(
    <Tilt className="xs:w-[250px] w-full">
      <motion.div variants={fadeIn("right","spring",0.5*index,0.75)} className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div options={{max:45,scale:1,speed:450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"> 
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <div className={` ${styles.paddingX} gap-15`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("","",0.1,1)} className='mt-2 text-secondary text-[17px] max-w-6xl leading-[30px]'>
        I'm a CSE student with a passion for Artificial Intelligence and Machine Learning and a skilled developer with experience in Java, Python and JavaScript,
        and expertise in frameworks like React, Node. js. I'm a quick learner and collaborate closely with 
        clients to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your ideas to life! <br/>
        I am a dedicated and hardworking individual who is committed to staying up-to-date with the latest technologies and trends in the field of computer science. My diverse background and expertise make me a valuable asset to any team, and I look forward to continuing to grow and evolve as a developer.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </div>
  )
}

export default SectionWrap(About,"about");