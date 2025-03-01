import React from 'react'
import Button from '../../../components/Button'
import upBright from "../../../assets/upBright.png"

const ContactSection = () => {
  return (
    <section>
        <div className=' my-24'>

            <div className='bg-gradient-to-b from-[#0f2678] to-[#000e41] shadow-2xl shadow-[#000e41]  rounded-4xl relative max-lg:p-4 lg:p-6'>
                <div className=' py-28 z-10 lg:px-10'>
                    <div className='flex justify-between items-center max-lg:flex-col gap-12'>
                    <h3 data-aos = "fade" className='text-4xl  md:text-6xl text-white font-semibold max-lg:w-full max-lg:text-center lg:max-w-[460px] '>It’s time to work with us</h3>
                    <p data-aos = "fade" className='text-md lg:text-lg max-lg:w-full max-w-[350px] text-white max-lg:text-center'><span className='font-bold'>At VCode.Digital</span>, we empower businesses to thrive online. Our expert team crafts custom solutions that connect brands with audiences and drive growth.</p>
                </div>
                <div className='border my-12 border-gray-500/25' data-aos = "fade-left"/>
                <div className='flex justify-between text-white items-center max-lg:flex-col gap-8'>
                    <div data-aos = "fade">
                        <h4 className='text-lg lg:text-xl font-semibold text-white/70  max-lg:text-center'>Send us an email</h4>
                        <p className='text-2xl lg:text-3xl font-semibold max-lg:text-center'>vcode.digital@gmail.com</p>
                    </div>
                    <div data-aos = "fade">
                        <h4 className='text-lg lg:text-xl font-semibold text-white/70 max-lg:text-center'>Give us a call</h4>
                        <p className='text-2xl lg:text-3xl font-semibold max-lg:text-center'>(+91) 6200849251</p>
                    </div>
                    <div data-aos = "fade">
                        <a href="http://api.whatsapp.com/send?phone=6200849251"><Button Variant={"Primary"} Text={"Get in touch"}/></a>
                    </div>
                </div>
                    <img src={upBright} alt="" className='left-0 top-0 object-cover absolute' />
                </div>

            </div>

        </div>
    </section>
  )
}

export default ContactSection