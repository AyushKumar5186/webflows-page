import React, { useRef } from 'react'
import Button from '../../../components/Button'
import CompanyCard from '../../../components/CompanyCard'
import img1 from "../../../assets/c-img1.png"
import img2 from "../../../assets/c-img2.png"
import img3 from "../../../assets/c-img3.png"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";



const CompanySection = () => {

    const data = [
        {
            id: 1,
            titleImg: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/666205cceca17cc0b36f1df9_enterprise-logo-color-accent-mega-webflow-template.svg",
            title: "Revolutionizing web analytics with AI-Powered insights",
            mainImg: img1
        },
        {
            id: 2,
            titleImg: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/666205cd8c1c1c379b04255e_company-logo-color-accent-mega-webflow-template.svg",
            title: "Transforming fintech with AI-Driven customer support",
            mainImg: img2
        },
        {
            id: 3,
            titleImg: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/666205cce426caf5dc527c2c_agency-logo-color-accent-mega-webflow-template.svg",
            title: "Enhancing code generation with smart AI fine-tuning",
            mainImg: img3
        },


    ]

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

    return (
        <section className='h-full mt-22  '>
            <div className=''>
                <div className='flex justify-between lg:items-center  max-lg:flex-col lg:px-28'>
                    <div>
                        <h3 data-aos = "fade" className='text-[#0f2678] font-semibold tracking-wide  text-3xl md:text-4xl  lg:text-[48px] w-full max-w-[700px] lg:leading-14'>We helped a lot of companies to improve their products</h3>
                    </div>
                    <div data-aos = "fade" className='max-lg:py-4'>
                        <Button Text={'Browse all projects'} Variant={"Tertiary"} />

                    </div>
                </div>
                <div className=" w-full overflow-hidden lg:mt-12" >
                    

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth  lg:pl-28 max-lg:py-12"
                        data-aos = "fade"
                    >
                        {
                            data.map((item) => (
                                <CompanyCard key={item.id} title={item.title} titleImg={item.titleImg} mainImg={item.mainImg} />
                            ))
                        }
                    </div>

                    <div className='flex  justify-between py-8 lg:px-28 mb-24' data-aos = "fade" >

                        <button className='  flex justify-center items-center w-13 h-13 rounded-full border-1 border-gray-300 bg-white shadow  hover:scale-[1.08] transition-all duration-300'
                        onClick={scrollLeft}
                        ><ArrowLeft size={26} strokeWidth={1.2}/></button>

                        <button className='  flex justify-center items-center w-13 h-13 rounded-full border-1 border-gray-300 bg-white shadow  hover:scale-[1.08] transition-all duration-300'
                        onClick={scrollRight}
                        ><ArrowRight size={26} strokeWidth={1.2}/></button>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default CompanySection