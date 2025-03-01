import React, { useRef } from 'react'
import Button from '../../../components/Button'
import CompanyCard from '../../../components/CompanyCard'
import img1 from "../../../assets/compo1.png"
import img3 from "../../../assets/compo3.png"
import img2 from "../../../assets/compo2.png"
import titleimg1 from "../../../assets/7.png"
import titleimg2 from "../../../assets/8.png"
import titleimg3 from "../../../assets/9.png"
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";


const CompanySection = () => {

    const data = [
        {
            id: 1,
            titleImg: titleimg1,
            title: "Social media management",
            para: "Build your brand’s community across all major platforms with tailored campaigns that drive engagement and loyalty",
            mainImg: img1
        },
        {
            id: 2,
            titleImg: titleimg2,
            title: "Web Design & Development",
            para: "Create responsive, user-friendly websites that provide an outstanding digital experience",
            mainImg: img2
        },
        {
            id: 3,
            titleImg: titleimg3,
            title: "Creative visual production",
            para: "Our Creative Visual Production services bring your brand to life through dynamic advertising videos, state-of-the-art CGI ads, and precise product shoots that capture every detail with flair.",
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
                        <h3 data-aos = "fade" className='text-[#0f2678] font-semibold tracking-wide  text-3xl md:text-4xl  lg:text-[48px] w-full max-w-[700px] lg:leading-14'><span className='font-bold'>What we do</span> to improve your digital presence</h3>
                    </div>
                    <div data-aos = "fade" className='max-lg:py-4'>
                        <Button Text={'Browse all projects'} Variant={"Tertiary"} />

                    </div>
                </div>
                <div className=" w-full overflow-hidden lg:mt-12" >
                    

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth  lg:pl-28 max-lg:py-12 lg:py-16"
                        data-aos = "fade"
                    >
                        {
                            data.map((item) => (
                                <CompanyCard key={item.id} title={item.title} para={item.para} titleImg={item.titleImg} mainImg={item.mainImg} />
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