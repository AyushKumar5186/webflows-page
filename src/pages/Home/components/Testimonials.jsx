import React, { useRef } from 'react'
import Button from '../../../components/Button'
import TestiCards from '../../../components/TestiCards'
import { ArrowLeft, ArrowRight } from 'lucide-react'

const Testimonials = () => {

    const data = [
        {
            id: 1,
            company: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665a14898e725bfc62077709_venture-logo-neutral-600-mega-webflow-template.svg",
            dark: "“MegaAgency’s AI solutions boosted our customer engagement by 40%",
            light: ", streamlining support and enhancing satisfaction”",
            hostImg: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/66634b29249ccc8c97340fe7_sophie-moore-testimonial-avatar-v2-mega-webflow-template.jpg",
            hostName: "Sophie Moore",
            hostPost: "Lead of Finance at Venture"
        },
        {
            id: 2,
            company: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665a14898e725bfc62077720_agency-logo-neutral-600-mega-webflow-template.svg",
            dark: "“Predictive analytics increased our sales forecast accuracy by 35%",
            light: ", refining our marketing strategies”",
            hostImg: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665a38b60757159ffe1d0951_james-davis-testimonial-avatar-mega-webflow-template.jpg",
            hostName: "John Carter",
            hostPost: "Marketing Director at Agency"
        },
        {
            id: 3,
            company: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665a14898e8e5eac9b1e37b7_startup-logo-neutral-600-mega-webflow-template.svg",
            dark: "“AI-driven personalization boosted our conversion rates by 25%",
            light: ", transforming customer experience”",
            hostImg: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665a38b5debc7a29c33c4f50_andy-smith-testimonial-avatar-mega-webflow-template.jpg",
            hostName: "Andy Smith",
            hostPost: "Marketing Director at Startup"
        },
        {
            id: 4,
            company: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665a14898e725bfc62077720_agency-logo-neutral-600-mega-webflow-template.svg",
            dark: "“The AI tools provided by MegaAgency allowed us to optimize our supply chain",
            light: ", reducing logistics costs by 15%”",
            hostImg: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665a38b5debc7a29c33c4f50_andy-smith-testimonial-avatar-mega-webflow-template.jpg",
            hostName: "Lily Woods",
            hostPost: "VP of Technology at Agency"
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