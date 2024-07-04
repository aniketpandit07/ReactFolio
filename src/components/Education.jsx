import { EDUCATION } from '../constants'
import { motion } from 'framer-motion'
const Education = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>Education</h2>
            <div>
                {EDUCATION.map((education, index) => (
                    <div key={index} className='mb-8 flex flex-wrap  py-6 lg:justify-center hover:bg-gradient-to-r from-gray-900 via-zinc-800 to-gray-900 rounded-md '>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className='w-full lg:w-1/4  '>
                            <p className='mb-2 text-sm text-neutral-300'>{education.year}</p>
                        </motion.div>

                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 }}
                            className='w-full max-w-xl lg:w-3/4'>
                            <h5 className='mb  text-purple-300 font-semibold'> {education.college}</h5>
                            <h5 className='mb italic'> {education.role}</h5>
                            <p>{education.marks.map((marks, index) => (
                                <span key={index} className=' mt-5 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400'>{marks}</span>
                            ))}</p>

                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Education
