import React from 'react'
import Link from 'next/link'
import { RiDownloadLine } from '@remixicon/react'
import SlideUp from '@/utlits/animations/slideUp'

const CallToAction = () => {
    return (
        <section className="call-to-action-area">
            <div className="container">
                <div className="row">
                    {/* <!-- START ABOUT TEXT DESIGN AREA --> */}
                    <div className="col-lg-12">
                        <SlideUp>
                            <div className="about-content-part call-to-action-part text-center">
                                <h2>Let’s Turn Your Vision into Code.</h2>
                                <p>I build smart, scalable, and beautiful products powered by modern tools and AI agents. Available for freelance or long-term collaborations that push what’s possible.</p>
                                <div className="hero-btns">
                                    <Link href="/contact" className="theme-btn">Let's Talk  <i><RiDownloadLine size={16} /></i></Link>
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

export default CallToAction