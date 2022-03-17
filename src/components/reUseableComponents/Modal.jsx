import React from 'react';

const Modal = ({ className, ...props }) => {

  return (
    <div className="overlay">
        <div className="container contentOne">
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
  );
};


export default Modal;