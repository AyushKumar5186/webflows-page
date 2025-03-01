import React from 'react'
import Button from '../../../components/Button'

const HeroSection = () => {
  return (
    <section>
        <div className=' h-full container mx-auto'>
                <div className='relative overflow-hidden w-full h-full bg-gradient-to-b from-[#f4f8ff] to-[#d5e4ff] rounded-3xl pt-20 ' data-aos = "fade">
                    <div className='flex items-center flex-col relative z-10 p-6 md:p-14 md:pb-0 pb-0'>
                        <h3 data-aos = "fade" className='text-4xl leading-10 max-w-fit sm:max-w-[550px] sm:leading-14 sm:text-5xl md:text-6xl md:leading-16 text-center text-[#0f2678] font-semibold '>Learn more about Vcode.digital's mission as a agency</h3>
                        <p data-aos = "fade" className='text-md lg:text-lg text-[#6477b4] py-4 max-w-[550px] text-center'>At VCode Digital, our mission is clear: empower businesses to thrive online. We began as two passionate founders in Ranchi, Jharkhand and have grown into a dynamic team of digital experts committed to transforming brands through innovative marketing and technology</p>
                        <div data-aos = "fade" className='flex justify-center flex-col sm:flex-row gap-4 sm:gap-8 items-center w-full'>
                            <a href="http://api.whatsapp.com/send?phone=6200849251"><Button Variant={"Primary"} Text={"Join our team"} classes=" max-sm:w-full"/></a>
                            {/* <Button Variant={"Tertiary"} Text={"Learn more"} classes=" max-sm:w-full"/> */}
                        </div>

                        <img data-aos = "fade" src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/66635d01eae52fb2ab230ca5_about-page-hero-image-mega-webflow-template.jpg" alt="" 
                        className='w-full h-full mt-8 rounded-t-3xl'
                        />

                    </div>

                    <img data-aos = "fade" src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665a11c7bd7957e68e40801b_home-v1-hero-dots-bg-mega-webflow-ecommerce-template.png" alt="" 
                    className='absolute w-full h-full object-cover top-0 '
                    />
                    <img data-aos = "fade" src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665a11c7002673cfed800afa_home-v1-hero-gradient-mega-webflow-template.png" alt="" 
                    className='absolute w-full h-full  top-0 '
                    />



                </div>
            </div>
    </section>
  )
}

export default HeroSection