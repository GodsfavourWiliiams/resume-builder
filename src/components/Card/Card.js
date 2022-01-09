import React, { Component } from 'react';
import './Card.css'
import courseOne from '../images/courses-01.jpg';
import courseTwo from '../images/courses-02.jpg';
import courseThree from '../images/courses-03.jpg';
import courseFour from '../images/courses-04.jpg';
import courseFive from '../images/courses-05.jpg';
import courseSix from '../images/author-01.png';




export class carousel extends Component {
    render() {
        return (
    <section className='courses'>
        <div className="container">
            <div className="row">
                <div className="col-12 section-heading text-center mb-5">
                        <h2>Examples</h2>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="card-box">
                        <div className="card-thumbnail ">
                        <img src={courseOne} alt="Course #1" className='w-100' />
                        </div>
                        <h3><a href="/" className="mt-2 text-danger">What is Lorem Ipsum?</a></h3>
                        <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        <a href="/" className="btn btn-sm btn-danger float-right">Read more </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                
                    <div className="card-box">
                        <div className="card-thumbnail">
                        <img src={courseTwo} alt="Course #1" className='w-100' />
                        </div>
                        <h3><a href="/" className="mt-2 text-danger">Why do we use it?</a></h3>
                        <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        <a href="/" className="btn btn-sm btn-danger float-right">Read more  </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                
                    <div className="card-box">
                        <div className="card-thumbnail">
                        <img src={courseThree} alt="Course #1" className='w-100' />
                        </div>
                        <h3><a href="/" className="mt-2 text-danger">Where does it come from?</a></h3>
                        <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        <a href="/" className="btn btn-sm btn-danger float-right">Read more </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                
                    <div className="card-box">
                        <div className="card-thumbnail">
                        <img src={courseFour} alt="Course #1" className='w-100' />
                        </div>
                        <h3><a href="/" className="mt-2 text-danger">Where can I get some?</a></h3>
                        <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        <a href="/" className="btn btn-sm btn-danger float-right">Read more </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                
                    <div className="card-box">
                        <div className="card-thumbnail">
                        <img src={courseFive} alt="Course #1" className='w-100' />
                        </div>
                        <h3><a href="/" className="mt-2 text-danger">Standard Lorem Ipsum passage</a></h3>
                        <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        <a href="/" className="btn btn-sm btn-danger float-right">Read more </a>
                    </div>
                </div>

                <div className="col-md-6 col-lg-4">
                
                    <div className="card-box">
                        <div className="card-thumbnail">
                        <img src={courseOne} alt="Course #1" className='w-100' />
                        </div>
                        <h3><a href="/" className="mt-2 text-danger">What is Lorem Ipsum?</a></h3>
                        <p className="text-secondary">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                        <a href="/" className="btn btn-sm btn-danger float-right">Read more </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
        )
    }
}

export default carousel;
