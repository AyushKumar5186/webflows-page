import React from 'react'
import img1 from "../assets/c-img1.png"
import TwistedArrow from '../icons/TwistedArrow'

const CompanyCard = ({titleImg, title,para, mainImg}) => {
  return (
    <div className='overflow-hidden group cursor-pointer h-full max-h-[600px] max-sm:min-w-[350px] max-md:min-w-[450px] max-lg:min-w-[550px] lg:min-w-[600px] lg:max-w-[600px] rounded-3xl bg-gradient-to-b from-[#f4f8ff] to-[#dbe3f0] shadow hover:scale-[1.03] transition-all duration-500'>
        <div className='flex justify-between p-6'>
            <img src={titleImg} alt="" className=' w-[190px] sm:w-[200px] lg:w-[250px]' />
            <div>
                <button className='  flex justify-center items-center w-13 h-13 rounded-full border-1 border-gray-300 bg-white shadow overflow-hidden'><span className='group-hover:translate-x-7 group-hover:-translate-y-7 transition-all duration-700 '><TwistedArrow/></span></button>
            </div>
        </div>
        <div className='text-[#0f2678] text-2xl sm:text-3xl lg:text-4xl mt-[20px] font-semibold px-8'>
           {title}
        </div>
        <div>
          <p className='text-sm md:text-md lg:text-lg py-1 px-8 text-[#6477b4]'>{para}</p>
        </div>
        <div className=''>
            <img src={mainImg} alt="" className=' h-full w-[390px] sm:w-[400px] lg:w-[450px] object-contain'/>
        </div>
    </div>
  )
}

export default CompanyCard