import React, { useRef } from 'react'
import Button from '../../../components/Button'
import TestiCards from '../../../components/TestiCards'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import img1 from "../../../assets/1.png"
import img2 from "../../../assets/2.png"
import img3 from "../../../assets/3.png"
import img4 from "../../../assets/4.png"
import img5 from "../../../assets/5.png"

import harsh from "../../../assets/client/harsh.jpg"
import harsh2 from "../../../assets/client/harsh2.jpg"
import akash from "../../../assets/client/akash.jpg"
import athiya from "../../../assets/client/athiya.jpg"

const Testimonials = () => {

    const data = [
        {
            id: 1,
            company: img1,
            dark: "“Thanks to Vcode digital's design team, our brand recognition increased by 40%",
            light: "and social media engagement grew by 25% in just three months!”",
            hostImg: akash,
            hostName: "Akash Arora",
            hostPost: "Samsung Smart Plaza"
        },
        {
            id: 2,
            company: img2,
            dark: "“The new website not only looks great but reduced our bounce rate by 50% ",
            light: "and boosted conversions by 30%. Timely and efficient service!”",
            hostImg: harsh,
            hostName: "Harsh Agarwal",
            hostPost: "Oppo Showroom"
        },
        {
            id: 3,
            company: img3,
            dark: "“Our lead generation jumped 60% and ROI on ads was 4x higher after working with Vcode digital",
            light: " Their data-driven approach is spot on!”",
            hostImg: harsh2,
            hostName: "Harsh Agarwal",
            hostPost: "Chicago Pizza"
        },
        {
            id: 4,
            company: img4,
            dark: "“In 6 months, we saw a 150% increase in traffic, a 35% sales boost, and a 20% increase in retention.",
            light: " Vcode digital's holistic approach really works!”",
            hostImg: athiya,
            hostName: "Roshan Kumar",
            hostPost: "Athiya Interiors"
        },

    ]

     const scrollRef = useRef(null);
    
      const scrollLeft = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: -500, behavior: "smooth" });
        }
      };
    
      const scrollRight = () => {
        if (scrollRef.current) {
          scrollRef.current.scrollBy({ left: 500, behavior: "smooth" });
        }
      };
    return (
        <section >
            <div className=' h-full '>
                <div className=' h-full bg-gradient-to-b from-[#f4f8ff] to-[#d5e4ff] rounded-4xl py-20 '>
                    <div className='flex justify-between lg:items-center max-lg:items-start px-4  lg:px-28 max-lg:flex-col max-lg:gap-4'>
                        <h3 data-aos = "fade" className='text-3xl md:text-4xl lg:text-[48px] lg:leading-16 text-[#0f2678] font-semibold w-full lg:max-w-[540px]'>What did our past clients say about us?</h3>
                        <Button Variant={"Primary"} Text={"Get in touch"} />
                    </div>

                    <div className=" w-full overflow-hidden max-lg:px-3">
                        <div
                        data-aos = "fade"
                            ref={scrollRef}
                            className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth w-full  py-16 lg:pl-16 lg:pr-[400px]"
                        >
                            {
                                data.map((item) => (
                                    <TestiCards key={item.id} item={item} />
                                ))
                            }
                        </div>

                        <div className='flex lg:px-28 justify-between max-lg:px-4' data-aos = "fade">

                            <button className='  flex justify-center items-center w-13 h-13 rounded-full border-1 border-gray-300 bg-white shadow  hover:scale-[1.08] transition-all duration-300'
                                onClick={scrollLeft}
                            ><ArrowLeft size={26} strokeWidth={1.2} /></button>

                            <button className='  flex justify-center items-center w-13 h-13 rounded-full border-1 border-gray-300 bg-white shadow  hover:scale-[1.08] transition-all duration-300'
                                onClick={scrollRight}
                            ><ArrowRight size={26} strokeWidth={1.2} /></button>

                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}

export default Testimonials