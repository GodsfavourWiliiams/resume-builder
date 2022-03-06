import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Modal = (props) => {
  const { closeModal } = props;

  const closeicon = () => (
    <FaTimes
    onClick={closeModal}
    style={{
      cursor: 'pointer',
      border: 0,
      position: 'absolute',
      top: '0.5rem',
      right: '0.5rem',
    }}
    />
  );

  return (
    <div className="overlay">
        <div className="container contentOne">
            <div className="content ">
                { closeicon() }
                {props.children}
            </div>
        </div>
    </div>
  );
};


export default Modal;