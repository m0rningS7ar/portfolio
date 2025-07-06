import React from 'react'
import { RiMailSendLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const Summery = () => {
    return (
        <section id="about" className="about-single-area innerpage-single-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT IMAGE DESIGN AREA --> */}
                    <div className="col-lg-4">
                        <SlideUp>
                            <div className="about-image-part">
                                <img src={"/images/about/picofme.png"} alt="About Me" />
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT IMAGE DESIGN AREA -->
                    <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <SlideUp>
                            <div className="about-content-part">
                                <h2>
                                    I’m Vaibhav Khanderao, a full-stack developer.
                                </h2>
                                <p>
                                    I’m a full-stack developer with a multidisciplinary edge — blending web technology, AI, automation systems into powerful, user-centric solutions.<br />
                                    Over the years, I’ve delivered impactful applications across sectors — including legal, fintech, political platforms, real estate portals, mock test platforms, educational platforms, full-stack AI agent systems powered by OpenAI, Inngest, and cloud sandboxes.<br />
                                    Driven by curiosity and a builder mindset, I enjoy working across the full product cycle — from strategy to design to development and automation.
                                </p>
                                <div className="hero-btns">
                                    <a href="contact.html" className="theme-btn">Get In touch<i> <RiMailSendLine size={16} /> </i></a>
                                </div>
                            </div>
                        </SlideUp>
                    </div>
                    {/* <!-- / END ABOUT TEXT DESIGN AREA --> */}
                </div>
            </div>
        </section>
    )
}

export default Summery