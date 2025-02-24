import React, { useState } from 'react'
import img1 from "../../../assets/1st.png"
import img2 from "../../../assets/2nd.png"
import Accordian from '../../../components/accordian'
import Button from '../../../components/Button'

const TeamSection = () => {
  const [open, setOpen] = useState(false)
  const [openArray, setOpenArray] = useState([1])

  const data = [{
    id: 1,
    title: "About our team",
    desc: "Gravida enim ut velit massa sed tortor ligula risus leo arcu cras amet aenean aliquam ornare amet dolor mi morbi semper nulla vitae rhoncus vel turpis potenti eget orci a hendrerit enim non",
    img: img1

  },{
    id: 2,
    title: "Our mission",
    desc: "Gravida enim ut velit massa sed tortor ligula risus leo arcu cras amet aenean aliquam ornare amet dolor mi morbi semper nulla vitae rhoncus vel turpis potenti eget orci a hendrerit enim non",
    img: img2
  }]
  return (
    <section className='h-full '>
        <div className='h-full bg-gradient-to-b from-[#f4f8ff] to-[#d5e4ff] rounded-4xl px-12 py-20'>
          <div className='flex justify-center items-center mb-12 '>
            <h2 data-aos = "fade" className='text-center text-3xl md:text-4xl lg:text-[48px] lg:leading-16 text-[#0f2678] font-semibold max-lg:w-full lg:max-w-[600px]'>
              A highly skilled team working on your side
            </h2>
          </div>
          <div>
            <div className='grid grid-cols-2 place-items-center max-lg:grid-cols-1 gap-8'>
              <div data-aos = "fade">
                {
                  data.map((item, index)=> (
                    <Accordian open={open} setOpen={setOpen} key={index} item={item}
                    openArray={openArray} setOpenArray={setOpenArray}
                    />
                  ))
                }
              </div>
              <div className='' data-aos = "fade">
                <img src="https://cdn.prod.website-files.com/66574f97bde226d14822ffcf/6662332df498ce8021626f10_about-our-team-tab-image-mega-webflow-template-p-800.jpg" alt="" 
                className='w-full h-full rounded-3xl object-cover object-center'
                />
              </div>
            </div>
          </div>
          <div className='my-8 flex justify-center' data-aos = "fade">
                  <Button Variant={"Tertiary"} Text={"More about us"} classes= "py-3 rounded-2xl text-xl "/>
                </div>

        </div>

    </section>
  )
}

export default TeamSection