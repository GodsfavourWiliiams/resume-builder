import { useEffect, useState, Fragment } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYOffset > 300 ? setShowButton(true) : setShowButton(false)
    });
  }, []);

  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };

  return (
    <Fragment>
      {showButton && (
        <button onClick={scrollToTop} className="back-to-top
        bg-primary
        border-0 
        px-3
        d-flex 
        align-items-center
        justify-content-center 
        rounded ">
        <FaAngleUp className=""/>
        </button>
        
      )}
      
    </Fragment>
  );
};

export default ScrollToTop;