import React from 'react'
import { RiBookLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Resume = () => {
    return (
        <section id="resume" className="resume-area">
            <div className="container">
                <div className="resume-items">
                    <div className="row">
                        {/* <!-- START EXPERIENCE RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="single-resume">
                                <h2>Experience</h2>
                                <div className="experience-list">
                                    <Card year={'2022 - Present'} title={'Tech Founder'} institution={'Scienox Technologies '} />
                                    <Card year={'2021 - 2024'} title={'Tech Trainer'} institution={'Work as Tech Trainer in various companies'} />
                                    <Card year={'2018 - 2022'} title={'Fullstack Developer'} institution={'Infocious Infotech'} />
                                    <Card year={'2017 - 2018'} title={'Web Designer Developer'} institution={'Freelancer'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EXPERIENCE RESUME DESIGN AREA -->
                        <!-- START EDUCATION RESUME DESIGN AREA --> */}
                        <div className="col-xl-6 col-md-6">
                            <div className="experience-list">
                                <div className="single-resume">
                                    <h2>Education</h2>
                                    <Card year={'2021-2022'} title={'Smart Contract Hacking Certificate'} institution={'SCH University'} />
                                    <Card year={'2019-2020'} title={'Certtified Ethical Hacking'} institution={'EC Council'} />
                                    <Card year={'2017'} title={'Web Application Developer'} institution={'Fullstack Development Program'} />
                                    <Card year={'2016 - 2019'} title={'Bachelor Degree of Information Technology'} institution={'SN college'} />
                                </div>
                            </div>
                        </div>
                        {/* <!-- // END EDUCATION RESUME DESIGN AREA --> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume


const Card = ({ year, title, institution }) => {
    return (
        <SlideUp>
            <div className="resume-item">
                <div className="icon">
                    <RiBookLine />
                </div>
                <div className="content">
                    <span className="years">{year}</span>
                    <h4>{title}</h4>
                    <span className="company"> {institution} </span>
                </div>
            </div>
        </SlideUp>
    )
}