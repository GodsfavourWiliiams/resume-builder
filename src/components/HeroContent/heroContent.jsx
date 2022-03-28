import HeroImg from '../../Assets/Ikbal 5.png';
import { Link } from 'react-router-dom';

function Hero() {

  return (
    <section className="hero d-flex align-items-center">
     
             <div className="container">
                 <div className="row">
                     <div className="col-lg-6 d-flex flex-column justify-content-center">
                         <h1 >BUILD A RESUME THAT WILL GET YOU HIRED</h1>
                         <p className='mt-3'>Our online resume builder generates resume templates with thousands of perfectly written bullet points for you to choose from, covering all industries. Just point and click the relevant job description bullet points. No registration required! No matter who you are, our Resume Builder will automatically format them onto your favorite resume templates.
                            </p>
                         <div>
                             <div className="text-center text-lg-start">
                                 <Link to="/SignIn" className="btn btn-primary d-inline-flex align-items-center justify-content-center align-self-center text-decoration-none px-4 py-2">
                                     Build My Resume Now
                                 </Link>
                             </div>
                         </div>
                     </div>
                     <div className="col-lg-6 hero-img" >
                         <img src={HeroImg} className="img-fluid" alt=""/>
                     </div>
                 </div>
             </div>
     
         </section>
	
  );
}

export default Hero;