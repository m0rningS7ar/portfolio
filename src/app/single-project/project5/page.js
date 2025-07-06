import Image from 'next/image'
import React from 'react'

const Project5 = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>FULL-STACK - HRM SYSTEM</p>
                        <h1>Complete Human Resource Automation Platform</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/fullstack.png"} alt="HRM System" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>2023</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>digitalstartup.in</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Full-Stack Development</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>HR Management</h3>
                            </div>
                            <div className="single-info">
                                <p>Tech Stack</p>
                                <h3>React · Node.js · Express · MongoDB · TailwindCSS · REST API</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Description</h2>
                            <p>A full-featured Human Resource Management System designed to automate and centralize key HR processes — from recruitment and attendance to payroll, project management, and employee engagement. Built for mid-to-large-scale organizations looking to improve efficiency, transparency, and productivity across their workforce.</p>
                            <h2>Problem</h2>
                            <p>The client’s organization relied on disjointed tools and manual tracking for HR tasks like attendance, leave approvals, payroll, and employee records. This resulted in data inconsistencies, delays in approvals, and difficulty in performance tracking.</p>
                            <h2>Solution</h2>
                            <p>We built a scalable and modular HRM platform with a clean dashboard, multilingual support, and role-based access. It brings together every HR function into a single system, enabling HR teams and employees to operate with ease and accuracy.</p>
                            <h2>Result</h2>
                            <p> - 80% reduction in manual HR workload<br/>
                                - 3× faster employee onboarding process<br/>
                                - Improved payroll accuracy with automated calculations<br/>
                                - Centralized data improved audit and compliance workflows<br/>
                                - Achieved 95% adoption rate within 3 months of deployment
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/hrm-1.png"} alt="Employee Dashboard" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/hrm-2.png"} alt="Payroll Management" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/hrm-3.png"} alt="Performance Tracking" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/hrm-4.png"} alt="Leave Management" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project5 