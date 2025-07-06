import Image from 'next/image'
import React from 'react'

const Project4 = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>AI-Powered Document Management System</p>
                        <h1>Smart, Scalable & Secure Document Lifecycle Platform</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/ai-fs.png"} alt="AI Document Management" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>2022</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Confidential</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Ai Powerd Web Application</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>Document Management</h3>
                            </div>
                            <div className="single-info">
                                <p>Tech Stack</p>
                                <h3>PHP 8.2 · Laravel 11 · Angular 18 · Angular Material UI · Bootstrap · MySQL · OpenAI API
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>Description</h2>
                            <p>A comprehensive document management platform designed to handle the end-to-end lifecycle of documents for modern organizations. Built for flexibility, compliance, and productivity, it supports everything from file uploads and previews to workflow automation, secure sharing, and AI-based document generation.</p>
                            <p>The platform features automated document categorization, smart search capabilities, version control, and secure access management. It integrates seamlessly with existing enterprise systems and provides real-time collaboration tools for teams working with documents.</p>
                            <h2>Problem</h2>
                            <p>
                            Clients were dealing with fragmented systems for document storage, manual workflows, and lack of transparency—resulting in inefficiencies, compliance risks, and limited collaboration across departments.</p>
                            <h2>Solution</h2>
                            <p>
                            We developed an AI-powered, full-featured platform with support for all major file types, seamless integration with Amazon S3 and local storage, secure document sharing, and advanced role-based access. The system includes:

                                - Document categorization & metadata tagging <br/>
                                - Version history & archiving<br/>
                                - Real-time preview support<br/>
                                - Secure document requests from external parties<br/>
                                - Detailed audit trails for all activity
                            </p>
                            <h2>Results</h2>
                            <p>
                                - 60% reduction in manual document handling through workflow automation <br/>
                                - 100% audit compliance achieved with detailed activity tracking and role-based access<br/>
                                - 4× faster document retrieval using AI-powered semantic search <br/>
                                - 3× improvement in interdepartmental collaboration via secure sharing tools <br/>
                                - Scaled to manage over 6,000 documents with consistent performance <br/>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/doc-1.png"} alt="Document Upload Interface" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/doc-2.png"} alt="AI Processing Dashboard" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/doc-3.png"} alt="Search and Filter Interface" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/doc-4.png"} alt="Collaboration Tools" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project4 