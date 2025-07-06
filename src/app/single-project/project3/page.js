import Image from 'next/image'
import React from 'react'

const SingleProject = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Vibe - Loveable AI Clone (Personal Project)</p>
                        <h1>AI-Powered Fullstack App Generator</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image width={1095} height={1072} sizes='100vw' style={{width:"100%", height:"auto"}} src={"/images/projects/ai.png"} alt="Loveable AI Clone" />
            </div>
            <div className="container pt-30">
                <div className="row">
                    <div className="col-lg-4">
                        {/* <!-- START SINGLE LEFT DESIGN AREA --> */}
                        <div className="single-project-page-left wow fadeInUp delay-0-2s">
                            <div className="single-info">
                                <p>Year</p>
                                <h3>2024</h3>
                            </div>
                            <div className="single-info">
                                <p>Client</p>
                                <h3>Personal Project</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>AI Agentic Fullstack App</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>AI Code Generator</h3>
                            </div>
                            <div className="single-info">
                                <p>Tech Stack</p>
                                <h3>Next.js 15 · React 19 · Tailwind v4 · Shadcn/ui · tRPC · Inngest · Clerk · OpenAI · Anthropic · Grok · E2B · Docker · Prisma · Neon · CodeRabbit</h3>
                            </div>
                        </div>
                        {/* <!-- / END SINGLE LEFT DESIGN AREA --> */}
                    </div>
                    {/* <!-- START SINGLE RIGHT DESIGN AREA --> */}
                    <div className="col-lg-8">
                        <div className="single-project-page-right wow fadeInUp delay-0-4s">
                            <h2>
                                Description
                            </h2>
                            <p>Inspired by Lovable.dev, this personal project explores the boundaries of AI-first developer tooling. It allows users to generate full-stack applications using programmable AI agents. With support for OpenAI, Anthropic, and Grok, the platform executes in real-time using E2B-powered cloud sandboxes and Docker templates — providing a true IDE-like experience in the browser.</p>
                            <h2>
                                Problem
                            </h2>
                            <p>Modern developers lack unified tools to go from AI prompt → production-ready app with stateful backend logic, secure authentication, database integration, and live previews — all without writing boilerplate or leaving the browser.</p>
                            <h2>
                                Solution
                            </h2>
                            <p>This system delivers a fully integrated AI-to-app experience, combining prompt-based component generation, authentication, billing, background jobs, and live sandbox previews — all within a single fullstack architecture using Next.js 15, React 19, and tRPC.</p>
                            <h2>
                                Results
                            </h2>
                            <p>
                                - Successfully demonstrated real-world agent architecture powered by AI<br/>
                                - Reduced setup time from prompt to live app by over 90% <br/>
                                - Seamlessly handled full-stack workflows from auth to backend jobs<br/>
                                - Validated integration of Inngest, E2B, and Clerk into a cohesive DX<br/>
                                - Showcased the future of developer productivity platforms
                            </p>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/ai-1.png"} alt="AI Chat Interface" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/ai-2.png"} alt="Dashboard Analytics" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-6s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"auto"}} src={"/images/projects/ai-3.png"} alt="AI Training Interface" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-8s">
                            <Image width={633} height={679} sizes='100%' style={{width:"100%", height:"80%"}} src={"/images/projects/ai-4.png"} alt="Integration Setup" />
                        </div>
                    </div>
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject 