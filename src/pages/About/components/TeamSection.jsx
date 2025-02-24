import React from 'react'
import Button from '../../../components/Button'

const TeamSection = () => {
    const Data = [{
        img: "https://cdn.prod.website-files.com/666755dfece26c866cdd0380/666c7dac2984ae078ea2000e_john-carter-team-member-thumbnail-mega-webflow-template-p-1080.jpg",
        name: "John Carter",
        post: "CEO & Founder"
    },
    {
        img: "https://cdn.prod.website-files.com/666755dfece26c866cdd0380/666c7d585fe6370f13209a76_sophie-moore-team-member-thumbnail-mega-webflow-template-p-1080.jpg",
        name: "Sophie Moore",
        post: "CTO & Co-founder"
    },
    {
        img: "https://cdn.prod.website-files.com/666755dfece26c866cdd0380/666c7d12d53b7d6ccdcc022f_matt-cannon-team-member-thumbnail-mega-webflow-template-p-1080.jpg",
        name: "Matt Cannon",
        post: "VP of Design"
    },
    {
        img: "https://cdn.prod.website-files.com/666755dfece26c866cdd0380/666c7cdb20207d396116e8ef_lily-woods-team-member-thumbnail-mega-webflow-template-p-1080.jpg",
        name: "Lilly Woods",
        post: "VP of Product"
    },
    {
        img: "https://cdn.prod.website-files.com/666755dfece26c866cdd0380/666c7c9b2fed3a4fdeae7cbd_andy-smith-team-member-thumbnail-mega-webflow-template-p-1080.jpg",
        name: "Andy Smith",
        post: "VP of Marketing"
    },
    {
        img: "https://cdn.prod.website-files.com/666755dfece26c866cdd0380/666c7c4920207d3961167554_kathie-corl-team-member-thumbnail-mega-webflow-template-p-1080.jpg",
        name: "Kathie Corl",
        post: "VP of Engineering"
    },
    ]
    return (
        <section>
            <div className=' h-full  container mx-auto  overflow-hidden'>
                <div className='flex items-center flex-col relative z-10 p-6 md:p-16 pb-8 md:pb-8 mt-16'>
                    <h3 data-aos = "fade" className='text-4xl leading-10 max-w-fit sm:max-w-[640px] sm:leading-14 sm:text-4xl md:text-5xl md:leading-16 text-center text-[#0f2678] font-semibold '>Meet the team behind Mega</h3>
                    <p data-aos = "fade" className='text-md lg:text-lg text-[#6477b4]  max-w-[550px] text-center'>Lorem ipsum dolor sit amet consectetur adipiscing elit dolor posuere vel venenatis eu sit elit dolor posuere massa volutpat.</p>

                </div>
                <div className='flex justify-center'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-8 lg:max-w-[1100px]'>
                    {
                        Data.map((item, idx) => (
                            <div key={idx} data-aos = "fade" className='  relative h-full w-full max-h-[400px] max-w-[360px] m-4 group cursor-pointer'>
                                <div className='overflow-hidden rounded-2xl'>
                                    <img src={item.img} alt=""
                                    className='w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 group-hover:-rotate-1 transition-all duration-500'
                                />
                                <div className='absolute max-lg:bottom-8 lg:bottom-4 left-4 bg-white p-3 flex flex-col justify-center items-center rounded-2xl shadow-[inset_0_-2px_8px_rgba(0,0,0,0.3)]'>
                                    <h4 className='text-[#0f2678] max-sm:text-xl text-2xl font-semibold group-hover:text-blue-500'>{item.name}</h4>
                                    <p className='text-[#6477b4] font-semibold max-sm:text-lg text-xl '>{item.post}</p>
                                </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
                </div>
                <div className='' data-aos = "fade">
                    <div className='flex justify-center items-center mt-10'>
                        <Button Variant={"Primary"} Text={"Join our team"} classes='max-sm:w-full' />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default TeamSection