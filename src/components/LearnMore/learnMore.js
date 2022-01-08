import React, { Component } from 'react'
import './learnMore.css'
import mainThumb from '../images/main-thumb.png'

export class learnMore extends Component {
    render() {
        return (
<div>
    <section class="section video" data-section="section5">
        <div class="container">
            <div class="row">
                <div class="col-md-6 align-self-center">
                    <div class="left-content">
                        <span>our presentation is for you</span>
                        <h4>Watch the video to learn more <em>about Resume Builder</em></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod deleniti assumenda laborum nemo velit praesentium amet veritatis accusantium voluptatibus animi voluptatem illum, fuga quasi voluptatum. Dolores vitae libero expedita!  <a href="/" target="_parent"> Contact Me</a> for details.
                            <br/><br/>Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</p>
                        <div class="main-button"><a href="/" target="_parent">External URL</a></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <article class="video-item">
                        <div class="video-caption">
                            <h4 className='text-warning'>RATE ME</h4>
                        </div>
                        <figure>
                            <a href="/" class="play"><img src={mainThumb} alt='mainThumb' /></a>
                        </figure>
                    </article>
                </div>
            </div>
        </div>
    </section>
</div>
        )
    }
}

export default learnMore
