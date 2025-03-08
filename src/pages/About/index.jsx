import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import DataSection from './components/DataSection'
import ValuesSection from './components/ValuesSection'
import OfficeSection from './components/OfficeSection'
import TeamSection from './components/TeamSection'
import PositionSection from './components/PositionSection'
import FooterSection from '../../components/FooterSection'
import Navbar from '../../components/Navbar'
import { menuContext } from '../../App'
import { Link } from 'react-router-dom'

const AboutPage = () => {

  const {menuOpen, setMenuOpen} = useContext(menuContext)
  document.title = "About - Vcode.digital"

  return (
    <div >
      <div className='container mx-auto relative z-10' data-aos = "fade">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        
      </div>
      <div className='relative z-50'>
                <div className={` ${menuOpen ? "flex absolute top-0 opacity-100" : "absolute -top-96 opacity-0"} flex   lg:hidden w-full text-lg px-8 gap-4 py-3 flex-col  bg-white text-[#0f2678] font-normal transition-all duration-500`}>
                <Link to={"/home"} className='hover:text-blue-500 transition-all duration-300' onClick={()=> setMenuOpen(false)}>Home</Link>
                <Link to={"/about"} className='hover:text-blue-500 transition-all duration-300' onClick={()=> setMenuOpen(false)}>About</Link>
                <Link to={"/works"} className='hover:text-blue-500 transition-all duration-300' onClick={()=> setMenuOpen(false)}>Our Works</Link>
                {/* <Link to={"/"} className='hover:text-blue-500 transition-all duration-300' onClick={()=> setMenuOpen(false)}>Features</Link>
                <Link to={"/"} className='hover:text-blue-500 transition-all duration-300' onClick={()=> setMenuOpen(false)}>Pricing</Link> */}
            </div>
            </div>
      <div className='px-6'>
        <HeroSection />
      <DataSection/>
      <ValuesSection/>
      {/* <OfficeSection/> */}
      <TeamSection/>
      <PositionSection/>
      <FooterSection/>
      </div>
    </div>
  )
}

export default AboutPage