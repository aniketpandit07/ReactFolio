
import { motion } from "framer-motion"
import { Link } from "react-router-dom"


const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, delay: delay } }
})
const Hero = () => {
  return (
    <div className=' relative border-b pb-8 lg:mb-4 lg:pb-16  home'>
      <div className='w-full '>
        <div className='flex flex-col items-center lg:items-start '>
          <h5 className='border-b  mb-4 font-light lg:text-xl mt-[120px]'>Hello, my name is</h5>
          <motion.h1
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className='pb-2 font-semibold text-4xl tracking-tight lg:mt-6 lg:text-7xl'>Aniket Pandit</motion.h1>
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className='bg-gradient-to-r from-green-500 via-slate-500 to-purple-500 bg-clip-text text-xl tracking-tight text-transparent lg:text-2xl'>Full Stack Developer</motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className='my-2  py-6  lg:text-2xl tracking-tight '>
            <span className='text-amber-500 font-semibold' >Self-taught programmer</span> motivated by passion and personal projects. Expert of searching bugs on Google and quickly scanning the best StackOverflow answers. <br /> I have honed my skills in modern front-end technologies like <span className='text-amber-500 font-semibold'>React.js and Next.js</span>, as well as back-end technologies like  <span className='text-amber-500 font-semibold'>Node.js, Express.js, MySQL, PostgreSQL, and MongoDB.</span>
          </motion.p>
        </div>


        {/* <div className='w-full sm:max-w-md lg:p-8'>
          <div className='flex justify-center '>
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} alt="" />
          </div>
        </div> */}

        <Link to={`https://drive.google.com/file/d/1RLFuji213Kfx0AwwlWlqOdgZ2121iK7S/view?usp=drive_link`} target="_blank">
          <button type="button" className="bg-amber-50 px-6 py-2 border  border-black shadow-[-5px_5px_0px_0px_#1a202c] hover:shadow-none delay-100 duration-100">
            View Resume
          </button>
        </Link>


      </div>
    </div>
  )
}

export default Hero
