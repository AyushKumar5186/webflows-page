import React, { useContext, useState } from 'react'
import rays from './../../../assets/rays.png'
import dots from './../../../assets/dots.png'
import spot from './../../../assets/spot.png'
import Button from '../../../components/Button'
import InfiniteMarquee from './InfiniteMarquee'
import Navbar from '../../../components/Navbar'
import { Link } from 'react-router-dom'
import { menuContext } from '../../../App'
import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"
import img4 from "../../../assets/4.png"
import img5 from "../../../assets/5.png"


const Hero = () => {

    const {menuOpen, setMenuOpen} = useContext(menuContext)

    const ImageList = [
        {
            img: img1,
        },
        {
            img: img2,
        },
        {
            img: img3,
        },
        {
            img: img4,
        },
        {
            img: img5,
        },
        ,]

    return (
        <main className=''>
            <div   className='h-full overflow-hidden bg-gradient-to-b  from-[#0f2678] to-[#000e41] shadow-2xl shadow-[#000e41] rounded-b-3xl  '>
                <div className=' relative container mx-auto flex justify-between flex-col'>
                <div data-aos = "fade" className=' relative z-10 ' >
                <Navbar Home={true} menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
                </div>
                <div className='relative z-50'>
                <div className={` ${menuOpen ? "flex absolute top-0 opacity-100" : "absolute -top-96 opacity-0"} flex   lg:hidden w-full text-lg px-8 gap-4 py-3 flex-col  bg-white text-[#0f2678] font-normal transition-all duration-500`}>
                <Link to={"/"} onClick={()=> setMenuOpen(false)} className='hover:text-blue-500 transition-all duration-300'>Home</Link>
                <Link to={"/about"} onClick={()=> setMenuOpen(false)} className='hover:text-blue-500 transition-all duration-300'>About</Link>
                <Link to={"/works"} onClick={()=> setMenuOpen(false)} className='hover:text-blue-500 transition-all duration-300'>Our Works</Link>
                {/* <Link to={"/"} onClick={()=> setMenuOpen(false)} className='hover:text-blue-500 transition-all duration-300'>Features</Link>
                <Link to={"/"} onClick={()=> setMenuOpen(false)} className='hover:text-blue-500 transition-all duration-300'>Pricing</Link> */}
            </div>
            </div>

                <div className='grid grid-cols-2 place-items-center max-lg:grid-cols-1 px-4 ' >
                    <div className='flex flex-col gap-8  relative z-20 max-lg:mt-12'>
                        <h2 data-aos = "fade" className='max-sm:text-3xl text-4xl md:text-5xl lg:text-6xl  text-white max-w-[300px] md:max-w-[500px]'>
                         Empowering your <span className='max-sm:text-4xl text-5xl md:text-6xl lg:text-7xl font-bold'>Digital presence</span>
                    </h2>
                    <div data-aos = "fade" className='flex gap-4 max-sm:flex-col'>
                        <a href="http://api.whatsapp.com/send?phone=6200849251"><Button Text={"Get in touch"} Variant={"Primary"}  classes='max-sm:w-full'/></a>
                        <Link to={"/works"}><Button Text={"Our Works"} Variant={"Secondary"} classes='max-sm:w-full'/></Link>
                    </div>
                    </div>

                <div className='' data-aos = "fade">
                    <img src={spot} alt="" className='h-full w-full object-cover ' />
                </div>
                </div>
                
                <div className=' z-20 pb-10' data-aos = "fade">

                    <InfiniteMarquee dataType='image'
				dataArray={ImageList}
                className='im-1'
				speed={200000}
				direction='left'/>
                </div>
                </div>
                </div>
                <img src={dots} alt="" className='h-full w-full absolute top-0 right-0 object-cover' />
                <img src={rays} alt="" className=' absolute -top-12 -left-28 object-cover' height={1200} width={750}/>
        </main>
    )
}

export default Hero

// #2370ff #003598