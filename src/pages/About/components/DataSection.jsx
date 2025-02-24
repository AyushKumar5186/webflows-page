import React from 'react'
import Button from '../../../components/Button'

const DataSection = () => {
  return (
    <section>
        <div className='container mx-auto py-36 lg:px-16'>

            <div className='flex justify-between px-4 md:px-12 max-md:flex-col max-md:justify-center'>
                <h3 data-aos = "fade" className='text-2xl leading-8 max-w-fit md:max-w-[560px] sm:leading-14 sm:text-[32px] md:text-[44px] md:leading-16 text-[#0f2678] font-semibold mb-6'>
                    We started as two founders in New York
                </h3>
                <div className='' data-aos = "fade">
                    <p className='mb-6 md:max-w-[460px] text-[#6477b4]'>Volutpat lacus orci urna porttitor et nec sit id odio pharetra nibh pellentesque elementum in pharetra accumsan aliquet malesuada. A tincidunt aliquet quam neque nibh a euismod ornare eu pretium elit ac magna dignissim.</p>
                    <p className='md:max-w-[450px] text-[#6477b4]'>Congue sagittis venenatis augue erat lacus et donec enim sit odio semper dis molestie suscipit purus et sed semper pellentesque nunc vestibulum rhoncus scelerisque fermentum eget in morbi integer dolor aliquam in mi diam et gravida donec tempus ut lobortis at eget tortor cursus orci gravida dictum utolmer.</p>
                </div>

            </div>

            <div className='border border-gray-100 my-24'/>
            <div className='flex justify-between px-4 md:px-12 max-md:flex-col max-md:justify-center '>
                <div>
                    <h3 className='text-2xl leading-8 max-w-fit md:max-w-[400px] sm:leading-14 sm:text-[32px] md:text-[44px] md:leading-16 text-[#0f2678] font-semibold mb-6' data-aos = "fade">
                    Our mission is to make AI more accessible for all
                </h3>
                <div className='hidden md:flex' data-aos = "fade">
                    <Button Variant={"Primary"} Text={"Join our team"}/>
                </div>
                </div>
                <div className='' data-aos = "fade">
                    <p className='mb-6 md:max-w-[460px] text-[#6477b4]'>Sed sapien risus velit sed rhoncus quam dictum elementum quis libero nulla id ac elementum consectetur turpis velit porta semper in adipiscing elit a hendrerit id non id volutpat pretium enim dictum diam arcu nunc.</p>
                    <p className='md:max-w-[450px] text-[#6477b4]'>Tempus nisi massa eu senectus gravida nunc sem nec non quis non dapibus pretium lacus sagittis rutrum augue tristique mattis risus arcu sapien risus porta.</p>
                    <p className='md:max-w-[450px] text-[#6477b4] mb-10 mt-6'>Sed euismod sed congue gravida eget arcu lacus molestie porttitor lacus augue dolor sit tempus leo neque bibendum oroin neque massa ipsum aenean lorem dui adipiscing diam erat phasellus diam a augue nibh malesuada quis in mauris in.</p>

                    <div className='flex md:hidden' data-aos = "fade">
                    <Button Variant={"Primary"} Text={"Join our team"} classes='max-sm:w-full'/>
                </div>
                </div>

            </div>


        </div>
    </section>
  )
}

export default DataSection