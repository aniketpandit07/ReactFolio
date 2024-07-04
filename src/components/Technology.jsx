// import { RiReactjsLine } from "react-icons/ri";
// import { RiNextjsLine } from "react-icons/ri";
// import { RiNodejsLine } from "react-icons/ri";
// import { RiJavaLine } from "react-icons/ri";
// import { SiMongodb } from "react-icons/si";
// import { GrMysql } from "react-icons/gr";
// import { SiCplusplus } from "react-icons/si";
// import { FaGitSquare } from "react-icons/fa";
// import { list } from "postcss";
import { SKILLS } from "../constants";



const Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-2 ">


      <h2 className="my-20 text-center text-xl font-light tracking-widest text-amber-500">Technologies</h2>


      <div className="items-center justify-center mb-12 space-y-6">


        <div className="flex flex-wrap gap-4 justify-center">
         
          {SKILLS.tech1.map((tech1, index) => (

            <span key={index} className="mr-2 rounded  px-2 py-1 text-2xl font-medium text-slate-900 border-2 border-slate-300">{tech1}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
         
          {SKILLS.tech2.map((tech2, index) => (

            <span key={index} className="mr-2 rounded  px-2 py-1 text-2xl font-medium text-slate-900 border-2 border-slate-300">{tech2}</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 justify-center">
         
          {SKILLS.tech3.map((tech3, index) => (

            <span key={index} className="mr-2 rounded  px-2 py-1 text-2xl font-medium text-slate-900 border-2 border-slate-300">{tech3}</span>
          ))}
        </div>
        

      </div>
    </div>
  );
};

export default Technology;
