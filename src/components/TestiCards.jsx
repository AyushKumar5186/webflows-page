import React from 'react'

const TestiCards = ({item}) => {
  return (
    <div className='min-w-[300px] sm:min-w-[400px] md:min-w-[600px] lg:min-w-[800px] lg:min-h-[540px] lg:max-h-[600px] h-full rounded-3xl shadow border-b-4 border-2 border-gray-200/50 bg-white max-lg:p-6 lg:p-12 mt-12 hover:scale-[1.03] transition-all duration-500'>
                <div>
                    <img src={item.company} alt="" 
                    className='lg:w-[200px] md:w-[180px] sm:w-[150px] w-[130px]'
                    />
                </div>
                <div>
                    <h4 className='text-2xl lg:text-3xl text-[#0f2678] font-semibold max-w-[560px] py-8'>
                        {item.dark} <span className='text-[#6477b4]'>{item.light}</span>
                    </h4>
                </div>
                <div className='flex gap-4 items-center pt-16 max-lg:flex-col max-lg:items-start'>
                    <img src={item.hostImg} alt="" 
                    width={65} height={65} className='rounded-full'
                    />
                    <div className=''>
                        <div className='text-xl lg:text-2xl text-[#0f2678] font-semibold'>
                            {item.hostName}
                        </div>
                        <div className='text-[#6477b4] text-md lg:text-xl font-semibold'>
                            {item.hostPost}
                        </div>
                    </div>
                </div>
                </div>
  )
}

export default TestiCards