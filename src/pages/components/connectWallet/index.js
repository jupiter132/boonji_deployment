import React from 'react'
import '../../../public/css/normalize.css';
import '../../../public/css/boonji-project.webflow.css';
import '../../../public/css/webflow.css';

// import VectorX from '../../../public/images/VectorX.svg'
import VectorX from '../../../public/images/VectorX.svg'
import Metamask from '../../../public/images/metamask.svg'
import coinbase from '../../../public/images/bitcoin-icon_1bitcoin-icon.png'

export default function connectwallet() {
    return (
            <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed70091" className="modal-wrapper-section-copy wf-section">
            <div className="modal-box-div">
            <div className="close-x">
                <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed70094" className="modal-close-x-div-terms"><img src={VectorX}  className="image-11" /></div>
            </div>
            <div className="modal-header">
                <div className="top">
                <h1 className="modal-header-title">Connect Your Wallet</h1>
                <div className="modal-header-descr">Please add a payment source</div>
                </div>
            </div>
            <div className="modal-body">
                <div className="modal-signin-btn-seccion">
                <a href="#" className="modal-signin-btn w-inline-block">
                    <div className="modal-signin-btn-icon"><img src={coinbase} loading="lazy" alt="" width={30} /></div>
                    <div className="modal-signin-btn-text">Use Coinbase Wallet</div>
                </a>
                <a href="#" className="modal-signin-btn w-inline-block">
                    <div className="modal-signin-btn-icon"><img src={Metamask} loading="lazy" alt="" width={31} /></div>
                    <div className="modal-signin-btn-text">Use Metamask Wallet</div>
                </a>
                <a href="https://en.wikipedia.org/wiki/Cryptocurrency_wallet" target="_blank" className="modal-link">What is a wallet?</a>
                </div>
            </div>
            </div>
            <div data-w-id="f74c8690-8a68-9cc7-d03f-fa396ed700aa" className="modal-close-button-div" />
        </div>
    )
}
