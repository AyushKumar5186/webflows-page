import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { AlignJustify, Plus } from 'lucide-react'
import logo from "../assets/weblogo.svg"


const Navbar = ({Home, menuOpen, setMenuOpen}) => {

  return (
    <nav >
        <header className=' relative' >
            <div className='flex justify-between items-center px-8 py-4 transition-all duration-500'>
                <div>
                {
                    Home ?
                    <img src={logo} alt="" width={120} height={120} className='hover:scale-105 transition-all duration-300 cursor-pointer'/>
                    :
                    <img src={"https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665774a9892f8e3facb3cbde_logo-mega-tech-webflow-ecommerce-template.svg"} alt="" width={120} height={120} className='hover:scale-105 transition-all duration-300 cursor-pointer'/>
                }
            </div>
            {
                Home ?
                <div className='text-xl gap-8 items-center text-white font-normal hidden lg:flex transition-all duration-500'>
                <Link to={"/"} className='hover:text-gray-400 transition-all duration-300'>Home</Link>
                <Link to={"/about"} className='hover:text-gray-400 transition-all duration-300'>About</Link>
                <Link to={"/"} className='hover:text-gray-400 transition-all duration-300'>Contact Us</Link>
                {/* <Link to={"/"} className='hover:text-gray-400 transition-all duration-300'>Features</Link>
                <Link to={"/"} className='hover:text-gray-400 transition-all duration-300'>Pricing</Link> */}
            </div>
            :
            <div className='text-xl gap-8 items-center text-[#0f2678] font-normal hidden lg:flex transition-all duration-500'>
                <Link to={"/"} className='hover:text-blue-500 transition-all duration-300'>Home</Link>
                <Link to={"/about"} className='hover:text-blue-500 transition-all duration-300'>About</Link>
                <Link to={"/"} className='hover:text-blue-500 transition-all duration-300'>Contact Us</Link>
                {/* <Link to={"/"} className='hover:text-blue-500 transition-all duration-300'>Features</Link>
                <Link to={"/"} className='hover:text-blue-500 transition-all duration-300'>Pricing</Link> */}
            </div>
            }
            <div className='flex space-x-6 items-center transition-all duration-700'>
                <div className='hidden md:flex transition-all duration-500'>
                    <Button Text={"Buy Mega template"} Variant={"Primary"}/>
                </div>
                <button className='bg-gradient-to-b  from-[#679cff] to-[#2370ff] md:from-[#0f2678] md:to-[#000e41] shadow-2xl md:shadow-[#000e41] rounded-lg p-2 cursor-pointer justify-center items-center flex lg:hidden transition-all duration-500 hover:scale-[1.01]'
                onClick={()=> setMenuOpen(!menuOpen)}
                >
                    
                    {
                        menuOpen ? <div className='rotate-45'>
                            <Plus size={32} color='white'/>
                        </div> :<AlignJustify size={32} color='white'/>
                    }
                </button>
            </div>
            
            </div>
            
        </header>
    </nav>
  )
}

export default Navbar