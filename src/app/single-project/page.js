import Image from 'next/image'
import React from 'react'

const SingleProject = () => {
    return (
        <div className="single-project-page-design">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center pb-30">
                        <p>Developement - Sapphire Asta Hotels</p>
                        <h1>Website Redesign & Digital Revamp</h1>
                    </div>
                </div>
            </div>
            <div className="single-project-image">
                <Image 
                    width={1095} 
                    height={1072} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1095px"
                    style={{width:"100%", height:"auto"}} 
                    src={"/images/projects/website.png"} 
                    alt="Website Redesign & Digital Revamp - Sapphire Asta Hotels"
                    priority
                    quality={90}
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                />
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
                                <h3>Sapphire Asta</h3>
                            </div>
                            <div className="single-info">
                                <p>Services</p>
                                <h3>Web Design and Web Development</h3>
                            </div>
                            <div className="single-info">
                                <p>Project</p>
                                <h3>Modern Website Redesign for a Premium Hospitality Brand</h3>
                            </div>
                            <div className="single-info">
                                <p>Tech Stack</p>
                                <h3>React · HTML · CSS · Sass · JS </h3>
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
                            <p>Designed and developed a premium web presence for Sapphire Asta Hotels, aligning modern UI with comfort-driven   hospitality branding. The website features:
                                - Responsive design across devices for seamless UX <br />
                                - Multi-property integration with booking CTAs for Westside Hotel & Eminent Suites <br/>
                                - Visual Gallery & Facilities Highlights tailored to business and leisure travelers <br/>
                                - Contact Section with CTA and “Book Your Stay Now” integration<br/>
                                This project blended aesthetic detail with conversion-focused layout, delivering a professional hospitality interface that elevates the client’s hotel experience.
                            </p>
                            <h2>Solution:</h2>
                            <p>The client’s outdated website lacked aesthetic appeal and failed to reflect the brand’s luxury image, leading to poor user engagement and low conversions (only ~1,357 users/month).</p>
                            <h2>The Challenge</h2>
                            <p>We redesigned the site using React, HTML, CSS, Sass, JS, focusing on a clean, responsive UI with high-conversion layouts, property showcases, and modern visuals aligned with the brand.</p>
                            <h2></h2>
                            <ul className="list-disc list-inside text-gray-700 space-y-1">
                                <li> Increased traffic from 1,357 to <strong>6,000+ monthly users</strong></li>
                                <li> Boosted user engagement and time spent on site</li>
                                <li> Improved booking conversion rates and customer trust</li>
                                <li> Strengthened brand presence with modern web design</li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- / END SINGLE RIGHT DESIGN AREA --> */}
                </div>
                {/* <!-- START SINGLE PAGE GALLERY DESIGN AREA --> */}
                <div className="row pt-30">
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-2s">
                            <Image 
                                width={633} 
                                height={679} 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{width:"100%", height:"auto"}} 
                                src={"/images/projects/sap-1.png"} 
                                alt="Sapphire Asta Hotels - Gallery Image 1"
                                quality={85}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="single-image wow fadeInUp delay-0-4s">
                            <Image 
                                width={633} 
                                height={679} 
                                sizes="(max-width: 768px) 100vw, 50vw"
                                style={{width:"100%", height:"auto"}} 
                                src={"/images/projects/sap-2.png"} 
                                alt="Sapphire Asta Hotels - Gallery Image 2"
                                quality={85}
                                placeholder="blur"
                                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                            />
                        </div>
                    </div>
                </div>
                {/* <!--  / END SINGLE PAGE GALLERY DESIGN AREA --> */}
            </div>
        </div>
    )
}

export default SingleProject