import React from 'react'
import Summery from '@/components/sections/summery'
import Resume from '@/components/sections/resume'
import Testimonials from '@/components/sections/testimonials'
import ServiceGrid from '@/components/sections/serviceGrid'
const About = () => {
    return (
        <>
            <Summery />
            <ServiceGrid />
            <Resume />
            <Testimonials />
           
        </>
    )
}

export default About