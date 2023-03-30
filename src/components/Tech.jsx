import React from 'react'
import {styles} from '../styles';
import {motion} from 'framer-motion';
import { textVariant } from '../utils/motion';
import { BallCanvas } from "./canvas";
import { SectionWrap } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className={` ${styles.paddingX} gap-15`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Tech Learned</p>
        <h2 className={styles.sectionHeadText}>Technology.</h2>
      </motion.div>
      <div className='mt-8 flex flex-row flex-wrap justify-center gap-10'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SectionWrap(Tech,"tech");