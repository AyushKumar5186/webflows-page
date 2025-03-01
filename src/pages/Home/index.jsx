import React from 'react'
import Hero from './components/Hero'
import CompanySection from './components/CompanySection'
import TeamSection from './components/TeamSection'
import SpecialSection from './components/SpecialSection'
import ContactSection from './components/ContactSection'
import ProcessSection from './components/ProcessSection'
import Testimonials from './components/Testimonials'
import NewsSection from './components/NewsSection'
import AboutSection from './components/AboutSection'
import FooterSection from "../../components/FooterSection"

const HomePage = () => {
  document.title = "Home V5 - Technology Webflow Template | MegaTech"
  return (
        <div className='w-full overflow-hidden'>
          <Hero/>
        <div className='container mx-auto max-lg:p-3 lg:px-6'>
          <CompanySection/>

        </div>
    <div className='container mx-auto max-lg:px-6 lg:px-16'>
        <TeamSection/>
        <SpecialSection/>
        <ContactSection/>
        <ProcessSection/>
        <Testimonials/>
        {/* <NewsSection/> */}
        {/* <AboutSection/> */}
        <FooterSection/>
    </div>
    </div>
  )
}

export default HomePage