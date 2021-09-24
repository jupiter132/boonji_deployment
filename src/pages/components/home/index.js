import React from 'react'

import '../../../public/css/normalize.css';
import '../../../public/css/boonji-project.webflow.css';
import '../../../public/css/webflow.css';

import Boonjielogosolo from '../../../public/images/Boonjie-logo-solo.png'
import Frame1 from '../../../public/images/Frame-1.jpg'
import Frame2 from '../../../public/images/Frame-2.jpg'
import Frame3 from '../../../public/images/Frame-3.jpg'
import Frame4 from '../../../public/images/Frame-4.jpg'

function index() {
  return (
        <div>
        {/* Hello world */}
        <div className="awesome" style={{border: '1px solid red', background: 'black'}}>
          <label htmlFor="name">Enter your name: </label>
          <div className="boonji-section hero-section wf-section">
            <div className="boonjie-container w-container">
              <div className="w-layout-grid boonjie-hero">
                <div className="boonjie-hero-left">
                  <div className="boonjie-subtitle title">Explore the great beyond with Brendan Murphy</div><img src={Boonjielogosolo}  className="hero-bonjie-logo" />
                  <h1 className="boonjie-h1">Boonjies</h1>
                  <p className="boonjie-p hero">The Boonji Project is a collection of 10,000 NFTs — unique digital collectibles living on the Ethereum blockchain. <br /><br />Your Boonji doubles as your Space Program membership card, and grants access to members-only benefits, the first of which is access to the SPACE&nbsp;PROGRAM, which includes a collaborative graffiti earthly sculpture. <br /><br />Future areas and perks can be unlocked by the community through roadmap activation.</p>
                  <a href="#" className="boonjie-communiy-btn w-inline-block">
                    <div className="text-block">Connect your wallet</div>
                  </a>
                </div>
                <div className="boonjie-hero-right">
                  <div className="w-layout-grid bonnjie-hero-art">
                    <div className="boonjie-art"><img src={Frame1} loading="lazy" sizes="100vw"  alt="Boonji 1" className="hero-image" /></div>
                    <div className="boonjie-art"><img src={Frame2} loading="lazy" sizes="100vw"  alt="Boonji 2" className="hero-image" /></div>
                    <div className="boonjie-art"><img src={Frame3} loading="lazy" sizes="100vw"  alt="Boonji 3" className="hero-image" /></div>
                    <div className="boonjie-art"><img src={Frame4} loading="lazy" sizes="100vw"  alt="Boonji 4" className="hero-image" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="boonji-section wf-section">
            <div className="boonjie-container w-container">
              <div className="w-layout-grid boonjie-hero">
                <div className="boonjie-hero-left">
                  <h2 className="boonjie-h2">Fair Distribution</h2>
                  <div className="boonjie-subtitle">(BONDING CURVES ARE A PONZI)</div>
                  <p className="boonjie-p fair">There are no bonding curves here. Buying a Astronaut costs 0.08 ETH. There are no price tiers; BAYC membership costs the same for everyone.</p>
                  <p className="boonjie-note"><span className="boonji-note">NOTE:</span> Thirty Boonjis are being withheld from the sale. These will be used for giveaways, puzzle rewards — and for the creators' Space Club memberships.</p>
                </div>
                <div className="boonjie-hero-right">
                  <div className="boonjie-purchase-card-2">
                    <h3 className="boonjie-h3-2">Mint a Boonji</h3>
                    <p className="boonjie-p-2">Launching on Thursday, October 12, 2021</p>
                    <div className="boonjie-coutdown">
                      <div id="Days" className="boonjie-count-item">
                        <div className="count-number">16</div>
                        <div className="count-label">Days</div>
                      </div>
                      <div id="Hours" className="boonjie-count-item">
                        <div className="count-number">2</div>
                        <div className="count-label">Hours</div>
                      </div>
                      <div id="Minutes" className="boonjie-count-item">
                        <div className="count-number">16</div>
                        <div className="count-label">Minutes</div>
                      </div>
                      <div id="Seconds" className="boonjie-count-item">
                        <div className="count-number">22</div>
                        <div className="count-label">Seconds</div>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="boonjie-purchase-custom-btn w-inline-block">
                    <div className="text-block-3">Remind Me</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="boonji-section wf-section">
            <div className="boonjie-container w-container">
              <div className="w-layout-grid boonjie-hero">
                <div className="boonjie-hero-left">
                  <h2 className="boonjie-h2">Fair Distribution</h2>
                  <div className="boonjie-subtitle">(BONDING CURVES ARE A PONZI)</div>
                  <p className="boonjie-p fair">There are no bonding curves here. Buying a Astronaut costs 0.08 ETH. There are no price tiers; BAYC membership costs the same for everyone.</p>
                  <p className="boonjie-note"><span className="boonji-note">NOTE:</span> Thirty Boonjis are being withheld from the sale. These will be used for giveaways, puzzle rewards — and for the creators' Space Club memberships.</p>
                </div>
                <div className="boonjie-hero-right">
                  <div className="boonjie-purchase-card-2">
                    <h3 className="boonjie-h3-2">Mint a Boonji</h3>
                    <p className="boonjie-p-2 mint-time">Connect your Metamask wallet to be one of the original members of our Space Program. Every member owns the commercial rights to their Boonji.</p>
                    <div className="boonji-form-container">
                      <div className="boonjie-form w-form">
                        <form id="email-form-2" name="email-form-2" data-name="Email Form 2" className="form">
                          <div className="div-block-15">
                            <a href="#" className="form-icon left w-inline-block"><img src="images/Less.svg" loading="lazy" alt="" /></a>
                            <a href="#" className="form-icon right w-inline-block"><img src="images/Plus.svg" loading="lazy" alt="" /></a><input type="text" className="boonjie-input-mint w-input" maxLength={256} name="name-2" data-name="Name 2" placeholder={1} id="name-2" />
                          </div><input type="submit" defaultValue="Mint" data-wait="Please wait..." className="boonji-form-btn w-button" />
                        </form>
                        <div className="w-form-done">
                          <div>Thank you! Your submission has been received!</div>
                        </div>
                        <div className="w-form-fail">
                          <div>Oops! Something went wrong while submitting the form.</div>
                        </div>
                      </div>
                    </div>
                    <div className="boonjis-minted">
                      <div className="boonji-count"><span className="boonjie-sold-count">3,787</span></div>
                      <div className="boonji-count"><span className="boonjie-sold-count right">/ 10,000 Boonji minted</span></div>
                    </div>
                    <div className="boonjie-stroke" />
                    <div className="boonjie-purchase-fast-mint">
                      <a href="#" className="boonjie-purchase-mint-btn-2">Mint 5</a>
                      <a href="#" className="boonjie-purchase-mint-btn-2">Mint 10</a>
                      <a href="#" className="boonjie-purchase-mint-btn-2">Mint 50</a>
                      <a href="#" className="boonjie-purchase-mint-btn-2">Mint 100</a>
                    </div>
                    <div className="boonjie-stroke" />
                  </div>
                  <a href="#" className="boonjie-purchase-custom-btn w-inline-block">
                    <div className="text-block-3">View Boonji&nbsp;Project on OpenSea</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="boonji-section wf-section">
            <div className="boonjie-container w-container">
              <div className="w-layout-grid boonjie-hero">
                <div className="boonjie-hero-left">
                  <h2 className="boonjie-h2">Fair Distribution</h2>
                  <div className="boonjie-subtitle">(BONDING CURVES ARE A PONZI)</div>
                  <p className="boonjie-p fair">There are no bonding curves here. Buying a Astronaut costs 0.08 ETH. There are no price tiers; BAYC membership costs the same for everyone.</p>
                  <p className="boonjie-note"><span className="boonji-note">NOTE:</span> Thirty Boonjis are being withheld from the sale. These will be used for giveaways, puzzle rewards — and for the creators' Space Club memberships.</p>
                </div>
                <div className="boonjie-hero-right">
                  <div className="boonjie-purchase-card-2">
                    <h3 className="boonjie-h3-2">Boonji entered the metaverse!</h3>
                    <p className="boonjie-p-2">All 10,000 Boonjai have been minted and our intergalactic journey has started! <br /><br />Your Boonji now doubles as your Space Program membership card, and grants access to members-only benefits established on the Interplanetary Road Activations and much more!<br /><br />If you want in, you may still be able to collect a Boonji in <a href="#" className="p2-link">OpenSea</a>.</p>
                  </div>
                  <a href="#" className="boonjie-purchase-custom-btn w-inline-block">
                    <div className="text-block-3">View Boonji&nbsp;Project on OpenSea</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="boonji-section wf-section">
            <div className="boonjie-container w-container">
              <div className="w-layout-grid boonji-space-program">
                <div className="sapceprogram-content">
                  <h2 className="boonjie-h2">The Space Program</h2>
                  <div className="boonjie-space" />
                  <p className="boonjie-p">Each Boonji is unique and programmatically generated from over 170 possible traits, including suit color and details, pose, helmet glass, and more. All Boonjis are out of this world, but some are rarer than others.<br />‍<br />They are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (See Record and Proof.) Purchasing a Boonji costs 0.08 ETH.<br />‍<br />To access members-only areas such as the SPACE CLUB, Boonji holders will need to be signed into their Metamask Wallet.</p>
                </div>
                <div className="space-program-image"><img src="images/astro-bloc2.jpg" loading="lazy" sizes="100vw" srcSet="images/astro-bloc2-p-500.jpeg 500w, images/astro-bloc2-p-800.jpeg 800w, images/astro-bloc2-p-1080.jpeg 1080w, images/astro-bloc2.jpg 1200w" alt="" className="spaceprogram-img" /></div>
              </div>
            </div>
          </div>
          <div className="boonji-section wf-section">
            <div className="boonjie-container w-container">
              <div className="boonjie-soace-club">
                <h2 className="boonjie-h2-2 text-center">Space Program</h2>
                <p className="boonjie-p-2 space-club-p">When you buy a Boonji, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a SPACE&nbsp;PROGRAM whose benefits and offerings will increase over time. Your Boonji can serve as your digital identity, and open digital doors for you.</p>
              </div>
              <div className="w-layout-grid boonjie-space-club-benefits">
                <div id="w-node-_0ae30329-4fef-d669-4a8e-d5129650b3c4-d5fe8d3f" className="boonjie-psace-club-item"><img src="images/club.svg" loading="lazy" alt="Boonjie Party" />
                  <h4 className="boonjie-h4">Space Club</h4>
                </div>
                <div id="w-node-_0ae30329-4fef-d669-4a8e-d5129650b3c8-d5fe8d3f" className="boonjie-psace-club-item"><img src="images/party.svg" loading="lazy" alt="Boonji Party" />
                  <h4 className="boonjie-h4">Boonji Party</h4>
                </div>
                <div id="w-node-_0ae30329-4fef-d669-4a8e-d5129650b3cc-d5fe8d3f" className="boonjie-psace-club-item"><img src="images/merch.svg" loading="lazy" alt="Boonji Merch" />
                  <h4 className="boonjie-h4">Boonji Merch</h4>
                </div>
                <div id="w-node-_0ae30329-4fef-d669-4a8e-d5129650b3d0-d5fe8d3f" className="boonjie-psace-club-item"><img src="images/wall.svg" loading="lazy" alt="Boonji Wall" />
                  <h4 className="boonjie-h4">The Wall</h4>
                </div>
                <div id="w-node-_0ae30329-4fef-d669-4a8e-d5129650b3d4-d5fe8d3f" className="boonjie-psace-club-item"><img src="images/roadmap.svg" loading="lazy" alt="Boonji Roadmap" />
                  <h4 className="boonjie-h4">Roadmap Activations</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="boonji-section wf-section">
            <div className="boonjie-container w-container">
              <div className="boonjie-soace-club">
                <h2 className="boonjie-h2-2 text-center">Interplanetary Course Activations</h2>
                <p className="boonjie-p-2 space-club-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="w-layout-grid boonjie-roadmap-grid">
                <div id="w-node-_72886b1d-298e-acbf-64f5-6afda72cca33-d5fe8d3f" className="boonjie-roadmap-rocket"><img src="images/Rocket.svg" loading="lazy" alt="Boonji Roadmap Rocket Indicator" className="image-10" /></div>
                <div id="w-node-aca27d46-f4a2-c72b-a6e8-2b77f5236b64-d5fe8d3f" className="boonjie-roadmap-indicator"><img src="images/100.svg" loading="lazy" alt="" /></div>
                <div className="boonjie-roadmap-info">
                  <h1 className="roadmap-header">100% Minted</h1>
                  <p className="roadmap-p">Your tag on a earthly, 4 meter tall, Boonji sculpture</p>
                </div>
                <div id="w-node-_0af228b8-d2a2-3b13-4fbc-b12e008627ae-d5fe8d3f" className="boonjie-roadmap-rocket"><img src="images/Rocket.svg" loading="lazy" alt="Boonji Roadmap Rocket Indicator" className="image-9" /></div>
                <div id="w-node-_5c83af75-94e2-92c5-ca8f-1f40650beab7-d5fe8d3f" className="boonjie-roadmap-indicator"><img src="images/90.svg" loading="lazy" alt="" /></div>
                <div className="boonjie-roadmap-info">
                  <h1 className="roadmap-header">90% Minted</h1>
                  <p className="roadmap-p">Unlocks the space program</p>
                </div>
                <div id="w-node-_6e71d24e-6762-9a1d-3520-4ffc67957cc9-d5fe8d3f" className="boonjie-roadmap-rocket"><img src="images/Rocket.svg" loading="lazy" alt="Boonji Roadmap Rocket Indicator" className="image-8" /></div>
                <div id="w-node-_09504be4-46f5-eee6-7991-f61b89c8157c-d5fe8d3f" className="boonjie-roadmap-indicator"><img src="images/80.svg" loading="lazy" alt="" /></div>
                <div className="boonjie-roadmap-info">
                  <h1 className="roadmap-header">80% Minted</h1>
                  <p className="roadmap-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-fc22deda-c777-4a16-4ad6-19e666e40e64-d5fe8d3f" className="boonjie-roadmap-rocket"><img src="images/Rocket.svg" loading="lazy" alt="Boonji Roadmap Rocket Indicator" className="image-7" /></div>
                <div id="w-node-c2aac32c-f854-1f2a-a11f-6a23ed0af8a1-d5fe8d3f" className="boonjie-roadmap-indicator"><img src="images/70.svg" loading="lazy" alt="" /></div>
                <div className="boonjie-roadmap-info">
                  <h1 className="roadmap-header">70 Minted</h1>
                  <p className="roadmap-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-_20a0a4b7-3317-3dda-255f-859ae126e58d-d5fe8d3f" className="boonjie-roadmap-rocket"><img src="images/Rocket.svg" loading="lazy" alt="Boonji Roadmap Rocket Indicator" className="image-6" /></div>
                <div id="w-node-e2766745-5cdd-4451-3d2e-8cd132074c6b-d5fe8d3f" className="boonjie-roadmap-indicator"><img src="images/60.svg" loading="lazy" alt="" /></div>
                <div className="boonjie-roadmap-info">
                  <h1 className="roadmap-header">60% Minted</h1>
                  <p className="roadmap-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-_16a9f906-2208-0dae-43f8-5112bfee70b9-d5fe8d3f" className="boonjie-roadmap-rocket"><img src="images/Rocket.svg" loading="lazy" alt="Boonji Roadmap Rocket Indicator" className="image-5" /></div>
                <div id="w-node-_301f7de1-8463-8b57-486a-e25fd41dea55-d5fe8d3f" className="boonjie-roadmap-indicator"><img src="images/50.svg" loading="lazy" alt="" /></div>
                <div className="boonjie-roadmap-info">
                  <h1 className="roadmap-header">50% Minted</h1>
                  <p className="roadmap-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-_2c487d49-3170-2511-8df2-00536b27e28a-d5fe8d3f" className="boonjie-roadmap-rocket"><img src="images/Rocket.svg" loading="lazy" alt="Boonji Roadmap Rocket Indicator" className="image-4" /></div>
                <div id="w-node-d270cf06-35f3-f748-8e7a-ae06b5c60736-d5fe8d3f" className="boonjie-roadmap-indicator"><img src="images/40.svg" loading="lazy" alt="" /></div>
                <div className="boonjie-roadmap-info">
                  <h1 className="roadmap-header">40% Minted</h1>
                  <p className="roadmap-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-_0730bbc9-51e9-a9f4-a0d0-095b3e33f715-d5fe8d3f" className="boonjie-roadmap-rocket"><img src="images/Rocket.svg" loading="lazy" alt="Boonji Roadmap Rocket Indicator" className="image-3" /></div>
                <div id="w-node-_0e17a89c-b85b-0258-2ae1-919417c5dc75-d5fe8d3f" className="boonjie-roadmap-indicator"><img src="images/30.svg" loading="lazy" alt="" /></div>
                <div className="boonjie-roadmap-info">
                  <h1 className="roadmap-header">30% Minted</h1>
                  <p className="roadmap-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-de5f667c-a216-1225-7d8a-9d6555b6b643-d5fe8d3f" className="boonjie-roadmap-rocket"><img src="images/Rocket.svg" loading="lazy" alt="Boonji Roadmap Rocket Indicator" className="image-2" /></div>
                <div id="w-node-_7c677d16-9c2b-ae4a-2999-44e4954eb8d3-d5fe8d3f" className="boonjie-roadmap-indicator"><img src="images/20.svg" loading="lazy" alt="" /></div>
                <div className="boonjie-roadmap-info">
                  <h1 className="roadmap-header">20% Minted</h1>
                  <p className="roadmap-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div id="w-node-_15e1ab24-fb6a-d590-dc1f-3fbfe03ee4c9-d5fe8d3f" className="boonjie-roadmap-rocket"><img src="images/Rocket.svg" loading="lazy" alt="Boonji Roadmap Rocket Indicator" className="image" /></div>
                <div id="w-node-e0d76b62-7033-120d-c5fd-5f2d84a3fc9f-d5fe8d3f" className="boonjie-roadmap-indicator"><img src="images/10.svg" loading="lazy" alt="" /></div>
                <div className="boonjie-roadmap-info">
                  <h1 className="roadmap-header">10% Minted</h1>
                  <p className="roadmap-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="boonji-section wf-section">
            <div className="boonjie-container w-container">
              <div className="boonjie-soace-club">
                <h2 className="boonjie-h2-2 text-center">Community Tools</h2>
                <p className="boonjie-p-2 space-club-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <div className="boonjie-tools-buttons">
                <a href="#" className="boonjie-communiy-btn w-inline-block">
                  <div className="text-block">Discord&nbsp;SERVER</div>
                </a>
                <a href="#" className="boonjie-communiy-btn w-inline-block">
                  <div className="text-block">Rarity.Tools</div>
                </a>
                <a href="#" className="boonjie-communiy-btn w-inline-block">
                  <div className="text-block">Rarity.Tools</div>
                </a>
              </div>
            </div>
          </div>
          <div className="boonji-section wf-section">
            <div className="boonjie-container w-container">
              <div className="w-layout-grid boonjie-hero">
                <div className="boonjie-hero-left">
                  <h2 className="boonjie-h2-2">The Crew</h2>
                  <p className="boonjie-p-2">Brendan Murphy partnered with Authentic to bring to life his Boonjis. The Interplanetary Course Activations are only the beginning. We can’t wait to build it into the best NFT community there is!</p>
                </div>
                <div className="boonjie-hero-right">
                  <div className="w-layout-grid grid-team-member">
                    <div id="w-node-edc729cf-4f24-f1dd-aead-8e842971cfa6-d5fe8d3f" className="boonjie-team-member">
                      <div className="crew-image"><img src="images/boon1.jpg" loading="lazy" sizes="100vw" srcSet="images/boon1-p-500.jpeg 500w, images/boon1-p-800.jpeg 800w, images/boon1.jpg 1043w" alt="" /></div>
                      <h4 className="boonjie-team-name">Brendan Murphy</h4>
                      <p className="boonjie-team-text">AKA&nbsp;"Boonji Boon"</p>
                      <div className="div-block-17">
                        <a href="#" className="boonjie-team-username">@BrendanMurphy</a>
                      </div>
                      <p className="boonjie-team-title">Founder/Artist</p>
                    </div>
                    <div id="w-node-edc729cf-4f24-f1dd-aead-8e842971cfb0-d5fe8d3f" className="boonjie-team-member">
                      <div className="crew-image"><img src="images/boon4.jpg" loading="lazy" sizes="100vw" srcSet="images/boon4-p-500.jpeg 500w, images/boon4-p-800.jpeg 800w, images/boon4.jpg 1043w" alt="" /></div>
                      <h4 className="boonjie-team-name">Team 2</h4>
                      <p className="boonjie-team-text">AKA&nbsp;"Boonji Boon"</p>
                      <div className="div-block-17">
                        <a href="#" className="boonjie-team-username">@PersonTwo</a>
                      </div>
                      <p className="boonjie-team-title">Founder</p>
                    </div>
                    <div id="w-node-edc729cf-4f24-f1dd-aead-8e842971cfba-d5fe8d3f" className="boonjie-team-member">
                      <div className="crew-image"><img src="images/boon2.jpg" loading="lazy" sizes="100vw" srcSet="images/boon2-p-500.jpeg 500w, images/boon2-p-800.jpeg 800w, images/boon2.jpg 1043w" alt="" /></div>
                      <h4 className="boonjie-team-name">Team 3</h4>
                      <p className="boonjie-team-text">AKA&nbsp;"Boonji Boon"</p>
                      <div className="div-block-17">
                        <a href="#" className="boonjie-team-username">@PersonThree</a>
                      </div>
                      <p className="boonjie-team-title">Founder</p>
                    </div>
                    <div id="w-node-edc729cf-4f24-f1dd-aead-8e842971cfc4-d5fe8d3f" className="boonjie-team-member">
                      <div className="crew-image"><img src="images/boon3.jpg" loading="lazy" sizes="100vw" srcSet="images/boon3-p-500.jpeg 500w, images/boon3-p-800.jpeg 800w, images/boon3.jpg 1043w" alt="" /></div>
                      <h4 className="boonjie-team-name">Team 4</h4>
                      <p className="boonjie-team-text">AKA&nbsp;"Boonji Boon"</p>
                      <div className="div-block-17">
                        <a href="#" className="boonjie-team-username">@PersonFour</a>
                      </div>
                      <p className="boonjie-team-title">Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="verify-address-section wf-section">
            <div className="container boonjie-verify-container">
              <div className="boonji-verified">
                <h2 className="boonjie-h2">Verified smart contract address:</h2>
                <a href="#" className="verify-address-bg w-inline-block">
                  <div className="boonji-address-box">0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</div>
                </a>
                <a href="#" className="boonjie-copy-address-btn w-button">Copy Address</a>
              </div>
            </div>
          </div>  <input type="text" id="name" />
        </div>
        <p>Enter your HTML here</p>
      </div>
  )
}

export default index
