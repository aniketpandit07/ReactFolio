import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { HiEye } from "react-icons/hi2";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className=" border-b border-neutral-900 pb-2">
      <h2 className="my-20  text-center text-xl font-light tracking-widest text-amber-500 projects"><span className='text-neutral-500 '>Selected</span> Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="overflow-hidden">
            <div key={index} className={`p-12 mb-8 flex flex-wrap gap-8 lg:justify-evenly ${PROJECTS[index].color}`}>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="object-contain">
                <img
                  src={project.image}
                  width={500}
                  
                  alt={project.title}
                  className=" rounded border border-neutral-900 p-6"
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                className="w-full  max-w-xl lg:3/4">
                <h4 className="mb-2 font-semibold md:text-2xl">{project.title}</h4>

                <p className="mb-2">{project.description}</p>

                {/* <p className="mb-6 text-amber-500 font-semibold"> <Link to="/"> Read More...</Link></p> */}

                {project.technologies.map((tech, index) => (

                  <span key={index} className=" mr-2 rounded border-2 border-slate-300 px-2 text-sm font-medium text-slate-900">{tech}</span>
                ))}

                <div className="mt-8 flex">
                  <button type="button" className=" flex bg-amber-50 px-6 py-2 border  border-black shadow-[-5px_5px_0px_0px_#1a202c] hover:shadow-none delay-100 duration-100 gap-2">View Project<span className="my-auto "><HiEye /></span> </button></div>
              </motion.div>



            </div>
          </div>
        ))}

        <div className="mt-8 pb-8">
        <Link to={`https://github.com/aniketpandit07`} target="_blank">
          <button type="button" className=" justify-between w-11/12 mx-auto flex bg-amber-50 px-6 py-2 border  border-black shadow-[-5px_5px_0px_0px_#1a202c] hover:shadow-none delay-100 duration-100 gap-2"><div className="flex items-center mx-2 gap-2"><FaGithub />All Projects </div><span className="my-auto "><MdOutlineArrowOutward /></span> </button>
          </Link>
          </div>
          

          
       
      </div>
    </div>
  );
};

export default Projects;
