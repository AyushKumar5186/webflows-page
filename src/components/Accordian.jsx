import React, { useState } from 'react'
import img1 from "../assets/1st.png"
import DownArrow from '../icons/DownArrow'

const Accordian = ({open , setOpen, item, openArray, setOpenArray}) => {
    
  return (
    <div>
        <div className='flex gap-4 items-start max-sm:flex-col  max-w-full cursor-pointer hover:scale-[1.03] transition-all duration-1000 py-4'
        onClick={() =>
  setOpenArray((prev) =>
    prev.includes(item.id) ? prev.filter((x) => x !== item.id) : [...prev, item.id]
  ) }
        >
            <div className='shadow rounded-2xl'>
                <img src={item.img} alt="" height={42} width={42} />
            </div>
            <div className=''>
                <div className='flex justify-between items-center'>
                <h3 className='text-3xl text-[#0f2678] font-semibold mb-4'>{item.title}</h3>
                <button className={` h-8 w-8  shadow  rounded-full  flex justify-center items-center transition-all duration-700 ${openArray.find(x=> x===item.id) ? 'bg-gradient-to-b from-[#679cff] to-[#2370ff] text-white shadow shadow-white' : 'text-gray-500 border-gray-400 -rotate-90 bg-white'}`}>
                    <DownArrow/>
                </button>
            </div>
                
                {
                    <p className={`max-w-[395px] text-[#6477b4] text-lg font-normal transition-all duration-1000 ${openArray.find(x=> x===item.id) ? 'opacity-100' : 'opacity-0'}`}>{item.desc}</p>
                }
            </div>


        </div>
    </div>
  )
}

export default Accordian