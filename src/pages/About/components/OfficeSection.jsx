import React from 'react'
import Button from '../../../components/Button'

const OfficeSection = () => {
    
    return (
        <section>
            <div className=' h-full  container mx-auto  overflow-hidden'>
                <div className='flex items-center flex-col relative z-10 p-6 md:p-16 pb-8 md:pb-8 mt-16'>
                    <h3 data-aos = "fade" className='text-3xl leading-10 max-w-fit sm:max-w-[550px] sm:leading-14 sm:text-4xl md:text-4xl md:leading-16 text-center text-[#0f2678] font-semibold '>A day in the office</h3>
                    <p data-aos = "fade" className='text-md lg:text-lg text-[#6477b4]  max-w-[550px] text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit elit dolor posuere massa volutpat.</p>

                </div>
                <div className='flex justify-center items-center '>
                    <div className='grid grid-cols-1 lg:grid-cols-3 w-full place-items-center'>
                    <div className='grid grid-cols-2 lg:grid-cols-1 gap-4 place-items-center'>
                        <img data-aos = "fade" src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/66636bc5cf03fbb059cddd67_a-day-in-the-office-image-1-mega-webflow-template.jpg" alt="" 
                        className='lg:w-[440px] lg:h-[380px] max-lg:max-w-[280px] max-lg:w-full max-lg:max-h-[220px] max-lg:h-full rounded-3xl  object-cover m-2   lg:scale-95 '
                         />
                        <img data-aos = "fade" src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/66636bc57b0ab49d437e2e77_a-day-in-the-office-image-2-mega-webflow-template.jpg" alt="" 
                        className='lg:w-[440px] lg:h-[380px] max-lg:max-w-[280px] max-lg:w-full max-lg:max-h-[220px] max-lg:h-full  rounded-3xl  object-cover m-2  lg:scale-95'
                        />

                    </div>
                        <div className=' flex justify-center items-center my-4'>
                        <img data-aos = "fade" src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/66636bc591c60b40861891bd_a-day-in-the-office-thumbnail-mega-webflow-template.jpg" alt="" 
                        className='lg:w-[450px] max-lg:w-[1200px] h-[800px] lg:h-[810px] rounded-3xl object-cover lg:scale-95  '
                        />
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-1 gap-4 place-items-center'>
                        <img data-aos = "fade" src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/66636bc5822e34e3b71f6b31_a-day-in-the-office-image-3-mega-webflow-template-p-800.jpg" alt="" 
                        className='lg:w-[440px] lg:h-[280px] max-lg:max-w-[280px] max-lg:w-full max-lg:max-h-[220px] max-lg:h-full rounded-3xl object-cover m-2  lg:scale-95'
                         />
                        <img data-aos = "fade" src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/66636bc54c7ea5feb10ad84b_a-day-in-the-office-image-4-mega-webflow-template-p-800.jpg" alt="" 
                        className='lg:w-[440px] lg:h-[480px] max-lg:max-w-[280px] max-lg:w-full max-lg:max-h-[220px] max-lg:h-full rounded-3xl m-2  object-cover  lg:scale-95'
                        />
                    </div>

                </div>
                </div>
                <div className=''>
                    <div data-aos = "fade" className='flex justify-center items-center mt-10 mb-10'>
                        <Button Variant={"Primary"} Text={"Join our team"} classes='max-sm:w-full'/>
                    </div>

                </div>

            <div data-aos = "fade-left" className='border border-gray-100 mt-36'/>


            </div>
        </section>
    )
}

export default OfficeSection