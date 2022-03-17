import React, { useState } from 'react'
import './loader.css';
import Modal from '../reUseableComponents/Modal';

function Loader() {
    const [status, setStatus] = useState(true);

    return (
    <div className="">
        { status && (
            <Modal closeModal={() => setStatus(true)}> 
                <div class="preloader">
                    <div class="dot dot-1"></div>
                    <div class="dot dot-2"></div>
                    <div class="dot dot-3"></div>
                </div>
                <svg version="1.1">
                    <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -7"/>
                    </filter>
                    </defs>
                </svg>
            </Modal>)}
        </div>
    )
  }

  export default Loader;
