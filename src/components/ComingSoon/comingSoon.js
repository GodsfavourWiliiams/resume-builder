import React, { Component } from 'react'
import './comingSoon.css';


export class comingSoon extends Component {
    render() {
        return (
            <div>
                    <section className="section coming-soon">
        <div className="container">
            <div className="row">
                <div className="col-md-7 col-xs-12">
                    <div className="continer centerIt">
                        <div>
                            <h4>Take <em>any online course</em> and win $326 for your next resume</h4>
                            <div className="counter">

                                <div className="days">
                                    <div className="value">00</div>
                                    <span>Days</span>
                                </div>

                                <div className="hours">
                                    <div className="value">00</div>
                                    <span>Hours</span>
                                </div>

                                <div className="minutes">
                                    <div className="value">00</div>
                                    <span>Minutes</span>
                                </div>

                                <div className="seconds">
                                    <div className="value">00</div>
                                    <span>Seconds</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="right-content">
                        <div className="top-content">
                            <h6 className='text-white'>Register your free account and <span className='text-warning'>get immediate</span> access to our free cv templates</h6>
                        </div>
                        <form>
                            <div className="row">
                                <div className="col-md-12">
                                    <fieldset>
                                        <input name="name" type="text" className="form-control" placeholder="Your Name" required="" />
                                    </fieldset>
                                </div>
                                <div className="col-md-12">
                                    <fieldset>
                                        <input name="email" type="text" className="form-control"  placeholder="Your Email" required="" />
                                    </fieldset>
                                </div>
                                <div className="col-md-12">
                                    <fieldset>
                                        <input name="phone-number" type="text" className="form-control" placeholder="Your Phone Number" required="" />
                                    </fieldset>
                                </div>
                                <div className="col-md-12">
                                    <fieldset>
                                        <button type="submit" className="button">Get it now</button>
                                    </fieldset>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
            </div>
        )
    }
}

export default comingSoon
