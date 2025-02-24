import React from 'react'
import SpecialCard from '../../../components/SpecialCard'

import main1 from "../../../assets/main-1.png"
import main2 from "../../../assets/main-2.png"
import main3 from "../../../assets/main-3.png"
import main4 from "../../../assets/main-4.png"

import sub11 from "../../../assets/1sub1.png"
import sub12 from "../../../assets/1sub2.png"
import sub13 from "../../../assets/1sub3.png"
import sub14 from "../../../assets/1sub4.png"

import sub21 from "../../../assets/2sub1.png"
import sub22 from "../../../assets/2sub2.png"
import sub23 from "../../../assets/2sub3.png"
import sub24 from "../../../assets/2sub4.png"

import sub31 from "../../../assets/3sub1.png"
import sub32 from "../../../assets/3sub2.png"
import sub33 from "../../../assets/3sub3.png"
import sub34 from "../../../assets/3sub4.png"

import sub41 from "../../../assets/4sub1.png"
import sub42 from "../../../assets/4sub2.png"
import sub43 from "../../../assets/4sub3.png"
import sub44 from "../../../assets/4sub4.png"
import Button from '../../../components/Button'

const SpecialSection = () => {

    const SpecialData = [{
        title: "AI consultation and strategy",
        para: "Vitae sit nec id diam. Aliquam cras lacus egestas augue purus fringilla. Neque viverra scelerisque nunc ac aliquam lacus vulputate.",
        mainImg: main1,
        sub: [
            {
                img: sub11,
                text: "AI strategy assessment"
            },
            {
                img: sub12,
                text: "AI opportunity identification"
            },
            {
                img: sub13,
                text: "AI roadmap development"
            },
            {
                img: sub14,
                text: "AI implementation planning"
            },

        ]
    },
    {
        title: "Training data optimization",
        para: "Ullacorper scelerisque vel tincidunt felis cursus amet blandit pretium rutrum viverra at faucibus molestie dolor facilisis sed risus morbi felis facilisi.",
        mainImg: main2,
        sub: [
            {
                img: sub21,
                text: "Data collection and curation"
            },
            {
                img: sub22,
                text: "Data labeling and annotation"
            },
            {
                img: sub23,
                text: "Data augmentation techniques"
            },
            {
                img: sub24,
                text: "Synthetic data generation"
            },
            
        ]
    },
    {
        title: "Model fine-tuning",
        para: "A arcu id in libero facilisis proin nulla sagittis tellus in erat proin sodales sapien aed pellentesque a ipsum sed tortor odio consequat elementum est sagittis.",
        mainImg: main3,
        sub: [
            {
                img: sub31,
                text: "Transfer learning strategies"
            },
            {
                img: sub32,
                text: "Hyperparameter optimization"
            },
            {
                img: sub33,
                text: "Continual learning approaches"
            },
            {
                img: sub34,
                text: "Few-shot learning techniques"
            },
            
        ]
    },
    {
        title: "Hardware optimization",
        para: "Morbi adipiscing ullamcorper lectus curabitur adipiscing dignissim sed id morbi arcu eget lectus pharetra neque ultrices et suspendisse enim justo.",
        mainImg: main4,
        sub: [
            {
                img: sub41,
                text: "Hardware-software co-design"
            },
            {
                img: sub42,
                text: "Model compression and pruning"
            },
            {
                img: sub43,
                text: "Accelerator selection and integration"
            },
            {
                img: sub44,
                text: "Distributed training infrastructure"
            },
            
        ]
    }
    ]
  return (
    <section>
        <div className=' h-full  mt-36'>
            <div>
                <div className='flex justify-center flex-col gap-8 items-center text-center my-8'>
                    <h2 data-aos = "fade" className='text-4xl md:text-5xl text-[#0f2678] max-lg:w-full lg:max-w-[980px] font-semibold'>We offer a comprehensive range of specialized AI & ML services</h2>
                    <p data-aos = "fade" className='text-[#6477b4] text-md md:text-lg font-normal max-w-[600px]'>Lorem ipsum dolor sit amet consectetur adipiscing elidolor mattis sit phasellus mollis sit aliquam sit nullam neques.</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div data-aos = "fade" className='w-full grid lg:grid-cols-2 max-lg:grid-cols-1 place-items-center gap-8 max-w-[940px]'>
                {
                    SpecialData.map((item, index)=> (
                        <SpecialCard key={index} item={item}/>
                    ))
                }
            </div>
            </div>
            <div data-aos = "fade" className='flex justify-center items-center gap-6 mt-12 mb-36 max-sm:flex-col'>
                <Button Variant={"Primary"} Text={"Get in touch"} classes='max-sm:w-full'/>
                <Button Variant={"Tertiary"} Text={"Browse all services"} classes='max-sm:w-full'/>
            </div>

        </div>
    </section>
  )
}

export default SpecialSection