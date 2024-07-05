import logo from "../assets/AniketPanditLogo.png"
import { Link } from "react-scroll"
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react"

const Navbar2 = () => {
    const [menu, setMenu] = useState(false)
    const navItems=[
        
        {
            id:1,
            text:"About",
            to:'about'
        },
        {
            id:2,
            text:"Projects",
            to:"projects"
        },
        {
            id:3,
            text:"Contact",
            to:"contact"
        }
        
    ]
    return (
        <>
            <div className=' hidden lg:block fixed w-3/4 top-0 left-0 z-50 bg-neutral-100 p-2 shadow-md scroll-smooth rounded-full mx-[12.5%]'>
                <nav className="flex flex-wrap">
                    <div className="  container px-4 mx-auto flex flex-wrap items-center justify-between">
                        <div className="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">

                            <Link to="home"> <img className=" w-[28px] hover:scale-110 duration-200" src={logo} alt="" /> </Link>

                        </div>



                        {/* Links */}
                        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                            <ul className="flex  flex-col lg:flex-row list-none ml-auto">
                                <li className="nav-item">

                                    <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={About} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75">About</Link>
                                </li>
                                <li className="nav-item">

                                    <Link to="projects" spy={true} smooth={true} offset={-100} duration={1000} onClick={Projects} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">Projects</Link>

                                </li>
                                <li className="nav-item">

                                    <Link to="contact" spy={true} smooth={true} offset={-150} duration={1000} onClick={Contact} className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug  hover:opacity-75">Contact</Link>

                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>

{/* mobile view navbar */}

            <div className="lg:hidden fixed top-0 left-0 z-50 w-full justify-between bg-neutral-100 shadow-md ">

                <nav className="justify-between">
                    <div className="flex items-center py-2">
                        <div className="w-full relative flex lg:w-auto  px-12 lg:static lg:block lg:justify-start ">

                            <Link to="home"> <img className="w-12 hover:scale-110 duration-200" src={logo} alt=""   /> </Link>

                        </div>

                       <div className="px-12" onClick={()=>setMenu(!menu)}>{menu ?<IoClose size={32} />:<IoMenu size={32} />  }</div>
                       </div>


                  {menu && <div className="px-14 py-6">
                        <ul className="space-y-4 font-semibold">
                          {navItems.map((link)=>(
                            <li key={link.id}> <Link to={link.to} activeClassName={link.activeClassName} onClick={()=>setMenu(!menu)}>{link.text}</Link> </li>
                          ))}
                        </ul>
                    </div>
                        }
                </nav>
                

            </div>
        </>
    )
}

export default Navbar2
