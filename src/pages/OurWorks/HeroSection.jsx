import React from 'react'
import BentoGrid from './BentoGrid'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"




import spImg1 from "../../assets/sports/1.png"
import spImg2 from "../../assets/sports/2.png"
import spImg3 from "../../assets/sports/3.png"
import spImg4 from "../../assets/sports/4.png"
import spImg5 from "../../assets/sports/5.png"
import spImg6 from "../../assets/sports/6.png"
import spImg7 from "../../assets/sports/7.png"
import spImg8 from "../../assets/sports/8.png"
import Autoplay from 'embla-carousel-autoplay'


const HeroSection = () => {

  const SportList = {
    img1: spImg1,
    img2: spImg2,
    img3: spImg3,
    img4: spImg4,
    img5: spImg5,
    img6: spImg6,
    img7: spImg7,
    img8: spImg8
  }
  return (
    <section>
      <div className='container mx-auto'>
        <div>
          <div className='w-full flex justify-center items-center flex-col text-center'>
            <h2 data-aos="fade" className='text-center text-3xl md:text-4xl lg:text-[48px] lg:leading-16 text-[#0f2678] font-semibold max-lg:w-full lg:max-w-[600px]'>
              Our works
            </h2>
            <p className="max-w-[395px] text-[#6477b4] text-lg font-normal ">
              From concept to creation, we bring your ideas to life through captivating design, ensuring every project leaves a lasting visual impact.
            </p>
          </div>
        </div>
        <div className='px-12 max-sm:px-4'>
          <div className='bg-gradient-to-b from-[#f4f8ff] to-[#d5e4ff] rounded-3xl my-16 pt-20'>
            <BentoGrid img1={SportList.img1} img2={SportList.img2} img3={SportList.img3} img4={SportList.img4}  />
          </div>

          <div className=' my-36'>
          <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
            <CarouselContent >
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg1} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]
               w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg2} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg3} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg1} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg2} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg3} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg1} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg2} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg3} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>

          <div className='bg-gradient-to-b from-[#f4f8ff] to-[#d5e4ff] rounded-3xl pt-20 my-16'>
            <BentoGrid img1={SportList.img5} img2={SportList.img6} img3={SportList.img7} img4={SportList.img8} />
          </div>

          <div className=' my-36'>
          <Carousel plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}>
            <CarouselContent >
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg1} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]
               w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg2} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg3} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg1} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg2} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg3} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg1} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg2} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src={spImg3} alt="" className='max-lg:max-h-[400px] object-center lg:max-h-[600px]  w-full object-cover rounded-2xl'/></CarouselItem>
            </CarouselContent>
            {/* <CarouselPrevious />
            <CarouselNext /> */}
          </Carousel>
        </div>
        </div>
        
      </div>
    </section>
  )
}

export default HeroSection