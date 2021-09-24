import React from 'react'
import '../../../public/css/normalize.css';
import '../../../public/css/boonji-project.webflow.css';
import '../../../public/css/webflow.css';

import VectorX from '../../../public/images/VectorX.svg'
import ModalSuccess from '../../../public/images/ModalSuccess.png'

export default function connectwallet() {
    return (
      <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed70091" className="modal-wrapper-section-copy wf-section">
        <div className="modal-box-div">
          <div className="close-x">
            <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed70094" className="modal-close-x-div-terms"><img src={VectorX} loading="lazy" alt="" className="image-11" /></div>
          </div>
          <div className="modal-header">
            <div className="top-last">
              <h1 className="modal-header-title-last-modal">Your Boonji has joined the metaverse!</h1>
              <div className="modal-header-descr">You're now officially part the Space Program</div>
              <a href="#" className="boonjie-communiy-btn-twitter w-inline-block">
                <div className="text-block-twitter">Share on TWitter!</div>
              </a>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-signin-btn-seccion-last">
              <div className="modal-wait-problem-last"><img src={ModalSuccess} loading="lazy" alt="" /></div>
            </div>
          </div>
        </div>
        <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed700aa" className="modal-close-button-div" />
      </div>
    )
}
