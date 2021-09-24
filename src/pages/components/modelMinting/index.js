import React from 'react'
import '../../../public/css/normalize.css';
import '../../../public/css/boonji-project.webflow.css';
import '../../../public/css/webflow.css';

import VectorX from '../../../public/images/VectorX.svg'
import BoonjiClockGIF2 from '../../../public/images/BoonjiClockGIF2.gif'

export default function connectwallet() {
    return (
      <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed70091" className="modal-wrapper-section-copy wf-section">
      <div className="modal-box-div">
        <div className="close-x">
          <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed70094" className="modal-close-x-div-terms"><img src={VectorX} loading="lazy" alt="" className="image-11" /></div>
        </div>
        <div className="modal-header">
          <div className="top">
            <h1 className="modal-header-title">We are minting your boonji</h1>
            <div className="modal-header-descr">Please hang tight while we </div>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-signin-btn-seccion">
            <div className="modal-clock"><img src={BoonjiClockGIF2} loading="lazy" alt="" /></div>
          </div>
        </div>
      </div>
      <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed700aa" className="modal-close-button-div" />
    </div>
    )
}
