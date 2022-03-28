import React from 'react';

const Modal = ({ className, mobilePreviewBackground, modalBackground, ...props }) => {

  return (
    <div className="overlay">
        <div className={`${mobilePreviewBackground} container contentOne`}>
            <div className={`${modalBackground} modalContent`}>
                {props.children}
            </div>
        </div>
    </div>
  );
};


export default Modal;