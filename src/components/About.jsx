import aboutImg from "../assets/about.png"
import { ABOUT_TEXT } from '../constants'
import { motion } from 'framer-motion'
import { SiTicktick } from "react-icons/si";
import { EDUCATION } from '../constants'

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-16 '>
      <h2 className='my-20 text-center text-xl font-light tracking-widest text-amber-500 about'>About <span className='text-neutral-500'>Me</span></h2>


      <div className='flex flex-wrap justify-around'>
        
        <div className=' lg:w-1/4 lg:p-1/8'>

          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className='justify-center items-center'>
            <img className="w-[240px] sm:w-[300px] md:w-[400] justify-center " src={aboutImg} alt="profilepic" />
            <div className='flex items-center gap-4  justify-center mb-6'> 
            <SiTicktick className="mt-6 text-4xl text-green-500 text-thin" />
           <p className='items-center mt-4 text-green-500'> Open to Work</p>
           </div>

          </motion.div>

        </div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className='w-full lg:w-1/2'>
            
           
          <div className='  justify-center bg-amber-100 p-4  '>
          
            <p className='  max-w-xl  p-2  '> {ABOUT_TEXT}</p>
            
            <div>
                {EDUCATION.map((education, index) => (
                    <div key={index} className='mb-8 flex flex-wrap  py-6 lg:justify-center  rounded-md '>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className='w-full lg:w-1/4  '>
                            <p className='mb-2 text-sm text-neutral-900'>{education.year}</p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h5 className='mb  text-amber-500 font-semibold'> {education.college}</h5>
                            <h5 className='mb italic'> {education.role}</h5>
                            <p>{education.marks.map((marks, index) => (
                                <span key={index} className=' mt-6 rounded bg-neutral-200 px-2 py-1 text-sm font-medium text-purple-500'>{marks}</span>
                            ))}</p>

                        </motion.div>
                    </div>
                ))}
            </div>

          </div>
        </motion.div>

      </div>

    </div>
  )
}

export default About
