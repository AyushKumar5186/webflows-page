import React from 'react'
import img from "../assets/main-1.png"
import sub from "../assets/1sub1.png"

const SpecialCard = ({ item }) => {
    return (
        <div className='flex justify-start lg:w-[460px] lg:h-[400px]  items-center border-[3px] border-b-4 border-gray-200/50 max-lg:w-full lg:max-w-[460px] p-8  rounded-3xl shadow-xl'>
            <div className='  '>
                <div className='flex gap-4 items-center py-2'>
                    <img src={item.mainImg} alt="" width={40} height={40} />
                    <h3 className='text-[26px] text-[#0f2678] font-semibold'>{item.title}</h3>
                </div>
                <p className='text-[#6477b4] text-md font-normal max-w-[360px]'>
                    {item.para}
                </p>
                <div className='flex flex-col gap-2 py-4'>
                    {
                        item.sub.map((data, index) => (
                            <div className='flex gap-2 items-center'>
                                <img src={data.img} alt="" width={25} height={25} />
                                <h4 className='text-lg text-[#152e89] font-semibold '>{data.text}</h4>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default SpecialCard