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
                        <h4>Watch the video to learn more <em>about Grad School</em></h4>
                        <p>You are NOT allowed to redistribute this template ZIP file on any template collection website. However, you can use this template to convert into a specific theme for any kind of CMS platform such as WordPress. You may <a rel="nofollow"
                                href="https://templatemo.com/contact" target="_parent">contact TemplateMo</a> for details.
                            <br/><br/>Suspendisse tincidunt, magna ut finibus rutrum, libero dolor euismod odio, nec interdum quam felis non ante.</p>
                        <div class="main-button"><a rel="nofollow" href="https://fb.com/templatemo" target="_parent">External URL</a></div>
                    </div>
                </div>
                <div class="col-md-6">
                    <article class="video-item">
                        <div class="video-caption">
                            <h4>Power HTML Template</h4>
                        </div>
                        <figure>
                            <a href="https://www.youtube.com/watch?v=r9LtOG6pNUw" class="play"><img src={mainThumb} alt='mainThumb' /></a>
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
