import React, { Component } from 'react';
import './Features.css';
import FeatureImg from '../../Assets/Other 01.png';
import { FaCheck } from 'react-icons/fa';


export class Features extends Component {
    render() {
        return (

    <section id="features" className="features">
        <div className="container" data-aos="fade-up">

            <header className="section-header">
                <h2>Features</h2>
                <p>The faster way to create professional-looking resumes</p>
            </header>

            <div className="row">

                <div className="col-lg-6">
                    <img src={FeatureImg} className="img-fluid " alt=""/>
                </div>

                <div className="col-lg-6 mt-lg-0 d-flex">
                    <div className="row align-self-center gx-3 gy-3">

                        <div className="col-md-6 shadow-sm rounded" data-aos="zoom-out" data-aos-delay="200">
                            <div className="feature-box d-flex align-items-center">
                            <FaCheck className='check'/>
                                <h3>Professionally designed templates</h3>
                            </div>
                        </div>

                        <div className="col-md-6 shadow-sm rounded" data-aos="zoom-out" data-aos-delay="300">
                            <div className="feature-box d-flex align-items-center">
                                <FaCheck className='check'/>
                                <h3>Personalized and stored in iCloud</h3>
                            </div>
                        </div>

                        <div className="col-md-6 shadow-sm rounded" data-aos="zoom-out" data-aos-delay="400">
                            <div className="feature-box d-flex align-items-center">
                                <FaCheck className='check'/>
                                <h3>Font combinations</h3>
                            </div>
                        </div>

                        <div className="col-md-6 shadow-sm rounded" data-aos="zoom-out" data-aos-delay="500">
                            <div className="feature-box d-flex align-items-center">
                                <FaCheck className='check '/>
                                <h3>Access your resume design</h3>
                            </div>
                        </div>

                        <div className="col-md-6 shadow-sm rounded" data-aos="zoom-out" data-aos-delay="600">
                            <div className="feature-box d-flex align-items-center">
                                <FaCheck className='check'/>
                                <h3>Drag and drop editor</h3>
                            </div>
                        </div>

                        <div className="col-md-6 shadow-sm rounded" data-aos="zoom-out" data-aos-delay="700">
                            <div className="feature-box d-flex align-items-center">
                                <FaCheck className='check'/>
                                <h3>Share and download your design</h3>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
</section>
        )
    }
}

export default Features;
