import './HeroContent.css';
import Video from '../images/course-video.mp4';
import {useState} from 'react'


function Hero() {
    const [selected, setselected] = useState(null)
    const toggle = (i) =>{
      if (selected === i) {
        return setselected(null)
      }
      setselected(i)
    }
  return (
    // first section
  <div className="">
       <section className="section main-banner" data-section="section1">
        <video autoPlay={true} muted loop>
          <source src={Video} type="video/mp4" />
      </video>

        <div className="video-overlay header-text">
            <div className="caption">
                <h6 className=''>Use our resume builder to create a resume in 15 minutes</h6>
                <h2><em>Build</em> your perfect CV</h2>
                    <button className="main-button rounded-3 border-0 py-2 px-3"><a href="/" className='text-decoration-none'>Build my resume</a></button>
            </div>
        </div>
    </section>
    {/* features */}
    <section className="features">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 col-12">
                    <div className="features-post">
                        <div className="featurefs-content">
                            <div className={``} onClick={() => toggle()}>
                                <h4 className="">50,000+ job </h4>
                            </div>
                            <div className={selected === '' ? 'content-show' : 'content-hide'}>
                                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                                <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                                <div className="scroll-to-section"><a href="#section2">More Info.</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="features-post second-features">
                        <div className="features-content">
                            <div className="content-show">
                                <h4>One click export to PDF</h4>
                            </div>
                            <div className="content-hide">
                                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                                <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                                <div className="scroll-to-section"><a href="#section3">Details</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-12">
                    <div className="features-post third-features">
                        <div className="features-content">
                            <div className="content-show">
                                <h4>Real Meeting</h4>
                            </div>
                            <div className="content-hide">
                                <p>Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet. Donec maximus elementum ex. Cras convallis ex rhoncus, laoreet libero eu, vehicula libero.</p>
                                <p className="hidden-sm">Curabitur id eros vehicula, tincidunt libero eu, lobortis mi. In mollis eros a posuere imperdiet.</p>
                                <div className="scroll-to-section"><a href="#section4">Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
	
  );
}

export default Hero;