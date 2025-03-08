import React from 'react'
import Button from '../../../components/Button'

const ValuesSection = () => {

    const Data = [{
    img: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/66636365d8211be9bc73bd64_innovative-thinking-value-icon-mega-webflow-template.png",
    title: "Innovative thinking",
    para: "Embrace bold ideas to drive breakthrough innovation."
  },
  {
    img: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/666363652de955b9aa569468_customer-focus-value-icon-mega-webflow-template.png",
    title: "Customer focus",
    para: "Prioritize client needs for lasting business relationships."
  },
  {
    img: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/6663636691c663618a1a22b8_agile-adaptation-value-icon-mega-webflow-template.png",
    title: "Agile adaptation",
    para: "Quickly adjust strategies to meet dynamic market demands."
  },
  {
    img: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/666363650e31e7c1fc99df8e_collaborative-spirit-value-icon-mega-webflow-template.png",
    title: "Collaborative spirit",
    para: "Foster teamwork to achieve collective success."
  },
  {
    img: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/666363654cff98ead2baa9a2_relentless-excellence-value-icon-mega-webflow-template.png",
    title: "Relentless excellence",
    para: "Pursue perfection with unwavering commitment every day."
  },
  {
    img: "https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/6663636655fd4d9326b87a1b_continuous-improvement-value-icon-mega-webflow-template.png",
    title: "Continuous improvement",
    para: "Constantly evolve processes for superior, innovative outcomes."
  },
  ]

  return (
    <section>
        <div className=' h-full  container mx-auto '>
                <div className='relative overflow-hidden w-full h-full bg-gradient-to-b from-[#f4f8ff] to-[#d5e4ff] rounded-3xl '>
                    <div className='px-16 py-12'>
                      <div className='flex items-center flex-col relative z-10 p-6 md:p-16 pb-8 md:pb-8'>
                        <h3 className='max-sm:text-3xl text-4xl leading-10 max-sm:min-w-96  sm:max-w-[550px] sm:leading-14 sm:text-5xl md:text-6xl md:leading-16 text-center text-[#0f2678] font-semibold ' data-aos = "fade">Our values</h3>
                        <p data-aos = "fade" className='text-md lg:text-lg text-[#6477b4] py-4 max-lg:w-full lg:max-w-[550px] text-center'>We Build Lasting Trust with Every Client, Delivering Excellence in Every Project to Ensure Continuous Success and Growth at Every Step.</p>

                    </div>

                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center '>
                        {
                            Data.map((item, index)=> (
                                <div key={index} className='flex justify-center items-center flex-col m-8' data-aos = "fade">
                        <div>
                            <img src={item.img} alt="" 
                            width={60} height={60} 
                            />
                        </div>
                        <div>
                            <h3 className='text-2xl text-center py-3 text-[#0f2678] font-semibold min-w-[280px]'>{item.title}</h3>

                        </div>
                        <div>
                            <p className='text-lg text-[#6477b4] max-w-fit md:max-w-[280px] text-center'>{item.para}</p>
                        </div>

                    </div>
                            ))
                        }
                    </div>

                    <div className='flex justify-center items-center mt-10' data-aos = "fade"> 
                        <a href="http://api.whatsapp.com/send?phone=6200849251"><Button Variant={"Primary"} Text={"Join our team"} classes=" max-sm:w-full"/></a>
                    </div>
                    </div>

                    <img src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/665a33af130b324860129782_inner-section-dots-top-mega-webflow-template.png" alt="" className=' object-cover object-center absolute top-0'/>


                </div>
            </div>
    </section>
  )
}

export default ValuesSection