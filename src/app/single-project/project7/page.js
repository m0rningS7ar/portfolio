import Image from 'next/image'
import React from 'react'

const Project7 = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>MOBILE - PEIX EDU FLUTTER APP</p>
                        <h1>Mobile Learning Platform for Finance Students</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/mobile.png"} alt="Peix Edu Flutter App" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>2025</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Peix Education</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Mobile App Development</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>Cross Platform Application</h3>
                            </div>
                            <div className="single-info">
                                <p>Tech Stack</p>
                                <h3>Flutter · Dart · Firebase Auth · Firestore · REST API · Razorpay (In-app Payments) · Cloud Functions · Provider (State Management)</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Description</h2>
                            <p>The PeixEdu LMS Flutter App is a mobile-first learning platform crafted for finance students pursuing global credentials like CMA (US), CPA (US), and ACCA. The app is tailored to deliver a seamless learning experience — from purchasing and accessing courses to attending live classes and tracking progress.</p>
                            <h2>Problem</h2>
                            <p>Students needed an intuitive, mobile-accessible solution to browse, purchase, and consume educational content on the go. The absence of a unified, branded mobile app was limiting PeixEdu’s engagement, accessibility, and conversion potential in the growing online education market.</p>
                            <h2>Solution</h2>
                            <p>We built a cross-platform Flutter app that mirrors the full capabilities of the PeixEdu LMS, including live class integration, bundles, notes, video playback, course purchases, and instructor-student interaction.
                            The app design was backed by user research to ensure ease-of-use, visual clarity, and fast performance — aligned with PeixEdu's brand identity.</p>
                            <h2>Results</h2>
                                - 3× Increase in course engagement via mobile learning.<br/>
                                - 90% of new learners preferred the mobile experience over web.<br/>
                                - Over 5,000+ app sessions/month within the first launch phase.<br/>
                                - Boosted course conversion rate by streamlining purchase & playback.<br/>
                                - Enabled students to learn on-the-go, resulting in improved exam readiness.
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/mob-1.jpeg"} alt="Mobile Course Interface" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/mob-2.jpeg"} alt="Offline Learning Mode" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project7 