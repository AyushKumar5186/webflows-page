import React from 'react'
import Button from '../../../components/Button'
import NewsCard from '../../../components/NewsCard'
import img1 from "../../../assets/aiMain1.jpg"
import img2 from "../../../assets/aiMain2.jpg"
import img3 from "../../../assets/aiMain3.jpg"


const NewsSection = () => {

    const data = [
        {
            id: 1,
            img: img1,
            title: "How to fine-tune the LLAMA 3 LLM using PyTorch library",
            btnText: "Development",
        },
        {
            id: 2,
            img: img2,
            title: "Which is the best AI model for copywriting this year?",
            btnText: "Marketing",
        },
        {
            id: 3,
            img: img3,
            title: "Unlock usability research insights with modern AI models",
            btnText: "Design",
        },

    ]
    return (
        <section>
            <div className=' h-full lg:px-12  mt-24'>
                <div>
                    <div className='flex justify-between items-center max-lg:flex-col max-lg:gap-4 max-lg:items-start'>
                        <div>
                            <h3 data-aos = "fade" className='text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-16 text-[#0f2678] font-semibold max-w-[540px]'>Read our latest AI news</h3>
                            <p data-aos = "fade" className='text-[#6477b4] text-lg font-normal max-w-[500px] lg:py-4'>Lorem ipsum dolor sit amet consectetur ut consequat luctus a ornare auctor mauris necolmer doloe</p>
                        </div>
                        <Button data-aos = "fade" Variant={"Tertiary"} Text={"Browse all articles"} />
                    </div>
                    <div className='grid grid-cols-3 gap-8  max-lg:grid-cols-1 ' data-aos = "fade">
                        {
                            data.map((item )=> (
                                <NewsCard key={item.id} item={item}/>
                            ))
                        }
                    </div>

                    
                </div>


            </div>
        </section>
    )
}

export default NewsSection