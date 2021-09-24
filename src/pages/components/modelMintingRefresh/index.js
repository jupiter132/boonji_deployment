import React from 'react'
import '../../../public/css/normalize.css';
import '../../../public/css/boonji-project.webflow.css';
import '../../../public/css/webflow.css';

import VectorX from '../../../public/images/VectorX.svg'
import BoonjiClockGIF2 from '../../../public/images/BoonjiClockGIF2.gif'
import waitTheres from '../../../public/images/wait-theres-a.png'

export default function connectwallet() {
    return (
      <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed70091" className="modal-wrapper-section-copy wf-section">
      <div className="modal-box-div">
        <div className="close-x">
          <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed70094" className="modal-close-x-div-terms"><img src={VectorX} loading="lazy" alt="" className="image-11" /></div>
        </div>
        <div className="modal-header">
          <div className="top">
            <h1 className="modal-header-title">Theres seems to be a problem.</h1>
            <div className="modal-header-descr">Please refresh and try again.</div>
            <a href="#" className="boonjie-communiy-btn w-inline-block">
              <div className="text-block">Refresh Page</div>
            </a>
          </div>
        </div>
        <div className="modal-body">
          <div className="modal-signin-btn-seccion">
            <div className="modal-wait-problem"><img src={waitTheres} loading="lazy" alt="" /></div>
          </div>
        </div>
      </div>
      <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed700aa" className="modal-close-button-div" />
    </div>
    )
}
