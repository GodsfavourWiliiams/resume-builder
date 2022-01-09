import React, { Component } from 'react';
import './whyUs.css';
import imageOne from '../images/choose-us-image-01.png';
import imageTwo from '../images/choose-us-image-02.png';
import imageThree from '../images/choose-us-image-03.png'
export class whyus extends Component {
    render() {
        return (
<div>
    <section className="section why-us" data-section="section2">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="section-heading text-center mb-5">
                        <h2>Why choose Resume Builder?</h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <div>
                        <ul>
                            <li><a href='#tabs-1'>Professional Resumes</a></li>
                            <li><a href='#tabs-2'>Safe Time</a></li>
                            <li><a href='#tabs-3'>Quality Resume</a></li>
                        </ul>
                        <section className='tabs-content'>
                            <article >
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={imageOne} alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Professional Resumes</h4>
                                        <p>
                                        Whether you’re a writer or scientist, designer or carpenter, stand out with a creative, innovative online resume.
                                        Easy Customization
                                        No coding needed. Just drag and drop text, images, videos, references and more. 
                                        Cover Letters
                                        Introduce yourself to future employers with a bold email marketing campaign.
                                        Online Presence
                                        Add your social media links so people can get to know you. 
                                        </p>
                                    </div>
                                </div>
                            </article>
                            <article >
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={imageTwo} alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Safe Time</h4>
                                        <p>To help you present a perfect resume in today’s job market, Resume Genius is proud to present our users an exclusive “Ask an Expert” service, featuring a real time 1-on-1 Certified Professional Resume Expert. Our online Certified Resume Expert will review your resume for accuracy and clarity. You will get recommendations on how to improve your resume, dramatically increasing your interview call-back rates.</p>
                                    </div>
                                </div>
                            </article>
                            <article >
                                <div className="row">
                                    <div className="col-md-6">
                                        <img src={imageThree} alt="" />
                                    </div>
                                    <div className="col-md-6">
                                        <h4>Quality Resume</h4>
                                        <p>Our online resume builder generates resume templates with thousands of perfectly written bullet points for you to choose from, covering all industries. Just point and click the relevant job description bullet points. No registration required! No matter who you are, our Resume Builder will automatically format them onto your favorite resume templates.</p>
                                    </div>
                                </div>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </section>

            </div>
        )
    }
}

export default whyus
