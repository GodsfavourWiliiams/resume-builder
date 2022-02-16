import React, { Component } from 'react';
import ImageOne from '../images/values-1.png';
import ImageTwo from '../images/values-2.png';
import ImageThree from '../images/values-3.png';
import './whyUs.css';
export class whyus extends Component {
    render() {
        return (
    <section className="values">

            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Our Values</h2>
                    <p>Create a resume from thousands of templates</p>
                </header>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="box">
                            <img src={ImageOne} className="img-fluid" alt=""/>
                            <h3>Move your resume To the top of the yes pile</h3>
                            <p>Eum ad dolor et. Autem aut fugiat debitis voluptatem consequuntur sit. Et veritatis id.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="400">
                        <div className="box">
                            <img src={ImageTwo} className="img-fluid" alt=""/>
                            <h3>Put your resume in your pocket</h3>
                            <p>Repudiandae amet nihil natus in distinctio suscipit id. Doloremque ducimus ea sit non.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="600">
                        <div className="box">
                            <img src={ImageThree} className="img-fluid" alt=""/>
                            <h3>One click export to PDF</h3>
                            <p>Quam rem vitae est autem molestias explicabo debitis sint. Vero aliquid quidem commodi.</p>
                        </div>
                    </div>
                  </div>  
            </div>
        </section>
        )
    }
}

export default whyus
