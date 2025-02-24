import React from 'react'
import img1 from "../assets/aiMain1.jpg"
import Button from './Button'

const NewsCard = ({item}) => {
  return (
    <div className='max-lg:w-full max-sm:max-h-[380px] max-md:max-h-[380px] lg:max-w-[420px]  mt-4 group cursor-pointer max-sm:my-8 sm:my-16 md:my-20'>
        <div className='max-lg:w-full lg:max-w-[420px]  max-sm:max-h-[380px] max-md:max-h-[380px] lg:max-h-[350px] overflow-hidden rounded-2xl shadow border-none'>
            <img src={item.img} alt=""  className='object-cover shadow w-full h-full group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500'/>
        </div>

        <div>
            <h3 className='text-black text-2xl py-4 font-semibold group-hover:text-[#2370ff]'>
                {item.title}
            </h3>
            <div className='flex items-center gap-6'>
                <Button Variant={"Fourth"} Text={item.btnText}/>
                <p className='text-[#6477b4] text-xl font-semibold max-w-[620px] '>June 21, 2024</p>
            </div>
        </div>

    </div>
  )
}

export default NewsCard