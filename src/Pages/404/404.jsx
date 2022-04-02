import {Link} from 'react-router-dom';
import './404.css';

const Error404 = () => {
   
  
    return (
      <div className="mt-5">

       {/* 404 Error Text */}
      <div className="text-center">
          <div className="error mx-auto" data-text="404">404</div>
          <p className="lead text-gray-800 mb-5">Page Not Found</p>
          <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
          <Link to='/'>&larr; Back to Homepage</Link>
      </div>

  </div>
    )
  };

export default Error404;