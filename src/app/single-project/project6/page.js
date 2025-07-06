import Image from 'next/image'
import React from 'react'

const Project6 = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>PeixEdu LMS – Online Finance Education Platform</p>
                        <h1>Powering Global Learners with Industry-Ready Finance Education</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/webapp.png"} alt="Peix Edu LMS" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>2024</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Peix Education</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Web App Development</h3>
                            </div>
                            <div className="single-info">
                                <p>Tech Stack</p>
                                <h3>React.js · Node.js · Laravel (for backend or admin logic) · MySQL · AWS S3 · Stripe · WebRTC (Live Classes) · Firebase (Auth & Notifications)</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Description</h2>
                            <p>PeixEdu is a leading name in finance education, offering coaching for international credentials like US CMA, US CPA, and ACCA. We developed a full-featured Learning Management System (LMS) to support their mission — enabling instructors to teach and students to learn through a scalable, modern, and intuitive digital platform.</p>
                            <h2>Problem</h2>
                            <p>PeixEdu needed a centralized system to manage courses, video content, assessments, and student progress. Manual processes and third-party platforms lacked control, personalization, and scalability — limiting their ability to expand globally.</p>
                            <h2>Solution</h2>
                            <p>We built a custom LMS that functions as a complete online course marketplace — allowing instructors to upload content, conduct live classes, and manage student engagement. The platform was designed around real-world business needs, cultural flexibility, and user research, ensuring high usability for both students and educators.</p>
                            <h2>Results</h2>
                            <p>
                            - Enabled 100% digital delivery of PeixEdu's flagship finance courses<br/>
                            - Increased student retention and engagement across modules <br/>
                            - Reduced dependency on third-party tools by centralizing all learning features <br/>
                            - Supported thousands of students globally with secure and smooth UX<br/>
                            - Enabled instructors to launch hundreds of video-based courses with ease
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"100%"}} src={"/images/projects/lms-1.png"} alt="Course Dashboard" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"100%"}} src={"/images/projects/lms-2.png"} alt="Video Learning Interface" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"100%"}} src={"/images/projects/lms-3.png"} alt="Assignment Management" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"100%"}} src={"/images/projects/lms-4.png"} alt="Progress Analytics" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project6 