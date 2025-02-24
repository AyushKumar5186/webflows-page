import React from 'react'
import Button from '../../../components/Button'

const PositionSection = () => {

    const Data = [{

        title: "Senior front-end developer",
        btn: "Development",
        para: "Lorem ipsum dolor sit amet consectetur omerol adipiscing",
        location: "San Francisco, CA",
        time: "Full Time"

    },
    {

        title: "UI/UX product designer",
        btn: "Design",
        para: "Lorem ipsum dolor sit amet consectetur omerol adipiscing",
        location: "New York, NY",
        time: "Full Time"

    },
    {

        title: "Digital marketing specialist",
        btn: "Marketing",
        para: "Lorem ipsum dolor sit amet consectetur omerol adipiscing",
        location: "Remote",
        time: "Full Time"

    },
    ]
    return (
        <section>
            <div className=' h-full  container mx-auto  overflow-hidden'>
                <div className='flex items-center flex-col relative z-10 p-6 md:p-16 pb-8 md:pb-8 mt-16'>
                    <h3 data-aos = "fade" className='text-4xl leading-10 max-w-fit sm:max-w-[640px] sm:leading-14 sm:text-4xl md:text-5xl md:leading-16 text-center text-[#0f2678] font-semibold max-sm:my-4'>Open positions</h3>
                    <p data-aos = "fade" className='text-md lg:text-lg text-[#6477b4]  max-w-[550px] text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis sit phasellus mollis sit aliquam sit nullam neques.</p>

                </div>
                <div className='grid grid-cols-1 place-items-center gap-6 my-4'>
                    {
                        Data.map((item, idx) => (
                            <div data-aos = "fade" key={idx} className=' max-w-[650px] w-full min-h-[200px] h-full rounded-3xl shadow-[inset_0_-2px_8px_rgba(0,0,0,0.3)] py-8 px-8 group hover:scale-[1.01] transition-all duration-1000 cursor-pointer 
                            '>
                                <div className='flex gap-4 lg:items-center max-sm:flex-col-reverse'>
                                    <h3 className='text-[#0f2678] max-sm:text-xl font-semibold text-2xl max-w-[500px] group-hover:text-blue-600'>{item.title}</h3>
                                    <Button Variant={"Fourth"} Text={item.btn} classes='max-sm:w-fit'/>
                                </div>
                                <div>
                                    <p className='text-md lg:text-lg text-[#6477b4]  max-w-[550px] py-4'>{item.para}</p>
                                </div>
                                <div className='flex gap-20 items-center '>
                                    <div className='flex items-center gap-2'>
                                        <img src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/66677caa7a944e27a6f976e5_location-career-icon-mega-webflow-template.png" alt=""
                                            width={20} height={20} />
                                        <p className='text-[#0f2678] text-lg max-sm:text-md font-semibold'>{item.location}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <img src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/66677caa7ea47f24be5b0b78_working-time-career-icon-mega-webflow-template.png" alt="" width={20} height={20} />
                                        <p className='text-[#0f2678] text-lg font-semibold max-sm:text-md'>{item.time}</p>
                                    </div>

                                </div>

                            </div>
                        ))
                    }
                </div >

                <div className='flex justify-center my-6  overflow-hidden'>
                    <div data-aos = "fade" className=' max-w-[650px] w-full min-h-[200px] h-full rounded-3xl shadow-[inset_0_-2px_8px_rgba(0,0,0,0.3)] py-8 group hover:scale-[1.01] transition-all duration-1000 cursor-pointer bg-gradient-to-b from-[#0f2678] to-[#000e41] relative z-10 overflow-hidden    
                            '>
                                <div className='px-8'>
                                    <h3 className='text-white text-2xl text-center font-semibold max-w-[600px] py-3'>Are you ready to be part of something amazing? Browse all our open positions.</h3>
                        <div className='flex justify-center items-center mt-10'>
                        <Button Variant={"Primary"} Text={"Join our team"} classes='max-sm:w-full' />
                    </div>

                                </div>
                    <img src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/6663957446313d725198d047_title-and-button-link-card-bg-top-mega-webflow-template-p-800.png" alt=""
                        className='object-cover absolute top-0  object-center'
                    />

                    </div>
                </div>

            </div>
        </section>
    )
}

export default PositionSection