import './HeroContent.css';
import HeroImg from '../images/Ikbal 5.png';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <section className="hero d-flex align-items-center">
     
             <div className="container">
                 <div className="row">
                     <div className="col-lg-6 d-flex flex-column justify-content-center">
                         <h1 data-aos="fade-up">BUILD A RESUME THAT WILL GET YOU HIRED</h1>
                         <p className='mt-3' data-aos="fade-up" data-aos-delay="400">Our online resume builder generates resume templates with thousands of perfectly written bullet points for you to choose from, covering all industries. Just point and click the relevant job description bullet points. No registration required! No matter who you are, our Resume Builder will automatically format them onto your favorite resume templates.
                            </p>
                         <div data-aos="fade-up" data-aos-delay="600">
                             <div className="text-center text-lg-start">
                                 <Link to="/SignIn" className="btn btn-primary d-inline-flex align-items-center justify-content-center align-self-center text-decoration-none px-4 py-2">
                                     Build My Resume Now
                                 </Link>
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-6 hero-img" data-aos="zoom-out" data-aos-delay="200">
                         <img src={HeroImg} className="img-fluid" alt=""/>
                     </div>
                 </div>
             </div>
     
         </section>
	
  );
}

export default Hero;