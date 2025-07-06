import { RiMailLine, RiMapPinLine, RiPhoneLine } from '@remixicon/react'
import React from 'react'
import SlideUp from '../../../utlits/animations/slideUp'

const ContactOption = () => {
    return (
        <div className="col-lg-4">
            <SlideUp>
                <div className="contact-content-part">
                    <SlideUp delay={2}>
                        <div className="single-contact">
                            <div className="contact-icon">
                                <i> <RiMapPinLine size={20} /></i>
                            </div>
                            <h2>our office:</h2>
                            <p> Powai Plaza, Powai, Mumbai, Maharashtra - 400076 </p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={3}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".4s">
                            <div className="contact-icon">
                                <i> <RiPhoneLine size={20} /></i>
                            </div>
                            <h2>contact number:</h2>
                            <p>8600549897 | 9730045532 | 7517615799</p>
                        </div>
                    </SlideUp>
                    <SlideUp delay={4}>
                        <div className="single-contact wow fadeInUp" data-wow-delay=".6s">
                            <div className="contact-icon">
                                <i> <RiMailLine size={20} /></i>
                            </div>
                            <h2>Email us:</h2>
                            <p>khanderaovaibhav0304@gmail.com</p>
                        </div>
                    </SlideUp>
                </div>
            </SlideUp>
        </div>
    )
}

export default ContactOption