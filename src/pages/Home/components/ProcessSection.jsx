
import { useState } from "react"
import img1 from "../../../assets/btn-img1.png"
import img2 from "../../../assets/btn-img2.png"
import img3 from "../../../assets/btn-img3.png"
import img4 from "../../../assets/btn-img4.png"

import mainImg1 from "../../../assets/mainImg1.jpg"
import mainImg2 from "../../../assets/mainImg2.jpg"
import mainImg3 from "../../../assets/mainImg3.jpg"
import mainImg4 from "../../../assets/mainImg4.jpg"


const ProcessSection = () => {

    const [label, setLabel] = useState("1. Discovery")

    const btnData = [{
        img: img1,
        label: "1. Discovery"
    }, {
        img: img2,
        label: "2. Strategy"
    }, {
        img: img3,
        label: "3. Execution"
    }, {
        img: img4,
        label: "4. Analysis"
    }]

    const data = [{

        mainImg: mainImg1,
        title: "1. Discovery",
        main: "Understanding Your Business",
        para: "We begin by deeply understanding your brand, audience, and goals"

    },
    {

        mainImg: mainImg2,
        title: "2. Strategy",
        main: "Custom-Tailored Solutions",
        para: "Our experts develop a custom plan precisely aligned with your business needs"

    },
    {

        mainImg: mainImg3,
        title: "3. Execution",
        main: "Bringing Your Vision to Life",
        para: "From digital campaigns and website development to multimedia production, we transform your vision into reality"

    },
    {

        mainImg: mainImg4,
        title: "4. Analysis",
        main: "Ensuring Last-Term Success",
        para: "We continuously monitor and optimize our strategies to secure lasting success."

    },
    ]


    return (
        <section>
            <div className=' pt-24'>
                <div>
                    <div className='flex flex-col items-center text-center justify-center'>
                        <h3 data-aos = "fade" className='text-3xl sm:text-3xl md:text-4xl lg:text-5xl text-[#0f2678] max-w-[980px] font-semibold '>Learn how our process work</h3>
                        <p data-aos = "fade" className='text-[#6477b4] mb-3 text-md lg:text-lg font-normal max-w-[620px] py-6'>Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis sit phasellus mollis sit aliquam sit nullam neques.</p>
                    </div>
                </div>
                <div className='flex justify-center w-full'>
                    <div className='flex gap-8 max-lg:flex-wrap' data-aos = "fade">
                        {
                            btnData.map((data, index) => (
                                <button className='px-6 border border-gray-200/50 py-3 rounded-xl shadow-md flex items-center gap-3 hover:ring hover:ring-blue-500 cursor-pointer max-sm:w-full'
                                    key={index}
                                    onClick={() => setLabel(data.label)}
                                >
                                    <img src={data.img} alt="" width={40} height={40}
                                        className='rounded-xl shadow'
                                    />
                                    <p className='text-xl text-[#6477b4] font-semibold'>{data.label}</p>
                                </button>
                            ))
                        }
                    </div>
                </div>
                <div className='flex justify-center my-16 ' data-aos = "fade">

                        {
                            data.filter(x => x.title === label).map((item, idx) => (
                    <div className='w-full max-w-[1200px]  h-full rounded-2xl shadow-xl border-2 border-gray-200/50 py-6'>
                                <div key={idx} className='grid grid-cols-2 place-items-center transition-all duration-1000 max-lg:grid-cols-1'>
                                    <div className='flex flex-col  h-full p-6  lg:p-12'>
                                        <h3 className='text-xl md:text-2xl lg:text-3xl text-[#6477b4] font-semibold'>{item.title}</h3>
                                        <div className='max-lg:mt-4 lg:mt-48'>
                                            <h3 className=' text-[#0f2678] max-w-[600px] text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold w-full'>
                                                {item.main}
                                            </h3>
                                            <p className='text-[#6477b4] text-lg font-normal w-full lg:max-w-[500px] py-6'>{item.para}</p>
                                        </div>
                                    </div>
                                    <div className=' lg:p-12 max-lg:px-6 max-lg:w-full'>
                                        <img src={item.mainImg} alt="" className='max-lg:max-h-[500px] max-lg:w-full rounded-2xl shadow' />
                                    </div>
                                    <div>

                                    </div>
                                </div>
                    </div>
                            ))
                        }


                </div>
            </div>
        </section >
    )
}

export default ProcessSection