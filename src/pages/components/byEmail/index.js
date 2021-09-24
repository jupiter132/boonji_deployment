import React from 'react'
import '../../../public/css/normalize.css';
import '../../../public/css/boonji-project.webflow.css';
import '../../../public/css/webflow.css';

import VectorX from '../../../public/images/VectorX.svg'

export default function connectwallet() {
    return (
        <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed70091" className="modal-wrapper-section-copy wf-section">
        <div className="modal-box-div">
          <div className="close-x">
            <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed70094" className="modal-close-x-div-terms"><img src={VectorX} loading="lazy" alt="" className="image-11" /></div>
          </div>
          <div className="modal-header">
            <div className="top">
              <h1 className="modal-header-title">We'll notify you by email!</h1>
              <div className="modal-header-descr">We'll notify you the day of the drop, a couple of hours before it goes live.</div>
            </div>
          </div>
          <div className="modal-body">
            <div className="modal-signin-btn-seccion">
              <div className="w-form">
                <form id="email-form" name="email-form" data-name="Email Form" redirect="https://authentic-project.webflow.io/payment/modal-billing-info" data-redirect="https://authentic-project.webflow.io/payment/modal-billing-info" method="post" className="form-email-modal">
                  <div className="form-single"><label htmlFor="Username">Email<span className="red">*</span></label><input type="email" className="authentic-form-input-2 w-input" maxLength={256} name="Username-2" data-name="Username 2" placeholder id="Username-2" /></div>
                  <div className="modal-form-button-div">
                    <a href="#" className="link-block w-inline-block">
                      <div className="back-button hide">← Back</div>
                    </a><input type="submit" defaultValue="Notify me!" data-wait="Please wait..." className="authentic-confirm-btn-2 register-btn algin-right w-button" />
                  </div>
                </form>
                <div className="w-form-done">
                  <div>Thank you! Your submission has been received!</div>
                </div>
                <div className="w-form-fail">
                  <div>Oops! Something went wrong while submitting the form.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed700aa" className="modal-close-button-div" />
      </div>
    )
}
