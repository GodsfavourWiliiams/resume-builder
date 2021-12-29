import React, { Component } from 'react';
import './carousel.css'
import courseOne from '../images/courses-01.jpg';
import courseTwo from '../images/courses-02.jpg';
import courseThree from '../images/courses-03.jpg';
import courseFour from '../images/courses-04.jpg';
import courseFive from '../images/courses-05.jpg';

import authorOne from '../images/author-01.png';
import authorTwo from '../images/author-02.png';
import authorThree from '../images/author-03.png';
import authorFour from '../images/author-04.png';
import authorFive from '../images/author-05.png';



export class carousel extends Component {
    render() {
        return (
<div>
    <section class="section courses" data-section="section4">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 text-center mb-5">
                    <div class="section-heading">
                        <h2>Choose Your Course</h2>
                    </div>
                </div>
                <div class="carousel owl-theme">
                    <div class="item">
                        <img src={courseOne} alt="Course #1" />
                        <div class="down-content">
                            <h4>Digital Marketing</h4>
                            <p>You can get free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.</p>
                            <div class="author-image">
                                <img src={authorOne} alt="Author 1" />
                            </div>
                            <div class="text-button-pay">
                                <a href="#e">Pay <i class="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={courseTwo} alt="Course #2" />
                        <div class="down-content">
                            <h4>Business World</h4>
                            <p>Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.</p>
                            <div class="author-image">
                                <img src={authorTwo} alt="Author 2" />
                            </div>
                            <div class="text-button-free">
                                <a href="#e">Free <i class="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={courseThree} alt="Course #3" />
                        <div class="down-content">
                            <h4>Media Technology</h4>
                            <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</p>
                            <div class="author-image">
                                <img src={authorThree} alt="Author 3" />
                            </div>
                            <div class="text-button-pay">
                                <a href="#e">Pay <i class="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={courseFour} alt="Course #4" />
                        <div class="down-content">
                            <h4>Communications</h4>
                            <p>Download free images and videos for your websites by visiting Unsplash, Pixabay, and Pexels.</p>
                            <div class="author-image">
                                <img src={authorFour} alt="Author 4" />
                            </div>
                            <div class="text-button-free">
                                <a href="#e">Free <i class="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={courseFive} alt="" />
                        <div class="down-content">
                            <h4>Business Ethics</h4>
                            <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</p>
                            <div class="author-image">
                                <img src={authorFive} alt="" />
                            </div>
                            <div class="text-button-pay">
                                <a href="#e">Pay <i class="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={courseOne} alt="" />
                        <div class="down-content">
                            <h4>Photography</h4>
                            <p>Quisque cursus augue ut velit dictum, quis volutpat enim blandit. Maecenas a lectus ac ipsum porta.</p>
                            <div class="author-image">
                                <img src={authorOne} alt="" />
                            </div>
                            <div class="text-button-free">
                                <a href="#">Free <i class="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <img src={courseTwo} alt="" />
                        <div class="down-content">
                            <h4>Web Development</h4>
                            <p>Pellentesque ultricies diam magna, auctor cursus lectus pretium nec. Maecenas finibus lobortis enim.</p>
                            <div class="author-image">
                                <img src={authorTwo} alt="" />
                            </div>
                            <div class="text-button-free">
                                <a href="#">Free <i class="fa fa-angle-double-right"></i></a>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </section>
            </div>
        )
    }
}

export default carousel;
