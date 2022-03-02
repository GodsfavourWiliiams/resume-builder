import React, { Component } from 'react'
import PricingFree from '../images/Saly-5.png';
import PricingStarter from '../images/Saly-3.png';
import PricingBusiness from '../images/Saly-32.png';
import PricingUltimate from '../images/Saly-19.png';
export class learnMore extends Component {
    render() {
        return (
    <section id="pricing" className="pricing">
            <div className="container" data-aos="fade-up">

                <header className="section-header">
                    <h2>Pricing</h2>
                    <p>Check our Pricing</p>
                </header>

            <div className="row gy-4" data-aos="fade-left">

                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
                    <div className="box">
                        <h3 className=''>Free Plan</h3>
                        <div className="price"><sup>$</sup>0<span> / mo</span></div>
                        <img src={PricingFree} className="img-fluid" alt=""/>
                        <p className='my-3'>
                            For individuals and small teams to create and download designs for any occassion
                        </p>
                        <a href="/" className="btn-buy btn border-primary rounded">Buy Now</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
                    <div className="box">
                        <span className="featured">Featured</span>
                        <h3 className=''>Starter Plan</h3>
                        <div className="price"><sup>$</sup>19<span> / mo</span></div>
                        <img src={PricingStarter} className="img-fluid" alt=""/>
                        <p className='my-3'>
                        For individuals and small team who wants mre advance tool and more content
                        </p>
                        <a href="/" className="btn-buy btn border-primary rounded">Buy Now</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
                    <div className="box">
                        <h3 className=''>Business Plan</h3>
                        <div className="price"><sup>$</sup>29<span> / mo</span></div>
                        <img src={PricingBusiness} className="img-fluid" alt=""/>
                        <p className='my-3'>
                        For Start Ups business seeking and integrated tool to keep their brand consistent
                        </p>
                        <a href="/" className="btn-buy btn border-primary rounded">Buy Now</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
                    <div className="box">
                        <h3 className=''>Ultimate Plan</h3>
                        <div className="price"><sup>$</sup>49<span> / mo</span></div>
                        <img src={PricingUltimate} className="img-fluid" alt=""/>
                        <p className='my-3'>
                            For large business looking for powerfull creative tool for their organisation 
                        </p>
                        <a href="/" className="btn border-primary rounded btn-buy">Buy Now</a>
                    </div>
                </div>

            </div>

        </div>
    </section>

        )
    }
}

export default learnMore
