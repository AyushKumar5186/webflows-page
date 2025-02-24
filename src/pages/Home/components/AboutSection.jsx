import React from 'react'
import Button from '../../../components/Button'

const AboutSection = () => {
    return (
        <section>
            <div className='mt-40 lg:px-8'>
                <div className=' border-b-1 border-gray-500/10 my-32'/>
                <div>
                    <div className='flex justify-between items-center max-lg:flex-col gap-6'>
                        <h3 data-aos = "fade" className='max-lg:text-center text-4xl md:text-5xl lg:text-6xl lg:leading-16 text-[#0f2678] font-semibold max-lg:w-full max-w-[500px]'>It’s time to make AI work for you</h3>
                        <p data-aos = "fade" className='text-[#6477b4] text-[16px] lg:text-lg font-normal max-lg:w-full max-w-[400px] max-lg:text-center  lg:py-4'>Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis sit phasellus mollis sit aliquam sit nullam neques.</p>
                    </div>
                    <div className='my-16 border-b-1 border-gray-500/10'/>
                    <div className=''>
                        
                    <div className='flex justify-between text-white items-center max-lg:flex-col gap-8'>
                    <div data-aos = "fade">
                        <h4 className='text-lg lg:text-2xl font-semibold text-[#6477b4]  max-lg:text-center'>Send us an email</h4>
                        <p className='text-2xl lg:text-4xl font-semibold text-[#0f2678] max-lg:text-center'>contact@megaagency.com</p>
                    </div>
                    <div data-aos = "fade">
                        <h4 className='text-lg lg:text-2xl font-semibold text-[#6477b4] max-lg:text-center'>Give us a call</h4>
                        <p className='text-2xl lg:text-4xl font-semibold text-[#0f2678] max-lg:text-center'>(991) 234 - 9871</p>
                    </div>
                    <div data-aos = "fade">
                        <Button Variant={"Primary"} Text={"Get in touch"}/>
                    </div>
                </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}

export default AboutSection