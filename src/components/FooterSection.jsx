import React from 'react'
import bright from '../assets/upBrightFoot.png'
import Button from './Button'
import logo from '../assets/newlogo.png'
import { Link } from 'react-router-dom'


const FooterSection = () => {

    const home = ["Home V1", "Home V2", "Home V3", "Home V4", "Home V5"]
    const aboutBlog = ["About V1", "About V2", "About V3", "Blog V1", "Blog V2", "Blog V3"]
    const careerPrice = ["Careers V1", "Careers V2", "Careers V3", "Pricing V1", "Pricing V2", "Pricing V3"]
    const contact = ["Contact V1", "Contact V2", "Contact V3", "Contact V4", "Contact V5"]
    const templates = ["Start here", "Styleguide", "Licenses", "Changelog", "Documentation"]

    const btnData = [

        "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/6658d29a0463ca78f6582695_facebook-icon-accent-color-mega-webflow-template.svg",
        "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/6658d29ae73b3778232cd0c9_x-icon-accent-color-mega-webflow-template.svg",
        "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/6658d29a9f7b62e6467d5546_instagram-icon-accent-color-mega-webflow-template.svg",
        "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/6658d29a2c79ff3424d46610_youtube-icon-accent-color-mega-webflow-template.svg"

    ]

    return (
        <section >
            <div className='container mx-auto mt-24 mb-12'>
                <div data-aos = "fade" className='h-full w-full bg-gradient-to-b from-[#0f2678] to-[#000e41] rounded-4xl shadow-[#000e41] shadow-2xl relative overflow-hidden max-lg:flex max-lg:justify-center '>

                    <div className='relative z-10 p-10 lg:p-16 '>
                        <div className='flex justify-between items-center max-lg:flex-col max-lg:gap-6'>
                            <div className=''>
                                <h3 data-aos = "fade" className='text-4xl text-white font-semibold max-lg:w-full lg:max-w-[520px] '>
                                Experience the era of Digitalization in your pocket
                            </h3>
                            </div>
                            {/* <div  className='max-sm:flex max-sm:justify-center w-full'>
                                <div data-aos = "fade" className='flex gap-6 items-center max-sm:flex-col w-full'>
                                    <Button Text={"Download for iOS"} classes={"px-4 py-2 rounded-3xl max-sm:w-full"} />
                                    <Button Text={"Download for Android"} classes={"px-4 py-2 rounded-3xl max-sm:w-full"} />

                                </div>
                            </div> */}
                        </div>
                        <div data-aos = "fade-left" className='my-16 border-b-1 border-gray-500/50' />

                        <div  className='flex max-lg:justify-between max-lg:flex-col gap-8 lg:justify-between max-sm:text-center'>
                            <div data-aos = "fade" className='max-sm:flex max-sm:flex-col max-sm:items-center'> 
                                <img src={logo} alt="" />
                                <p className='text-gray-300 max-w-[400px] text-lg my-4'>At VCode.Digital, we empower businesses to thrive online. Our expert team crafts custom solutions that connect brands with audiences and drive growth.</p>
                            <a href="http://api.whatsapp.com/send?phone=6200849251"><Button Variant={"Primary"} Text={"Contact Us"}/></a>
                                {/* <p className='text-md text-white font-semibold pb-3'>Join our newsletter!</p>
                                <div>
                                    <div className='flex bg-white py-2 px-4 rounded-lg lg:w-[400px] max-lg:w-full '>
                                    <input type="text" placeholder='Enter your email' className='placeholder:text-[#6477b4] placeholder:font-semibold w-full' />
                                    <div className='flex max-sm:hidden'>
                                        <Button Variant={"Primary"} Text={"Subscribe"} />
                                    </div>
                                </div>
                                <div className='flex sm:hidden'>
                                    <Button Variant={"Primary"} Text={"Subscribe"} classes='w-full mt-4'/>
                                </div>
                                </div>
                                <div className='py-2'>

                                    <p className='text-md text-white font-semibold'>No spam — Just one email per month.</p>
                                </div> */}
                            </div>
                            {/* <div className='flex gap-10 max-lg:flex-col'>
                                <div>
                                    <div className='text-white text-md mb-8' data-aos = "fade">
                                        Pages
                                    </div>
                                    <div className='flex gap-6 max-lg:flex-wrap' data-aos = "fade">
                                        <div className='flex flex-col'>
                                            {
                                                home.map((item, idx) => (
                                                    <Link key={idx} to={"/"} className='text-gray-300 text-[17px] hover:text-white my-1'>{item}</Link>
                                                ))
                                            }
                                        </div>
                                        <div className='flex flex-col'>
                                            {
                                                aboutBlog.map((item, idx) => (
                                                    <Link key={idx} to={"/"} className='text-gray-300 text-[17px] hover:text-white my-1'>{item}</Link>
                                                ))
                                            }
                                        </div>
                                        <div className='flex flex-col'>
                                            {
                                                careerPrice.map((item, idx) => (
                                                    <Link key={idx} to={"/"} className='text-gray-300 text-[17px] hover:text-white my-1'>{item}</Link>
                                                ))
                                            }
                                        </div>
                                        <div className='flex flex-col'>
                                            {
                                                contact.map((item, idx) => (
                                                    <Link key={idx} to={"/"} className='text-gray-300 text-[17px] hover:text-white my-1'>{item}</Link>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='text-white text-md mb-8' data-aos = "fade">
                                        Template pages
                                    </div>
                                    <div className='flex gap-6'>
                                        <div className='flex flex-col' data-aos = "fade">
                                            {
                                                templates.map((item, idx) => (
                                                    <Link key={idx} to={"/"} className='text-gray-300 hover:text-white  text-[16px] my-1'>{item}</Link>
                                                ))
                                            }
                                        </div>

                                    </div>
                                </div>

                            </div> */}


                        </div>
                        <div data-aos = "fade-left" className='my-12 border-b-1 border-gray-500/50' />
                        <div className='flex justify-between items-center max-sm:flex-col'>
                            <p data-aos = "fade" className='text-gray-300 text-sm my-4 items-center'>Copyright © vcode.digital 2024</p>
                            {/* <div className='flex gap-2' data-aos = "fade">
                                {
                                    btnData.map((item, idx) => (
                                        <button key={idx} className='cursor-pointer flex justify-center items-center h-6 w-6 bg-gradient-to-b from-[#e9f1ff] to-[#b2cdff] rounded-sm'>
                                            <img src={item} alt="" />
                                        </button>
                                    ))
                                }
                            </div> */}

                        </div>
                    </div>
                    <img src={bright} alt="" className=' absolute top-0 left-0 ' />
                    <img src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/6658d89a5f16650350e924eb_footer-dots-mega-webflow-template.svg" alt="" className='object-cover absolute top-0' />


                </div>
            </div>
        </section>
    )
}

export default FooterSection