import React, { useState } from 'react'
import './loader.css';
import Modal from '../reUseableComponents/Modal';

function Loader() {
    const [status, setStatus] = useState(true);

    return (
    <div className="">
        { status && (
            <Modal closeModal={() => setStatus(true)}> 
                <div class="loader">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </Modal>)}
        </div>
    )
  }

  export default Loader;
