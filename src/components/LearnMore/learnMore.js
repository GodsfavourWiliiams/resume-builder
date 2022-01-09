import React, { Component } from 'react'
import './learnMore.css'
import mainThumb from '../images/main-thumb.png'

export class learnMore extends Component {
    render() {
        return (
<div>
    <section className="section video" data-section="section5">
        <div className="container">
            <div className="row">
                <div className="col-md-6 align-self-center">
                    <div className="left-content">
                        <span>our presentation is for you</span>
                        <h4>Watch the video to learn more <em>about Resume Builder</em></h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quod deleniti assumenda laborum nemo velit praesentium amet veritatis accusantium voluptatibus animi voluptatem illum, fuga quasi voluptatum. Dolores vitae libero expedita!  <a href="/" target="_parent"> Contact Me</a> for details.
                            <br/><br/>Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</p>
                        <div className='mt-2'><a href="/" target="_parent" className='text-decoration-none  main-button rounded-3 p-3'>External URL</a></div>
                    </div>
                </div>
                <div className="col-md-6">
                    <article className="video-item">
                        <div className="video-caption">
                            <h4 className='text-warning'>RATE ME</h4>
                        </div>
                        <figure>
                            <a href="/" className="play"><img src={mainThumb} alt='mainThumb' /></a>
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
